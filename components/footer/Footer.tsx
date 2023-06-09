import styled from "@emotion/styled";
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const OptionButton = (props: any) => {
  return (
    <Button
      className="mb-4 cursor-pointer text-[16px] normal-case text-white p-0 min-w-[auto] opacity-90 font-[300]"
      {...props}
    >
      {props.children}
    </Button>
  );
};
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  //   border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export const MobileFooter = (props: any) => {
  const [open, setopen] = useState<boolean>(false);

  const [expanded, setExpanded] = React.useState<string | false>("panel2");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      sx={{ width: "100%", backgroundColor: "transparent" }}
    >
      <AccordionSummary
        aria-controls="panel1d-content"
        id="panel1d-header"
        sx={{ borderBottom: open ? "" : "1px solid #D9D9D9" }}
        className="max-lg:px-[0px]"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            width: "100%",
          }}
          onClick={() => setopen(!open)}
        >
          <Typography
            sx={{ color: "white", fontWeight: "500", fontSize: "19px" }}
            className="text-[17px] sm:text-[19px]"
          >
            {props?.heading}
          </Typography>
          <Button sx={{ color: "black" }} onClick={() => setopen(!open)}>
            {open ? (
              <ExpandLessIcon sx={{ fontSize: "25px", color: "white" }} />
            ) : (
              <ExpandMoreIcon sx={{ fontSize: "25px", color: "white" }} />
            )}
          </Button>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{ borderBottom: "1px solid #D9D9D9" }}
        className="max-lg:px-[0px]"
      >
        {props.button}
      </AccordionDetails>
    </Accordion>
  );
};

export const Special = () => {
  const router = useRouter();

  return (
    <Box className="flex flex-col items-start text-white font-normal">
      <OptionButton onClick={() => router.push("/marketing")}>
        Marketing
      </OptionButton>
      <OptionButton onClick={() => router.push("/bussiness")}>
        Business
      </OptionButton>
      <OptionButton>Card & Invitation</OptionButton>
    </Box>
  );
};

export const Company = () => {
  const router = useRouter();

  return (
    <Box className="flex flex-col items-start text-white font-normal">
      <OptionButton>About</OptionButton>
      <OptionButton>Career</OptionButton>
      <OptionButton>Price and plan</OptionButton>
      <OptionButton>Contact us</OptionButton>
      <OptionButton>Blog</OptionButton>
    </Box>
  );
};

export const Legal = () => {
  const router = useRouter();

  return (
    <Box className="flex flex-col items-start text-white font-normal">
      <OptionButton>Privacy policy</OptionButton>
      <OptionButton>Referal program</OptionButton>
      <OptionButton>Terms and condition</OptionButton>
      <OptionButton>Copyright infrigment</OptionButton>
    </Box>
  );
};

export const Discover = () => {
  const router = useRouter();

  return (
    <Box className="flex flex-col items-start text-white font-normal">
      <OptionButton onClick={() => router.push("/invitation")}>
        Invitation
      </OptionButton>
      <OptionButton onClick={() => router.push("/quotes")}>Quotes</OptionButton>
      <OptionButton onClick={() => router.push("/flyers")}>Flyer</OptionButton>
      <OptionButton>Festival</OptionButton>
      <OptionButton>Custom order</OptionButton>
      <OptionButton>Brand Kit</OptionButton>
    </Box>
  );
};

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="  bg-black">
      <Box className="max-w-[2400px] w-[100%] sm:w-[90%] lg:w-[100%] xl:w-[80%] mx-auto pt-[50px] max-sm:pt-[0px]">
        <Box className="grid grid-cols-1  sm:grid-cols-3  gap-5 xl:gap-8 px-4 py-6 lg:py-8 lg:grid-cols-5  xl:grid-cols-5">
          <Box className="hidden sm:block">
            <Typography className="mb-6 text-[20px] font-medium   text-white">
              Special(Industry)
            </Typography>
            <Special />
          </Box>
          <Box className="hidden sm:block">
            <Typography className="mb-6 text-[20px] font-medium   text-white">
              Company
            </Typography>
            <Company />
          </Box>
          <Box className="hidden sm:block">
            <Typography className="mb-6 text-[20px] font-medium   text-white">
              Legal
            </Typography>
            <Legal />
          </Box>
          <Box className="hidden sm:block">
            <Typography className="mb-6 text-[20px] font-medium   text-white">
              Discover
            </Typography>
            <Discover />
          </Box>

          <Box className="w-[100%] block sm:hidden">
            <MobileFooter heading="Special(Industry)" button={<Special />} />
            <MobileFooter heading="Company" button={<Company />} />
            <MobileFooter heading="Legal" button={<Legal />} />
            <MobileFooter heading="Discover" button={<Discover />} />
          </Box>

          <Box>
            <Typography className="mb-6 text-[20px] font-medium   text-white max-sm:text-center">
              Get the free app
            </Typography>
            <Box className="flex flex-col items-start text-white font-normal max-sm:items-center">
              <Box className="cursor-pointer">
                <img src="./images/playstore.png" alt="playstore" />
              </Box>
              <Box className="flex items-center gap-5 my-8 max-sm:justify-center">
                <img
                  src="./icons/facebook.svg"
                  alt="facebook"
                  className="w-[25px] h-[25px] cursor-pointer"
                />
                <img
                  src="./icons/instagram.svg"
                  alt="instagram"
                  className="w-[25px] h-[25px] cursor-pointer"
                />
                <img
                  src="./icons/pinterest.svg"
                  alt="pinterest"
                  className="w-[25px] h-[25px] cursor-pointer"
                />
                <img
                  src="./icons/twitter.svg"
                  alt="twitter"
                  className="w-[25px] h-[25px] cursor-pointer"
                />
                <img
                  src="./icons/youtube.svg"
                  alt="youtube"
                  className="w-[25px] h-[25px] cursor-pointer"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="w-[90%] mx-auto py-5"
        sx={{ borderTop: "2px solid grey" }}
      >
        <Typography className="text-center text-[13px] sm:text-[16px] text-white">
          Copyright © 2022-2023 by Crafty Art All Rights Reserved.
        </Typography>
      </Box>
    </footer>
  );
}
