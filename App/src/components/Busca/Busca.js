import React from "react";
import Grid from "@material-ui/core/Grid";
import imgLogo from "../../assets/img/googlelogo.png";
import Button from '@material-ui/core/Button';
import KeyboardIco from "@material-ui/icons/Keyboard";
import SearchIco from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import { fade, withStyles } from "@material-ui/core/styles";
import "../../assets/css/main.css";

class Busca extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Grid
          className="BuscaBox"
          container
          justify="center"
          alignItems="center"
        >
          <img className="GoogleLogo" alt="Google logo" src={imgLogo} />
          <CustomizedInputs />
          <div className="BotoesBusca">
          <Button className="BtnBusca" size="medium" >
            Pequisa Google
          </Button>
          <Button className="BtnBusca" size="medium" >
            Estou com sorte
          </Button>
          </div>
        </Grid>
      </>
    );
  }
}

export default Busca;

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 60,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "558px",
    height: "26px",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}))(InputBase);

export function CustomizedInputs() {
  return (
    <BootstrapInput
      startAdornment={
        <>
        
        <InputAdornment className="LupaIcon" position="start">
          <SearchIco className="icoLupa"/>
        </InputAdornment>
        <InputAdornment className="KeybordIcon" position="start">
          <KeyboardIco className="icoTeclado"/>
        </InputAdornment>
        </>}
      
      id="BuscaBarra"
    />
  );
}
