import React from "react";
import Divider from "@material-ui/core/Divider";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="Footer">
          <div className="FooterTexto">Brasil</div>
          <Divider light />
          <div className="LinknsFooter">
            <div className="FooterTexto">Publicidade</div>
            <div className="FooterTexto2">Negócios</div> 
            <div className="FooterTexto2">Sobre </div> 
            <div className="FooterTexto2">Como funciona a Pesquisa</div> 

         
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
