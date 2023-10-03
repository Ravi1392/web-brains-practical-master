import logo from './logo.svg';
import './App.css';
import { interceptor } from './utils/interceptor';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkAuth } from './store/action/Users';
import { Auth, Root } from './routing';
import { MainLoader } from './uiComponents';


function App() {
  interceptor();
  const dispatch = useDispatch();
  const reduxState = useSelector(({ users }) => {
    return {
      loading: users.loading,
    };
  });
  const { loading } = reduxState;

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return <div className=''>{loading ? <MainLoader /> : <Root />}</div>;

}

export default App;
