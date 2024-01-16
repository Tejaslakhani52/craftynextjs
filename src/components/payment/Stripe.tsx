import Icons from "@/src/assets";
import api from "@/src/clientApi/api";
import { capitalizeFirstLetter } from "@/src/commonFunction/capitalizeFirstLetter";
import { getCardIconSvg } from "@/src/commonFunction/getCardIcon";
import { PaymentProps, PurchaseItemProps } from "@/src/interface/payment_props";
import {
  getSessionVal,
  removeUnusedSessions,
  setSessionVal,
} from "@/src/redux/action/AuthToken";
import {
  saveCardData,
  setPurchaseItems,
} from "@/src/redux/reducer/AuthDataReducer";
import { mainLoad } from "@/src/redux/reducer/actionDataReducer";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Box, Button, Typography } from "@mui/material";
import {
  AddressElement,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import DialogModal from "../common/DialogBox";
import EditCard from "./components/EditCard";

export const inputStyle = {
  color: "black",
  fontWeight: "500",
  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
  fontSize: "16px",
  border: "1px solid #ced4da",
  fontSmoothing: "antialiased",
  ":-webkit-autofill": {
    color: "#fce883",
  },
  "::placeholder": {
    color: "#ced4da",
  },
};

interface AddressProps {
  line1: string;
  line2: string | null;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export const formatExpiryDate = (expMonth: number, expYear: number): string => {
  const formattedMonth = expMonth < 10 ? `0${expMonth}` : `${expMonth}`;
  const formattedYear = expYear.toString().slice(-2);

  return `${formattedMonth}/${formattedYear}`;
};

interface PropsType {
  countryCode: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Stripe({ countryCode, setOpen }: PropsType) {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  // const [saveCard, setSaveCard] = useState([]);
  const [selectedDefaultCard, setSelectedDefaultCard] = useState<any>({});
  const [addNewOpen, setAddNewOpen] = useState<boolean>(false);
  const [openEditCard, setOpenEditCard] = useState<boolean>(false);
  const [openDeleteCard, setOpenDeleteCard] = useState<boolean>(false);
  const userData = useSelector((state: any) => state.auth.userData);
  const saveCard = useSelector((state: any) => state.auth.saveCardData);

  const getCard = () => {
    api.cardList().then((res) => {
      dispatch(saveCardData(res?.data?.data));
    });
  };

  useEffect(() => {
    setSelectedDefaultCard(saveCard?.[0]);
  }, [saveCard]);

  useEffect(() => {
    if (!openEditCard) {
      getCard();
    }
  }, [openEditCard]);

  const ProcessPay = (id: string) => {
    api
      .stripe({ pi: id })
      .then((c) => {
        dispatch(mainLoad(false));
        stripe
          ?.confirmCardPayment(c.client_secret)
          .then((data) => {
            dispatch(mainLoad(false));
            if (data.error) {
              toast.error(data.error.message!);
            } else if (data.paymentIntent) {
              const datas = {
                id: data.paymentIntent.id,
                m: "Stripe",
              };
              setSessionVal("_pdf", JSON.stringify(datas));
              getCard();

              api
                .webhook()
                .then((data) => {
                  dispatch(mainLoad(false));
                  if (data.success) {
                    const val: PaymentProps[] = JSON.parse(
                      getSessionVal("_paf", "[]") || "[]"
                    );
                    const purDatas: PurchaseItemProps[] = [];
                    val.forEach((_) => {
                      purDatas.push({ id: _.id, type: _.type });
                    });
                    dispatch(setPurchaseItems(purDatas));
                    removeUnusedSessions();
                    toast.success(data.msg);
                    setOpen(false);
                  } else {
                    toast.error(data.msg);
                  }
                })
                .catch(() => {
                  toast.error("Payment failed");
                  dispatch(mainLoad(false));
                  setAddNewOpen(false);
                });
            } else {
              toast.error("Payment failed");
              dispatch(mainLoad(false));
              setAddNewOpen(false);
            }
          })
          .catch((err) => {
            // console.error(err);
            toast.error("Payment failed");
            dispatch(mainLoad(false));
          });
      })
      .catch((err: any) => {
        // console.error(err);
        toast.error("Payment failed");
        setAddNewOpen(false);
        dispatch(mainLoad(false));
      });
  };

  const handleSubmit = async (e: any) => {
    dispatch(mainLoad(true));
    if (selectedDefaultCard?.id) {
      try {
        const id = selectedDefaultCard?.id;

        ProcessPay(id);
      } catch (error) {
        toast.error("Payment failed");
        dispatch(mainLoad(false));
      }
    } else {
      const billing_details: {
        name: any;
        email: string;
        address: AddressProps | any;
        phone: any;
      } = {
        name: undefined,
        email: userData ? userData.email : "",
        address: undefined,
        phone: undefined,
      };

      if (elements !== null) {
        const addressElement = await elements
          .getElement(AddressElement)!
          .getValue();
        if (addressElement.complete) {
          billing_details.address = addressElement.value.address;
          billing_details.name = addressElement.value.name;
          billing_details.phone = addressElement.value.phone;
        } else {
          toast.error("Please provide details.");
          dispatch(mainLoad(false));
          return;
        }
      }

      const { error, paymentMethod }: any = await stripe?.createPaymentMethod({
        billing_details: billing_details,
        type: "card",
        card: elements?.getElement(CardNumberElement),
      } as any);

      if (error) {
        toast.error(error.message);
        dispatch(mainLoad(false));

        return;
      }

      const paymentMethodId = paymentMethod.id;

      if (!error) {
        ProcessPay(paymentMethodId);
      } else {
        toast.error(error.message);
        dispatch(mainLoad(false));
      }
    }
  };

  const handleDeletePaymentMethod = () => {
    dispatch(mainLoad(true));

    api
      .detach({
        pm: selectedDefaultCard?.id,
      })
      .then(() => {
        toast.success("Payment method delete successfully");
        dispatch(mainLoad(false));
        getCard();
        setOpenDeleteCard(false);
      })
      .catch(() => {
        toast.error("Failed to delete payment method.");
        dispatch(mainLoad(false));
      });
  };

  return !addNewOpen && saveCard?.length > 0 ? (
    <>
      {!openEditCard && (
        <Box>
          <Box className="flex items-center justify-between gap-2 flex-wrap mb-4">
            <Typography className="text-[#ABB2C7] font-semibold">
              Choose your payment method
            </Typography>
          </Box>

          <Box className="mt-[20px]">
            {saveCard?.map((item: any, index: number) => {
              let CardIconSvg = getCardIconSvg(item.card.brand);

              return (
                <Box
                  key={index}
                  className={`flex items-center justify-between px-4 py-2 rounded-[5px] mb-4 cursor-pointer ${
                    item?.id === selectedDefaultCard?.id
                      ? "border_linear"
                      : "border_normal"
                  } bg-white`}
                  onClick={() => setSelectedDefaultCard(item)}
                >
                  <Box className="flex items-center gap-4">
                    <Box className="flex items-center gap-5 w-[40px]">
                      {<CardIconSvg svgProps={{ width: 53, height: 35 }} />}
                    </Box>
                    <Box className="py-[7px]">
                      <Typography className="text-[14px] font-semibold">
                        {capitalizeFirstLetter(item?.card?.brand)} ending in{" "}
                        {item?.card?.last4}
                      </Typography>
                      <Box className="flex items-center gap-5">
                        <Typography className="text-[13px] font-medium flex opacity-50 font-semibold">
                          Exp.date{" "}
                          {formatExpiryDate(
                            item?.card?.exp_month || 0,
                            item?.card?.exp_year || 0
                          )}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box className="flex items-center gap-2 text-[12px] font-[600] max-sm:flex-col">
                    <Button
                      onClick={() => {
                        setOpenEditCard(true);
                      }}
                      className="min-w-[20px]"
                    >
                      {" "}
                      <Icons.Edit />
                    </Button>

                    <Button
                      className="min-w-[20px]"
                      onClick={() => setOpenDeleteCard(true)}
                    >
                      <Icons.DeleteIcon />
                    </Button>
                  </Box>
                </Box>
              );
            })}

            <Box
              className={`flex items-center justify-between px-4 py-2 rounded-[5px] mb-4 cursor-pointer ${"border_normal"}  bg-white`}
              onClick={() => {
                setSelectedDefaultCard(null);
                setAddNewOpen(true);
              }}
            >
              <Box className="py-[7px]">
                <Box className="flex items-center gap-5">
                  <CreditCardIcon />
                  <Typography className="text-[14px] font-medium">
                    Add Payment Method
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Button
            className="bg_linear text-white w-full py-[10px] normal-case text-[17px]"
            onClick={(e: any) => {
              if (selectedDefaultCard) {
                handleSubmit(e);
              } else {
                toast.error("Please select a payment method");
              }
            }}
          >
            Process to Pay
          </Button>
        </Box>
      )}

      {openEditCard && (
        <EditCard
          countryCode={countryCode}
          setOpenEditCard={setOpenEditCard}
          selectedDefaultCard={selectedDefaultCard}
        />
      )}

      <DialogModal
        open={openDeleteCard}
        setOpen={setOpenDeleteCard}
        className="w-[100%] lg:w-[80%] xl:w-[550px]"
      >
        <div className="py-[20px]">
          <h3 className="flex gap-[15px] font-semibold  px-[15px] text-[25px]  pb-4">
            Delete Payment Method
          </h3>

          <p className="px-[15px] pb-[35px]">
            Are you sure you want to delete this payment method? This action
            cannot be undone.
          </p>

          <div
            className="flex justify-end gap-4 px-[15px]"
            style={{ paddingBottom: "0" }}
          >
            <Button
              className={`${"normal-case bg-[#E6E8EE] text-black px-[15px]"} `}
              onClick={() => setOpenDeleteCard(false)}
              style={{ height: "40px" }}
            >
              Cancel
            </Button>
            <Button
              className={`bg-[#C70000] text-white normal-case px-[15px]`}
              onClick={() => handleDeletePaymentMethod()}
              style={{ height: "40px" }}
            >
              Delete
            </Button>
          </div>
        </div>
      </DialogModal>
    </>
  ) : (
    <>
      <Box className="flex items-center justify-between gap-2 flex-wrap mb-4">
        <Typography className="text-[#ABB2C7] font-semibold">
          Credit Or Debit Card
        </Typography>

        <Icons.creditDebitCardIcon />
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
          <CardNumberElement
            options={{
              style: {
                base: inputStyle,
              },
            }}
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
            <CardExpiryElement
              options={{
                style: {
                  base: inputStyle,
                },
              }}
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
            <CardCvcElement
              options={{
                style: {
                  base: inputStyle,
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box className="mb-5">
        <AddressElement
          options={{
            mode: "billing",
            fields: {
              phone: "always",
            },
            validation: {
              phone: {
                required: "always",
              },
            },

            defaultValues: {
              address: {
                country: countryCode,
                line1: "",
                line2: "",
                city: "",
                state: "",
                postal_code: "",
              },
              name: "",
              phone: "",
            },
          }}
        />
      </Box>

      {saveCard?.length > 0 ? (
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
            onClick={() => setAddNewOpen(false)}
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
            onClick={handleSubmit}
          >
            Process to Pay
          </Button>
        </Box>
      ) : (
        <Box className="flex justify-between pt-5">
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
            className="bg_linear max-sm:w-full py-[10px] w-full  px-[20px]  max-lg:mx-auto text-[14px] 2sm:text-[16px]  "
            onClick={handleSubmit}
          >
            Process to Pay
          </Button>
        </Box>
      )}
    </>
  );
}
