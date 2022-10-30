import React from 'react'
import Cube from './ar/Cube'
import './css/home.css'

function Home() {
    return (
        <div className="Home">
            <Cube className="Cube"></Cube>
            <div id="main-title">
                CUBE
            </div>
        </div>
    )
}

export default Home