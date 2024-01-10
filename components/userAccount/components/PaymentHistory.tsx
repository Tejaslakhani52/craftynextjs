import { dateFormate } from "@/commonFunction/dateFormate";
import { Box, Typography } from "@mui/material";
import Head from "next/head";

export default function PaymentHistory({ userSubscription }: any) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Box>
        <Typography variant="h1" className="font-semibold text-[24px] mb-8">
          Payment History
        </Typography>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
            <thead className=" text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg-[#F4F7FE] border-b dark:bg-gray-800 dark:border-gray-700">
                <th className="px-6 py-4 whitespace-nowrap">Package Name</th>
                <th className="px-6 py-4 whitespace-nowrap">Transaction Id</th>
                <th className="px-6 py-4 whitespace-nowrap">Date</th>
                <th className="px-6 py-4 whitespace-nowrap">Amount</th>
                <th className="px-6 py-4 whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody>
              {userSubscription?.history === "No History exist." ? (
                <div className=" w-full p-[24px] text-[16px]">
                  No History Exist.
                </div>
              ) : (
                userSubscription?.hasHistory &&
                userSubscription?.history?.map((item: any, index: any) => (
                  <tr
                    key={index}
                    className="bg-[#F4F7FE] border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.package_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.transaction_id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {dateFormate(item?.purchase_date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.status === "Active" ? (
                        <i
                          className="fa-solid fa-check"
                          style={{ color: "green", fontSize: "20px" }}
                        />
                      ) : (
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "red", fontSize: "20px" }}
                        ></i>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Box>
    </>
  );
}
