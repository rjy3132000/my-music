import React, { useEffect, useState } from 'react';
import apiClient from '../../spotify';
import SidebarButton from './SidebarButton';
import userImg from "../../assets/avatar.png";
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import "./Sidebar.css";

const Sidebar = () => {
    const [image, setImage] = useState(userImg);
    useEffect(() => {
        apiClient.get("me").then((response) => {
            setImage(response.data.images[0].uri)
        }).catch(() => {
            setImage(image)
        });
    }, [image]);

    return (
        <div className='sidebar-container'>
            <img src={image} alt="profile" className='profile-img' />
            <div>
                <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
                <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
                <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
                <SidebarButton title="Favourite" to="/favourite" icon={<MdFavorite />} />
                <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
            </div>
            <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />

        </div>
    )
}

export default Sidebar;