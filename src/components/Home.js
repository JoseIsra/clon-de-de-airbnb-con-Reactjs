import React from 'react'
import '../styles/Home.css';
import Banner from './Banner';
import Card from './Card';


function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card  src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=240"
                title="Alojamientos enteros"
                description ="más de 300 alojamientos"
                />
                {/* <Card /> */}
                {/* <Card /> */}
            </div>
          {/*   <div className="home__section">
                <Card />
                <Card />
                <Card />
            </div> */}

        </div>
    )
}

export default Home
