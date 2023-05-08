import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import APIKit from "../../spotify";
import "./Library.css";

const Library = () => {
    const navigate = useNavigate();
    const [playLists, setPlaylists] = useState(null);

    const playPlayList = (id) => {
        navigate('/player', { state: { id: id } });
    }


    useEffect(() => {
        APIKit.get("me/playlists").then((response) => setPlaylists(response.data.items))
    }, []);

    return (
        <div className='screen-container'>
            <div className="Library-body">
                {
                    playLists?.map((playList, index) => {
                        return (
                            <div key={index} className="playlist-card">
                                <img src={playList.images[0].url} alt={playList.name} className="playlist-image" onClick={() => playPlayList(playList.id)} />
                                <h3 className='playlist-title'>{playList.name}</h3>
                                <p className='playlist-subtitle'>{playList.tracks.total} Songs</p>
                                <div className='platlist-fade'>
                                    <IconContext.Provider value={{ size: "50px", color: "#e99d72" }}>
                                        <AiFillPlayCircle />
                                    </IconContext.Provider>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Library;