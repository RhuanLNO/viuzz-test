import { Box, Tab, Tabs, Button } from "@mui/material";
import { styled } from "@mui/system";

const Logo = styled(Box)`
  height: 60,
  width: 60,
  margin: 1
`;

const Banner = styled(Tabs)`
  marginLeft: 20px
`;

const NavTab = styled(Tab)`
 color: black
`;

const LoginButton = styled(Button)`
  margin-left: auto
`;

const RegisterButton = styled(Button)`
  margin: 0px 10px
`;

export { Logo, Banner, NavTab, LoginButton, RegisterButton};
