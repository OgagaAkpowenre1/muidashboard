import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import Header from "../../components/header";
import AccordionSummary from "@mui/material/AccordionSummary/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";
import { ExpandMoreOutlined } from "@mui/icons-material/ExpandMoreOutlined";
import { tokens } from "../../themes";
import { ExpandMore } from "@mui/icons-material";

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"}>
      <Header title={"FAQ"} subtitle={"Frequently Asked Questions"} />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            ea, qui possimus laudantium tempore sed ex amet itaque omnis id.
            Omnis laborum repellat possimus, alias quo pariatur tenetur autem
            nulla?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            ea, qui possimus laudantium tempore sed ex amet itaque omnis id.
            Omnis laborum repellat possimus, alias quo pariatur tenetur autem
            nulla?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            ea, qui possimus laudantium tempore sed ex amet itaque omnis id.
            Omnis laborum repellat possimus, alias quo pariatur tenetur autem
            nulla?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            ea, qui possimus laudantium tempore sed ex amet itaque omnis id.
            Omnis laborum repellat possimus, alias quo pariatur tenetur autem
            nulla?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
