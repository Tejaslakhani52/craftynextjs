import Icons from "@/src/assets";
import { useScreenHeight } from "@/src/commonFunction/screenWidthHeight";
import { faqsList } from "@/src/constants/faqsList";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function Index() {
  const screenHeight = useScreenHeight();
  const [openFaqs, setOpenFaqs] = useState<number>(0);
  const [moreItems, setMoreItems] = useState<boolean>(false);

  return (
    <div
      className="bg-[#F4F7FE] py-[50px] px-[15px]"
      style={{ minHeight: `${screenHeight - 70}px` }}
    >
      <Box className="flex items-center flex-col">
        <Typography className="text_linear max-sm:text-[30px] text-[45px] font-[700] text-center mx-auto mb-10">
          Can we help you?
        </Typography>

        {faqsList
          ?.filter((item, index) => (moreItems ? index : index < 7))
          ?.map((item: any, index: number) => (
            <Box
              key={index}
              className="bg-[#FFF] max-md:w-full w-[80%] p-[20px] rounded-[10px] mb-5 cursor-pointer"
              sx={{ boxShadow: "0px 0px 8px 1px rgba(28, 48, 72, 0.10)" }}
              onClick={() =>
                setOpenFaqs(openFaqs && openFaqs === index + 1 ? 0 : index + 1)
              }
            >
              <Typography
                className="flex items-center gap-8 font-semibold "
                sx={{ marginBottom: openFaqs === index + 1 ? "10px" : "0" }}
              >
                {openFaqs === index + 1 ? (
                  <Icons.faqMinusIcon svgProps={{ width: 20 }} />
                ) : (
                  <Icons.faqPlusIcon svgProps={{ width: 20 }} />
                )}

                {item?.title}
              </Typography>

              <Box sx={{ transition: "0.5s all" }}>
                <Typography
                  className="flex items-center gap-10  overflow-hidden"
                  sx={{
                    height: openFaqs === index + 1 ? "auto" : "0px",
                  }}
                >
                  <span className="w-[28px]"></span>
                  {item?.value}
                </Typography>
              </Box>
            </Box>
          ))}

        <Box className="py-4">
          <Button
            className="normal-case bg_linear text-white px-[20px] "
            onClick={() => setMoreItems(!moreItems)}
          >
            View more
          </Button>
        </Box>
      </Box>
    </div>
  );
}
