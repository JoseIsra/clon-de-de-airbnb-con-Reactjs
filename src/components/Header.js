import React from 'react'
import '../styles/Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <Link to ="/" >
            <img 
            className="header__icon"
            src="https://www.paredro.com/wp-content/uploads/2019/03/El-logo-de-Airbnb-es-el-si%CC%81mbolo-de-la-gente-lugares-amor-y-un-22A22.jpg"
            alt="airbnb"
            ></img>
            </Link>

            <div className="header__center">
                <input type="text" 
                placeholder ="Empieza la búsqueda"
                />
                <SearchIcon className="lupa" />
            </div>
                <div className="header__right">
                    <p>Hazte anfitrión</p>
                    <div className="header__right__options">
                    <LanguageIcon />
                    <ExpandMoreIcon />
                    </div>
                    <div className="header__right__avatar">
                        <MenuIcon />
                        <Avatar />
                    </div>
                </div>
        </div>
    )
}

export default Header
