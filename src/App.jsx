import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/sign-in/SignIn";
import Info from "./pages/info/InFo";
import { Layout } from "./components/layout/Layout";
import { ThemeProvider } from "@mui/material/styles";
import { Coffee } from "./pages/coffeechat/Coffee";
import { theme } from "./styles/themeMuiStyle";
import CoffeeDetail from "./pages/coffee-detail/CoffeeDetail";
import Coffeeopen from "./pages/coffeechat/CoffeeOpen";
import KakaoRedirectPage from "./pages/sign-in/KakaoRedirectPage";
import SignupFail from "./pages/info/SignupFail";
import MyCoffeeChat from "./pages/mypage/MyCoffeeChat";
import FavoritesVideo from "./pages/mypage/FavoritesVideo";
import InfoEdit from "./pages/mypage/InfoEdit";
import MyPage from "./pages/mypage/MyPage";
import { Main } from "./pages/mainpage/Main";
import Withdrawal from "./pages/mypage/Withdrawal";
import React, { useState, useEffect } from "react";

const access = localStorage.getItem("isLoggedInState") === "true";

console.log("!!로긴 유무", access);

function App() {
  const [access, setAccess] = useState(
    localStorage.getItem("isLoggedInState") === "true"
  );

  // 매번 localStorage를 감시하고, 값이 변경되면 상태를 업데이트
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedInState") === "true";
    setAccess(isLoggedIn);
  }, [access]); // access 값이 변경될 때마다 실행

  const PrivateRoute = ({ authenticated, component: Component }) => {
    console.log("확인", authenticated);
    // console.log("무가", Component);

    return authenticated ? (
      Component
    ) : (
      <Navigate to="/" {...alert("접근할 수 없는 페이지입니다.")} />
    );
  };
  return (
    <RecoilRoot>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Layout>
            <React.Fragment>
              <Routes>
                {/* 로그인이 필요하지 않은 페이지 */}
                <Route exact path="/" element={<Main />} />
                <Route exact path="/signin" element={<SignIn />} />
                <Route exact path="/info" element={<Info />} />
                <Route exact path="/coffee" element={<Coffee />} />
                <Route exact path="/coffee/:id" element={<CoffeeDetail />} />
                <Route exact path="/coffeechat-open" element={<Coffeeopen />} />
                <Route path="/oauth/info" element={<KakaoRedirectPage />} />
                <Route
                  path="/oauth/login/success"
                  element={<KakaoRedirectPage />}
                />
                <Route path="/fail" element={<SignupFail />} />

                {/* 로그인이 필요한 페이지 */}
                <Route
                  path="/mypage"
                  element={
                    <PrivateRoute
                      authenticated={access}
                      component={<MyPage />}
                    />
                  }
                />
                <Route
                  path="/mypage/infoedit"
                  element={
                    <PrivateRoute
                      authenticated={access}
                      component={<InfoEdit />}
                    />
                  }
                />
                <Route
                  path="/mypage/video"
                  element={
                    <PrivateRoute
                      authenticated={access}
                      component={<FavoritesVideo />}
                    />
                  }
                />
                <Route
                  path="/mypage/withdrawal"
                  element={
                    <PrivateRoute
                      authenticated={access}
                      component={<Withdrawal />}
                    />
                  }
                />
                <Route
                  path="/mypage/coffee"
                  element={
                    <PrivateRoute
                      authenticated={access}
                      component={<MyCoffeeChat />}
                    />
                  }
                />
              </Routes>
            </React.Fragment>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
