import ResponsiveAppBar from "../Appbar";
import LoginForm from "./LoginForm";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";

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
  const [calm, setCalm] = useState(0);

  useEffect(() => {
    if (!props.user && email && password && props.neurosity) {
      console.log("Logging in");
      login();
    }
  }, [email, password, props.neurosity, props.user]);

  useEffect(() => {
    if (!props.neurosity || !props.user) {
      return;
    }
    props.neurosity.calm().subscribe((calm: any) => {
      setCalm(Number(calm.probability.toFixed(2)));
    });
  }, [props.neurosity, props.user]);

  const onSubmit = (data: FormValues) => {
    if (data.deviceId && data.email && data.deviceId) {
      setEmail(data.email);
      setPassword(data.password);
      props.setDeviceId(data.deviceId);
    } else {
      alert("Please provide Neurosity email, password, and device ID");
    }
  };

  const onLogout = () => {
    if (props.neurosity) {
      console.log("logging out");
      props.neurosity.logout();
    }
  };

  async function login() {
    const auth = await props.neurosity
      .login({ email, password })
      .catch((err: any) => {
        console.log(err);
      });
    if (auth) {
      props.setUser(auth.user);
    }
  }

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container maxWidth={"sm"}>
        <LoginForm onSubmit={onSubmit} onLogout={onLogout}></LoginForm>
      </Container>
      <div className="calm-score">
        &nbsp;{calm * 100}% <div className="calm-word">Calm</div>
      </div>
    </>
  );
};

export default Login;
