import { Box } from "@mui/material";
import LineChart from "../../components/lineChart";
import Header from "../../components/header";

export default function Line() {
  return (
    <Box m="20px">
      <Header title={"Line Chart"} subtitle={"Simple Line Chart"} />
      <Box height={"75vh"}>
        <LineChart />
      </Box>
    </Box>
  );
}
