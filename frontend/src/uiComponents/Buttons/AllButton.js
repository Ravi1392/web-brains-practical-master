import { Button } from "@mui/material";
import { styled } from "@mui/system";

const FullWidthButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  margin: "0px",
  fontFamily: "Nunito Sans",
  width: "100%",
  textTransform: "capitalize",
  whiteSpace: " nowrap",
  fontWeight: 800,
  backgroundColor: "#528DC8 !important",
  fontSize: "18px",
  [theme.breakpoints.up("md")]: {
    padding: "13px 15px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "8px 15px",
  },
  "&:hover": {
    backgroundColor: "#528DC8",
  },
  "&:active": {
    backgroundColor: "#528DC8",
  },
}));

const FullSecondButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  margin: "0px",
  fontFamily: "Nunito",
  width: "100%",
  textTransform: "capitalize",
  whiteSpace: " nowrap",
  fontWeight: 800,
  backgroundColor: "#528DC8",
  fontSize: "18px",
  [theme.breakpoints.up("md")]: {
    padding: "8px 15px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "5px 15px",
  },
  "&:hover": {
    backgroundColor: "#528DC8",
  },
  "&:active": {
    backgroundColor: "#528DC8",
  },
}));

const MainButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  margin: "0px",
  fontFamily: "Nunito",
  textTransform: "capitalize",
  whiteSpace: " nowrap",
  fontWeight: 700,
  backgroundColor: "#528DC8 !important",
  border: "1px solid #528DC8",
  fontSize: "18px",
  [theme.breakpoints.up("md")]: {
    padding: "2px 54px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "2px 35px",
  },
  "&:hover": {
    backgroundColor: "#528DC8",
  },
  "&:active": {
    backgroundColor: "#528DC8",
  },
}));
const BorderButton = styled(Button)(({ theme }) => ({
  color: "#000",
  margin: "0px",
  fontFamily: "Nunito",
  textTransform: "capitalize",
  whiteSpace: " nowrap",
  fontWeight: 700,
  border: "1px solid black",
  backgroundColor: "#fffff !important",
  fontSize: "18px",
  [theme.breakpoints.up("md")]: {
    padding: "2px 40px 2px 35px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "2px 35px 2px 25px",
  },
  "&:hover": {
    backgroundColor: "#fffff",
  },
  "&:active": {
    backgroundColor: "#fffff",
  },
}));

const BorderSecondButton = styled(Button)(({ theme }) => ({
  color: "#000",
  margin: "0px",
  display: "flex",
  alignItems: "center",
  fontFamily: "Nunito",
  textTransform: "capitalize",
  whiteSpace: " nowrap",
  fontWeight: 600,
  border: "1px solid #A3A3A3",
  backgroundColor: "#fffff !important",
  fontSize: "14px",
  [theme.breakpoints.up("md")]: {
    padding: "5px 12px 5px 12px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "2px 12px 2px 12px",
  },
  "&:hover": {
    backgroundColor: "#fffff",
    color: "#000",
  },
  "&:active": {
    backgroundColor: "#fffff",
  },
}));
export default { FullWidthButton, MainButton, BorderButton, FullSecondButton, BorderSecondButton };
