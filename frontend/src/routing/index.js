import { Route, Routes } from 'react-router-dom';
import React, { Fragment } from 'react';
import Login from '../pages/auth/Login';
import Dashboard from '../pages/Dashboard';
import { getTokenAndSetIntoHeaders, getValueIntoStorage } from '../utils/storage/Functions';
import NotFoundPage from '../pages/NotFoundPage';
import { TOKEN } from '../utils/storage/Constant';
import MainLayout from '../components/Layout/MainLayout';

const routes = [
  {
    path: '/dashboard',
    exact: true,
    component: <Dashboard />,
  },
  {

  }
];

function Auth() {
  let access_token = getValueIntoStorage(TOKEN);

  return (
    <Fragment>
      <Routes>
        
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Fragment>
  );
}

function Root() {
  // const history = useNavigate();
  // const user = useSelector(({ users }) => users?.user);
  // const dispatch = useDispatch();
  getTokenAndSetIntoHeaders();
  return (
    <Fragment>
      <div className=''>
        <div className=''>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<MainLayout />}>
              {routes.map((route, index) => (
                <Route key={index} exact={route?.exact} path={route?.path} element={route?.component} />
              ))}
            </Route>

            {/* <Route path={`/`} exact={true} element={<Dashboard />} /> */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Fragment>
  );
}

export { Auth, Root };
