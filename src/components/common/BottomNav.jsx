import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/CottageTwoTone';
import WorkIcon from '@mui/icons-material/Work';
import CoffeeIcon from '@mui/icons-material/EmojiFoodBeverageTwoTone';
import PersonIcon from '@mui/icons-material/AccountCircleTwoTone';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(0);
  const isLogin = localStorage.getItem('isLoggedInState');

  useEffect(() => {
    switch (true) {
      case location.pathname === '/':
        setValue(0);
        break;
      case location.pathname === '/jd':
        setValue(1);
        break;
      case location.pathname === '/coffee':
        setValue(2);
        break;
      case location.pathname === '/signin':
        setValue(3);
        break;
      case location.pathname.startsWith('/mypage'):
        setValue(4);
        break;
      default:
        break;
    }
  }, [location]);

  const handleNavigationChange = (_, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/jd');
        break;
      case 2:
        navigate('/coffee');
        break;
      case 3:
        navigate(isLogin === 'true' ? '/mypage' : '/signin');
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        value={value}
        onChange={handleNavigationChange}
        showLabels
        sx={{
          height: 80,
          display: 'flex',
          gap: '8%',
          borderTop: '1px solid light-gray',
        }}
      >
        <BottomNavigationAction label="메인" icon={<HomeIcon fontSize="medium" />} />
        <BottomNavigationAction label="JD-ON" icon={<WorkIcon fontSize="medium" />} />
        <BottomNavigationAction label="커피챗" icon={<CoffeeIcon fontSize="medium" />} />
        <BottomNavigationAction
          label={isLogin === 'true' ? 'My page' : '로그인'}
          icon={<PersonIcon fontSize="medium" />}
        />
      </BottomNavigation>
    </Box>
  );
}
