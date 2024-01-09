import { mainLoad } from "@/redux/reducer/actionDataReducer";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { formatExpiryDate } from "../Stripe";

export default function DeleteCard({
  countryCode,
  setOpenDeleteCard,
  selectedDefaultCard,
}: any) {
  const dispatch = useDispatch();

  const handleDeletePaymentMethod = () => {
    dispatch(mainLoad(true));

    axios
      .post("/api/payment/delete-payment-method", {
        paymentMethodId: selectedDefaultCard?.id,
      })
      .then((response) => {
        toast.success("Payment method delete successfully");
        dispatch(mainLoad(false));
        setOpenDeleteCard(false);
      })
      .catch(() => {
        toast.error("Failed to delete payment method.");
        dispatch(mainLoad(false));
      });
  };
  return (
    <Box>
      <Box className="mb-5">
        <Typography className="font-medium mb-1">Full name</Typography>
        <Box
          sx={{
            border: "1px solid  #ced4da",
            padding: "10px",
            borderRadius: ".375rem",
            height: "44px",
          }}
        >
          <input
            type="text"
            className="bg-transparent w-full font-semibold opacity-50"
            value={selectedDefaultCard?.billing_details?.name}
            disabled
          />
        </Box>
      </Box>

      <Box className="mb-5">
        <Typography className="font-medium mb-1">Card Number</Typography>
        <Box
          sx={{
            border: "1px solid  #ced4da",
            padding: "10px",
            borderRadius: ".375rem",
            height: "44px",
          }}
        >
          <input
            type="text"
            className="bg-transparent w-full font-semibold opacity-50"
            value={`XXXX XXXX XXXX ${selectedDefaultCard?.card?.last4}`}
            disabled
          />
        </Box>
      </Box>

      <Box className="flex gap-[20px] mb-5">
        <Box className="flex-1">
          <Typography className="font-medium mb-1">Expiration Date</Typography>
          <Box
            sx={{
              border: "1px solid  #ced4da",
              padding: "10px",
              borderRadius: ".375rem",
              height: "44px",
            }}
          >
            <input
              type="text"
              className="bg-transparent w-full font-semibold opacity-50"
              value={formatExpiryDate(
                selectedDefaultCard?.card?.exp_month || 0,
                selectedDefaultCard?.card?.exp_year || 0
              )}
              disabled
            />
          </Box>
        </Box>

        <Box className="flex-1">
          <Typography className="font-medium mb-1">CVV</Typography>
          <Box
            sx={{
              border: "1px solid  #ced4da",
              padding: "10px",
              borderRadius: ".375rem",
              height: "44px",
            }}
          >
            <input
              type="text"
              className="bg-transparent w-full font-semibold opacity-50"
              value={"***"}
              disabled
            />
          </Box>
        </Box>
      </Box>

      <Box className="flex justify-between pt-5">
        <Button
          style={{
            background: "#E9EDF6",
            width: "fit-content",
            textTransform: "unset",
            borderRadius: "5px",
            fontWeight: "500",
          }}
          className="bg_linear max-sm:w-full text-[#1C3048] w-[48%] py-[10px] px-[20px]  max-lg:mx-auto text-[14px] 2sm:text-[16px]"
          onClick={() => setOpenDeleteCard(false)}
        >
          Cancel
        </Button>

        <Button
          style={{
            background:
              "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
            width: "fit-content",
            textTransform: "unset",
            borderRadius: "5px",
            color: "white",
            fontWeight: "500",
          }}
          className="bg_linear max-sm:w-full py-[10px]   px-[20px]  w-[48%] max-lg:mx-auto text-[14px] 2sm:text-[16px]  "
          onClick={() => handleDeletePaymentMethod()}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
