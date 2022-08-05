import { styled } from "@mui/system";
import { Typography, Button, Grid } from "@mui/material";
import TextField from '@mui/material/TextField';

const TopGrid = styled(Grid)`
  margin: 60px 0px 20px 0px
`;

const LoginTypography = styled(Typography)`
  margin: 0px 0px 30px 0px
`;

const FormTextfield = styled(TextField)`
  margin: 10px 0px;
  width: 100%
`;

const SendButton = styled(Button)`
  margin: 20px 0px;
  width: 100%
`;

export { TopGrid, LoginTypography, FormTextfield, SendButton};