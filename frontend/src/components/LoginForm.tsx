import { Button, Container, Stack } from "@mui/material";

import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
  deviceId: string;
};

type LoginFormProps = {
  onSubmit: (data: FormValues) => void;
  onLogout: () => void;
};

const LoginForm = (props: LoginFormProps) => {
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      deviceId: "",
    },
  });

  const { register, handleSubmit } = form;

  const handleLogout = () => {
    props.onLogout();
  };

  return (
    <Container>
      <h1>Login with Neurosity Device</h1>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <Stack spacing={2}>
          <TextField label="Email" variant="outlined" {...register("email")} />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            {...register("password")}
          />
          <TextField
            label="Device Id"
            type="password"
            variant="outlined"
            {...register("deviceId")}
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>

          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default LoginForm;
