import React from 'react';
import Logo from '../../assents/logo.png'
import Button from '../Button'
import './Menu.css'

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="NinaFlix logo"/>
            </a>

            <Button className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;