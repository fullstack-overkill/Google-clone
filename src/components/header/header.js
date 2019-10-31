import React from "react";
import Apps from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import "../../assets/css/main.css";

class header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Grid
          className="MenuSuperior"
          container
          justify="flex-end"
          alignItems="center"
        >
          <div className="SuperiorMenuText">
            <a className="Subtitulo" href="https://mail.google.com/">
              Gmail
            </a>
            <a className="Subtitulo" href="https://www.google.com.br/imghp?hl=pt-BR&tab=wi&authuser=0&ogbl">
              Imagens
            </a>
          </div>
          <Apps className="AppsIco" />
          <div className="SuperiorAvatar">
            <Avatar
              className="AvatarUser"
              alt="Avatar"
              sizes="big"
              src={this.props.ImgAvatar}
            />
          </div>
        </Grid>
      </>
    );
  }
}

export default header;
