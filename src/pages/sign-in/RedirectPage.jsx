import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isLoggedInState, userInfo } from 'recoil/atoms';

const RedirectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const setData = useSetRecoilState(userInfo);
  const setIsLogin = useSetRecoilState(isLoggedInState).isLoginUser;


  let path = localStorage.getItem('pathname');
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const value = searchParams.get('value');
    const hmac = searchParams.get('hmac');

    if (hmac) {
      navigate('/info');
      setData((prev) => ({ ...prev, encrypted: value, hmac: hmac }));
    } else {
      if (path) {
        setIsLogin(true);
        navigate(path);
        localStorage.removeItem('pathname');
      } else {
        navigate('/');
      }
    }
  }, [location, navigate, setData, path, setIsLogin]);

  return (
    <div>
      <div>Processing...</div>
    </div>
  );
};

export default RedirectPage;
