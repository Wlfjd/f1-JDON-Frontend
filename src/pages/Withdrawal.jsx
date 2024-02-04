import React from "react";
import Header from "../components/common/Header";
import InputField from "../components/common/InputField";
import { Box, Button, Container } from "@mui/material";
import { buttonStyle } from "../components/common/navigation-btn/NavigationBtnStyles";
import { useNavigate } from "react-router-dom";
import { deleteMember } from "../api/api";

export default function Withdrawal() {
  const navigate = useNavigate();

  const handleSaveChanges = async () => {
    try {
      const res = await deleteMember();
      if (res) {
        console.log(`${res}회원탈퇴합니다`);
        //로그인 여부 상태값 변경
        navigate("/");
      }
    } catch (error) {
      console.error("Withdrawal파일 deleteMember 통신에러", error);
    }
    // console.log("탈퇴합니다.");
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "85vh", // 전체 화면 높이로 설정
        justifyContent: "space-between", // 상단, 하단 여백으로 요소 배치
        paddingX: "29px",
      }}
    >
      <Header title={"회원 탈퇴"} />

      <InputField
        label={"이메일"}
        type={"email"}
        placeholder={"이메일을 입력해주세요"}
      />

      <Button
        onClick={handleSaveChanges}
        sx={{
          ...buttonStyle.Button,
          width: "100%",
          marginBottom: "10px",
        }}
      >
        탈퇴
      </Button>
    </Container>
  );
}
