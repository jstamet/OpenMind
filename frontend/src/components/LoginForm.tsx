import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
  deviceId: string;
};

type LoginFormProps = {
    onSubmit : (data:FormValues)=> void
}

const LoginForm = (props: LoginFormProps) => {
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      deviceId: "",
    },
  });

  const { register, handleSubmit } = form;

  return (
    <Box width={400}>
      <h1>Login with Neurosity Device</h1>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <Stack spacing={2}>
          <TextField label="Email" variant="outlined" {...register("email")} />
          <TextField
            label="Password"
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
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
