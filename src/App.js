import React     from 'react';
import HeaderCP  from './components/header/header.js';
import BuscaCP   from './components/Busca/Busca.js';
import FooterCP from './components/Footer/Footer.js';
import ImgAvatar from './assets/img/avatar.jpg';


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }

    }


    render() {
        return (
            <>
                <HeaderCP 
                    ImgAvatar={ImgAvatar}  
                />
                <BuscaCP/>
                <FooterCP/>
            </>
        )
    }

}

export default App