import { Box, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInState } from 'recoil/atoms';
import { Filters } from './components/filters';

function FiltersAndButton({ sortData, kindOfJd, onChange }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isLogin = useRecoilValue(isLoggedInState).isLoginUser;

  const handleConfirm = () => {
    if (
      window.confirm(
        '커피챗 생성은 로그인 후 사용하실 수 있습니다. \n로그인 페이지로 이동하시겠습니까?',
      )
    ) {
      localStorage.setItem('pathname', pathname);
      navigate('/signin');
    }
  };

  const handleOpenCoffee = () => {
    if (!isLogin) {
      handleConfirm();
      return;
    }
    navigate('/coffeechat-open');
  };
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
      <Filters sortData={sortData} onChange={onChange} kindOfJd={kindOfJd} />
      <Button
        variant="contained"
        disableElevation
        sx={{
          fontWeight: 600,
          fontSize: 12,
          padding: '4px 10px',
          gap: 1,
        }}
        onClick={handleOpenCoffee}>
        + New
      </Button>
    </Box>
  );
}

export default FiltersAndButton;
