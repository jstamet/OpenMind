import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Login = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Neurosity Login</h1>
      <Box>
        
      </Box>
      <TextField id="filled-basic" label="Device Id" variant="filled" />
      <TextField id="filled-basic" label="Device Password" variant="filled" />
      <Button variant="contained">Contained</Button>    
    </Box>
  );
};

export default Login;