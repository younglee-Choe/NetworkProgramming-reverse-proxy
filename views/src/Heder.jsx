import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import MenubarItem from './MenubarItem'
import './css/header.css'

function Header() {
    const location = useLocation()
    const menu = [
        { name: "Home", class: "menu-Home", path: "/" },
        { name: "Cube", class: "menu-Cube", path: "/cube" },
        { name: "Basic", class: "menu-Basic", path: "/basic" },
        { name: "Marker Tracking", class: "menu-Marker", path: "/marker" },
        // { name: "VR Scene", class: "menu-VR", path: "/vr" },
        // { name: "AR Scene", class: "menu-AR", path: "/ar" },
    ]

    async function handleSendFile() {
        axios.get('/market')
            .then(function(res) {
                const htmlFile = res

                console.log("htmlFile ", htmlFile)

                return (
                    <div dangerouslySetInnerHTML={{__html: htmlFile}}></div>
                )
            })
            .catch(function(err) {
                console.log(err)
            })
    }

    useEffect(() => {
        // if(location.pathname === '/marker') {
        //     handleSendFile()
        // }
    }, [])

    return(
        <>
           <div id="header-container">
                <ul id="header-menu">
                    {menu.map((item, index) => {
                    return (
                        <Link to={item.path} key={index} className="linkTo">
                            <MenubarItem item={item}></MenubarItem>
                        </Link>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Header