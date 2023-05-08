import React from 'react'
import { IconContext } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';

const SidebarButton = ({ title, to, icon }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    const btnClass = isActive ? "button-body active" : "button-body";

    return (
        <Link to={to} title={title}>
            <div className={btnClass}>
                <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
                    {icon}
                    <p>{title}</p>
                </IconContext.Provider>
            </div>
        </Link>
    )
}

export default SidebarButton;