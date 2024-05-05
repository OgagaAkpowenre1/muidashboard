import { Box } from "@mui/material";
import Header from "../../components/header";

export default function Dashboard() {
  return <Box m={"20px"}>
    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
    <Header title={"DASHBOARD"} subtitle={"Welcome to your Dashboard"}/>
    </Box>
  </Box>;
}
