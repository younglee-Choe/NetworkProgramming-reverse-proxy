import React from 'react'
import './css/menubar.css'

function MenubarItem({ item }) {

    return (
        <div id="menubar-item-container">
            <div id="menubar-item-title">{item.name}</div>
        </div>
    )
}

export default MenubarItem