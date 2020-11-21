import React, {useState} from 'react'
import '../styles/Banner.css';
import {useHistory}  from 'react-router-dom';
import { Button } from '@material-ui/core';
import Search from '../components/Search';
function Banner() {
    let history = useHistory();
    const [showSearch , setShowSearch] =useState(false);

    return (
        <div className="banner">
            <div className="banner__search">

            <Button onClick = {()=>setShowSearch(!showSearch)}
            className="banner__searchButton"
            variant ="outlined"
            >
                {showSearch ? "Ocultar": "Buscar fechas"}
            </Button>
            </div>
            {showSearch && <Search />}



            <div className="banner__info">
                <p>Siéntete un <br />
                    turista cerca <br/> 
                    de casa</p>
                <button
                onClick ={()=>history.push('/search')}
                >Explora alojamientos cercanos</button>
            </div>
        </div>
    )
}

export default Banner
