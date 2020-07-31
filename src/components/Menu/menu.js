import React from 'react';
import './Menu.css';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu(){
        return( 
            <nav className = "  Menu">
                <Link to="/">
                <img className="Logo"src={Logo} alt="Logo SilvaFlix"/>
                </Link>

            <Button as={Link} className = " ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
            </nav>
        )
    }

export default Menu ;