import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenubarItem from './MenubarItem'
import './css/header.css'

function Header() {
    const menu = [
        { name: "Marker based", class: "menu-Basic", path: "/" },
        { name: "Location based", class: "menu-Location", path: "/location" },
        { name: "Cube", class: "menu-Cube", path: "/cube" },
    ]

    useEffect(() => {

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