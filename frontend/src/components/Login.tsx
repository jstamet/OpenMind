import Box from "@mui/material/Box";
import ResponsiveAppBar from "../Appbar";
import LoginForm from "./LoginForm";
import { useEffect, useState } from "react";


type FormValues = {
  email: string;
  password: string;
  deviceId: string;
};

type LoginProps = {
  neurosity: any;
  user: any;
  setUser: any;
  setDeviceId: any;
  setNeurosity: any;
};

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!props.user && email && password && props.neurosity) {
      console.log("Logging in");
      login();
    }
  }, [email, password, props.neurosity, props.user]);

  

  const onSubmit = (data: FormValues) => {
    if (data.deviceId && data.email && data.deviceId) {
      setEmail(data.email);
      setPassword(data.password);
      props.setDeviceId(data.deviceId);
    } else {
      alert("Please provide Neurosity email, password, and device ID");
    }
  };

  async function login() {
    const auth = await props.neurosity
      .login({ email, password })
      .catch((err: any) => {
        console.log(err);
      });
  }

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
