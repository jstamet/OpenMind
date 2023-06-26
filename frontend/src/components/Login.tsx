import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ResponsiveAppBar from "../Appbar";
import { useForm } from "react-hook-form";

type formValues = {
  email: string;
  password: string;
  deviceId: string;
};

const Login = () => {
  const form = useForm<formValues>({
    defaultValues: {
      email: "",
      password: "",
      deviceId: "",
    },
  });

  const { register, handleSubmit } = form;

  const onSubmit = (data: formValues) => {
    console.log(data);
  };

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box width={400}>
          <h1>Login with Neurosity Device</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <TextField
                label="Email"
                variant="outlined"
                {...register("email")}
              />
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
      </Box>
    </>
  );
};

export default Login;