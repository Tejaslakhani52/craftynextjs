import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import Head from "next/head";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export default function FaqsBox(props: any) {
  const [open, setOpen] = useState<boolean>(false);
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
      setOpen(!open);
    };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ width: "100%", backgroundColor: "transparent" }}
      >
        <AccordionSummary
          aria-controls="panel1d-content "
          id="panel1d-header"
          sx={{
            borderBottom: open ? "1px solid #D9D9D9" : "",
            maxlg: { px: "[0px]" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              width: "100%",
            }}
          >
            <Typography
              sx={{ color: "#1C3048", fontWeight: "500", fontSize: "19px" }}
              className="text-[14px] 2sm:text-[17px] sm:text-[19px]"
            >
              {props?.heading}
            </Typography>
            <Button sx={{ color: "black" }} onClick={() => setOpen(!open)}>
              {open ? (
                <ExpandLessIcon sx={{ fontSize: "25px" }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: "25px" }} />
              )}
            </Button>
          </Box>
        </AccordionSummary>
        <AccordionDetails
          sx={{ borderBottom: open ? "" : "1px solid #D9D9D9" }}
        >
          <Typography className="text-black max-sm:text-[15px] max-2sm:text-[13px]">
            {props?.text}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
