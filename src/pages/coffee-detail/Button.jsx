import { Box, Button, Grid } from "@mui/material";
import { buttonStyles } from "./ButtonStyle";
import ShareIcon from "@mui/icons-material/Share";
import NewBtn from "../../components/common/new-btn/NewBtn";
import { theme } from "../../styles/themeMuiStyle";
import { useNavigate } from "react-router-dom";

function Buttons({ host }) {
  const navigate = useNavigate();
  const handleConfirm = () => {
    if (
      window.confirm("신청이 완료되었어요! 커피챗 신청 내역을 확인해보실래요?")
    ) {
      // 사용자가 '확인'을 클릭한 경우
      navigate("/mypage");
    } else {
      // 사용자가 '취소'를 클릭한 경우
      console.log("User clicked cancel.");
    }
  };

  const copyUrlToClipboard = () => {
    const url = window.location.href;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("URL이 클립보드에 복사되었습니다.");
      })
      .catch((err) => {
        console.error("URL 복사에 실패했습니다.", err);
      });
  };

  return (
    <Box sx={buttonStyles.Container}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={9}
          sm={9}
          fullwidth
          sx={{ display: "flex", gap: "12px" }}
        >
          {host ? (
            <>
              <NewBtn
                type="submit"
                title="수정하기"
                fullWidth
                styles={{
                  background: theme.palette.primary.main,
                  color: "white",
                }}
              ></NewBtn>
              <NewBtn
                type="submit"
                title="삭제하기"
                fullWidth
                styles={{
                  background: theme.palette.primary.main,
                  color: "white",
                }}
              ></NewBtn>
            </>
          ) : (
            <NewBtn
              type="submit"
              title="신청하기"
              onClick={handleConfirm}
              fullWidth
              styles={{
                background: theme.palette.primary.main,
                color: "white",
              }}
            ></NewBtn>
          )}
        </Grid>
        <Grid item xs={3} sm={3}>
          <Button
            type="submit"
            fullWidth
            sx={buttonStyles.ShareButton}
            onClick={copyUrlToClipboard}
          >
            <ShareIcon sx={{ color: theme.palette.primary.main }} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Buttons;
