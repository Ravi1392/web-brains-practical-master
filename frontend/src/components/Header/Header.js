import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Header.css';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const Header = () => {
  const { users } = useSelector((state) => {
    return { frontEnd: state.FrontEnd, users: state.users };
  });
  return (
    <Box className='main_header_style'>
      <HeaderMainDiv sx={{ display: 'flex', justifyContent: 'space-between', margin:'0 auto',  }}>
        <section className='welcome_name'>
          <h2>
            Welcome Back, <span>{users?.user?.userName || 'Guest'}</span>
          </h2>
        </section>
        <section>
          <Link to={'/login'}>
            <Typography variant='body1' sx={{ fontWeight: '600' }}>
              login
            </Typography>
          </Link>
        </section>
      </HeaderMainDiv>
    </Box>
  );
};

export default Header;

const HeaderMainDiv = styled(Box)(({theme})=>({
  minWidth:'60rem',
  maxWidth: '80rem'
}))
