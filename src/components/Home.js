import React from 'react'
import '../styles/Home.css';
import Banner from './Banner';
import Card from './Card';
import BigCards from './BigCards';
import { pictures, secondPictures } from '../pictures';


function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                {pictures.map((picture,index) => {
                    return <Card 
                        key ={index}
                        src={picture.src}
                        title={picture.title}
                        info={picture.info}
                    />
                })}
            </div>
            <h2>Vive en cualquier lugar del mundo</h2>
            <div className="home__section__two">
                {secondPictures.map((picture,index) => {
                    return <BigCards  key={index}
                        src={picture.src}
                        title={
                            picture.title
                        }
                    />
                })}
            </div>

            <div className="home__section__three">
                <div className="head">
                    <h2>Te presentamos las Experiencias en línea</h2>
                    <button>Explora todo</button>
                </div>
                <p>Actividades interactivas para compartir, de la mano de <br />
                anfitriones expertos
                </p>

                <div className="pictures-container">
                    <div className="left_pictures">
                        <img
                        alt="humans"
                        src="https://a0.muscache.com/im/pictures/50109909-bdb5-47d4-8883-e0e6fd00c18c.jpg?im_q=lowq&im_w=720" />
                            <p>Aprende a hacer dumplings rellenos <br />
                            con caldo den Shangai
                            </p>
                        
                    </div>
                    <div className="right__pictures">
                        <div className="half__side">
                            <div className="half__side__picture">
                                <img 
                                alt="humans"
                                src="https://a0.muscache.com/im/pictures/6e0c69d9-e785-4b00-9633-aebad092e404.jpg?im_q=medq&im_w=320" />
                                    <p>Explora el feminismo a través del <br />
                                        del arte urbano </p>
                                
                            </div>    
                                <div className="half__side__picture">
                                    <img 
                                    alt="humans"
                                    src="https://a0.muscache.com/im/pictures/928c6296-3b28-491a-a579-e696b8928870.jpg?im_q=medq&im_w=320" />
                            
                                        <p>Entre bastidores con un mago <br />
                                        neoyorquino</p>
                                    
                                </div>
                            </div>    
                                <div className="other__half__side">
                                    <img 
                                    alt="humans"
                                    src="https://a0.muscache.com/im/pictures/67f1f92b-c15f-4136-b257-4cf2a700ed8a.jpg?im_q=medq&im_w=720" />
                                        <p>Prepara cocteles y habla de género</p>
                                </div>

                        </div>
                </div>

                </div>
            </div>
    )
}

export default Home;
