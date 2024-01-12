import { handleEmailClick } from "@/src/commonFunction/emailCheck";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));

export default function index() {
  return (
    <div className="py-[50px] max-sm:py-[20px] px-[15px]">
      <CustomHead
        heading={"Contact Us - Crafty Art"}
        text="Need Help? Contact Us Instantly! Your Solution Awaits. Expert Assistance 24/7. Don't Miss Out – Act Now!"
      />
      <Box className="flex items-center flex-col">
        <Typography
          className="text_linear max-sm:text-[30px] text-[45px] font-[700] text-center mx-auto sm:mb-10"
          variant="h1"
        >
          Contact Us
        </Typography>

        <Box className="w-[80%] max-sm:w-full mx-auto">
          <Typography>
            Thank you for your interest in CraftyArt! We're thrilled to hear
            from you and assist with any inquiries or collaborations you might
            have. Please feel free to get in touch using the following contact
            information:
          </Typography>
          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Contact Information:
          </Typography>

          <Typography className="mb-2">
            <span className="font-semibold">Email :</span>{" "}
            <span
              className="text-[#5961F8] cursor-pointer"
              onClick={handleEmailClick}
            >
              craftyartapp@gmail.com
            </span>
          </Typography>

          <Typography className="mb-2">
            <span className="font-semibold"> Business Hours :</span> 9AM to 6PM
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-8 mb-2 font-[700]"
          >
            Get in Touch:
          </Typography>

          <Typography className="mb-3">
            Whether you have a question about our services, want to discuss a
            potential project, or simply want to say hello, we're here and eager
            to help. You can reach us through the following methods:
          </Typography>
          <Typography className="mb-3">
            <span className="font-semibold">Email :</span> For general inquiries
            or project proposals, please email us at{" "}
            <span
              className="text-[#5961F8] cursor-pointer"
              onClick={handleEmailClick}
            >
              craftyartapp@gmail.com
            </span>
            . Our team will respond within 1-2 business days.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-8 mb-2 font-[700]"
          >
            Social Media :
          </Typography>

          <Typography className="mb-3">
            Stay connected and updated on our latest projects, design tips, and
            news by following us on our social media channels:
          </Typography>

          <ul
            style={{
              listStyleType: "unset",
              color: "blue",
              marginLeft: "20px",
            }}
          >
            <li className="cursor-pointer mb-1">
              <a href="https://www.instagram.com/craftyart_official/">
                Instagram
              </a>
            </li>

            <li className="cursor-pointer mb-1">
              <a href="https://www.facebook.com/people/Crafty-Art/100087508073608/">
                Facebook
              </a>
            </li>

            <li className="cursor-pointer mb-1">
              <a href="https://in.pinterest.com/crafty_art_official/">
                Pinterest
              </a>
            </li>

            <li className="cursor-pointer mb-1">
              <a href="https://twitter.com/craftyartstudio">Twitter</a>
            </li>

            <li className="cursor-pointer mb-1">
              <a href="https://www.youtube.com/@craftyartgraphic7864">
                Youtube
              </a>
            </li>
          </ul>
        </Box>
      </Box>
    </div>
  );
}
