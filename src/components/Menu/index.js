import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assents/logo.png'
import Button from '../Button'
import './Menu.css'

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo} alt="NinaFlix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;