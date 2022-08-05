import { styled } from "@mui/system";
import { Grid } from "@mui/material";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import {Button} from "@mui/material";

const CenterGrid = styled(Grid)`
  margin: 60px 0px 20px 0px;
`;

const JobText = styled(TextField)`
  margin-top: 20px;
  width: 100%
`;

const TownForm = styled(FormControl)`
  margin-top: 20px;
`;

const SendButton = styled(Button)`
  margin: 30px 0px;
  width: 100%
`;

export { CenterGrid, JobText, TownForm, SendButton };