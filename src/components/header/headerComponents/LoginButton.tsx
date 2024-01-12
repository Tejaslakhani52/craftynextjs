import Login from "@/src/components/auth/Login";
import SignUp from "@/src/components/auth/SignUp";
import { Box } from "@mui/material";

export default function LoginButton({
  openLogin,
  setOpenLogin,
  openSignUp,
  setOpenSignUp,
}: any) {
  return (
    <Box className="w-[auto] flex justify-end   sm:gap-4 items-center">
      <Login
        setOpenSignUp={setOpenSignUp}
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
      />
      <Box className="max-sm:hidden">
        <SignUp
          setOpenLogin={setOpenLogin}
          openSignUp={openSignUp}
          setOpenSignUp={setOpenSignUp}
        />
      </Box>
    </Box>
  );
}
