import Box from "@mui/material/Box";
import ResponsiveAppBar from "../Appbar";
import LoginForm from "./LoginForm";
import { useState } from "react";

type FormValues = {
  email: string;
  password: string;
  deviceId: string;
};

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [deviceId, setDeviceId] = useState("");

  const onSubmit = (data: FormValues) => {
    setEmail(data.email);
    setPassword(data.password);
    setDeviceId(data.deviceId);
    console.log(email, password, deviceId)
  };

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Box display="flex" justifyContent="center" alignItems="center">
        <LoginForm onSubmit={onSubmit}></LoginForm>
      </Box>
    </>
  );
};

export default Login;
