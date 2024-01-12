import styled from "@emotion/styled";
import { AccordionDetails, Box, Button, Typography } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Icons from "@/src/assets";
import Link from "next/link";
import { handleClickWhatsapp } from "../header/headerComponents/Menu";
import dynamic from "next/dynamic";

const AccordionSummaryComponent = dynamic(
  () => import("@mui/material/AccordionSummary"),
  { ssr: false }
);

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
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export const MobileFooter = (props: any) => {
  const [open, setOpen] = useState<boolean>(false);

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
      <AccordionSummaryComponent
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
          onClick={() => setOpen(!open)}
        >
          <Typography
            sx={{ color: "white", fontWeight: "500", fontSize: "19px" }}
            className="text-[17px] sm:text-[19px]"
          >
            {props?.heading}
          </Typography>
          <Button sx={{ color: "black" }} onClick={() => setOpen(!open)}>
            {open ? (
              <ExpandLessIcon sx={{ fontSize: "25px", color: "white" }} />
            ) : (
              <ExpandMoreIcon sx={{ fontSize: "25px", color: "white" }} />
            )}
          </Button>
        </Box>
      </AccordionSummaryComponent>
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
      <Link href={"/marketing"}>
        <OptionButton>Marketing</OptionButton>
      </Link>
      <Link href={"/business"}>
        <OptionButton>Business</OptionButton>
      </Link>
      <Link href={"/invitation"}>
        <OptionButton>Card & Invitation</OptionButton>
      </Link>
    </Box>
  );
};

export const Company = () => {
  const router = useRouter();

  return (
    <Box className="flex flex-col items-start text-white font-normal">
      <Link href={"/about-us"}>
        <OptionButton>About</OptionButton>
      </Link>
      {/* <OptionButton>Career</OptionButton> */}
      <Link href={"/plans"}>
        <OptionButton>Price and plan</OptionButton>
      </Link>
      <Link href={"/contact-us"}>
        <OptionButton>Contact us</OptionButton>
      </Link>
      <Link href={"https://www.craftyartapp.com/blog"}>
        <OptionButton>Blog</OptionButton>
      </Link>
    </Box>
  );
};

export const Legal = () => {
  const router = useRouter();

  return (
    <Box className="flex flex-col items-start text-white font-normal">
      <Link href={"/privacy-policy"}>
        <OptionButton>Privacy policy</OptionButton>
      </Link>
      <Link href={"/referral-program"}>
        <OptionButton>referral program</OptionButton>
      </Link>
      <Link href={"/term-condition"}>
        <OptionButton>Terms and condition</OptionButton>
      </Link>
      <Link href={"/copyright-infringement"}>
        <OptionButton>Copyright infrigment</OptionButton>
      </Link>
    </Box>
  );
};

export const Discover = () => {
  const router = useRouter();

  return (
    <Box className="flex flex-col items-start text-white font-normal">
      <Link href={"/invitation"}>
        <OptionButton>Invitation</OptionButton>
      </Link>
      <Link href={"/quotes"}>
        <OptionButton>Quotes</OptionButton>
      </Link>
      <Link href={"/flyer"}>
        <OptionButton>Flyer</OptionButton>
      </Link>
      <Link href={"/caricature"}>
        <OptionButton>Caricature</OptionButton>
      </Link>
      <Link href={""} onClick={handleClickWhatsapp}>
        <OptionButton>Custom order</OptionButton>
      </Link>
      <Link href={"/brand-kit"}>
        <OptionButton>Brand Kit</OptionButton>
      </Link>
    </Box>
  );
};

export default function Footer() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

  return (
    <Box className="bg-black">
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
                <a href="https://play.google.com/store/apps/details?id=com.crafty.art">
                  <img
                    src={`${assetsUrl}/w_assets/images/playstore.png`}
                    alt="playstore"
                  />
                </a>
              </Box>
              <Box className="flex items-center gap-5 my-8 max-sm:justify-center">
                <span className="cursor-pointer">
                  <a href="https://www.facebook.com/people/Crafty-Art/100087508073608/">
                    <Icons.facebookIcon svgProps={{ width: 25, height: 25 }} />
                  </a>
                </span>

                <span className="cursor-pointer">
                  <a href="https://www.instagram.com/craftyart_official/">
                    <Icons.instagramIcon svgProps={{ width: 25, height: 25 }} />
                  </a>
                </span>

                <span className="cursor-pointer">
                  <a href="https://in.pinterest.com/crafty_art_official/">
                    <Icons.pinterestIcon svgProps={{ width: 25, height: 25 }} />
                  </a>
                </span>

                <span className="cursor-pointer">
                  <a href="https://twitter.com/craftyartstudio">
                    <Icons.twitterIcon svgProps={{ width: 25, height: 25 }} />
                  </a>
                </span>

                <span className="cursor-pointer">
                  <a href="https://www.youtube.com/@craftyartgraphic7864">
                    <Icons.youtubeIcon svgProps={{ width: 25, height: 25 }} />
                  </a>
                </span>
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
          Copyright © 2023-2024 by Crafty Art All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
