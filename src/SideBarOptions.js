import React from 'react'
import './SideBarOptions.css'

function SideBarOptions({title, Icon,active}) {
    return (
        <div className={`sidebarOptions ${active && "sidebarOptions--active"}`}>
                <Icon className="sidebarOptions__icon"/>
                <h1 className="sidebarOptions__title">{title}</h1>
        </div>
    )
}

export default SideBarOptions
