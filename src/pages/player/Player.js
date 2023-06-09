import React, { useEffect, useState } from 'react';
import apiClient from "../../spotify";
import { useLocation } from 'react-router-dom';
import SongCard from '../../components/songCard/SongCard';
import Queue from '../../components/queue/Queue';
import "./Player.css";
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';

const Player = () => {
    const location = useLocation();
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (location.state) {
            apiClient
                .get("playlists/" + location.state?.id + "/tracks")
                .then((res) => {
                    setTracks(res.data.items);
                    setCurrentTrack(res.data?.items[0]?.track);
                });
        }
    }, [location.state]);

    useEffect(() => {
        setCurrentTrack(tracks[currentIndex]?.track);
    }, [currentIndex, tracks]);

    return (
        <div className="screen-container flex">
            <div className="left-player-body">
                <AudioPlayer currentTrack={currentTrack} />

            </div>
            <div className="right-player-body">
                <SongCard album={currentTrack?.album} />
                <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
            </div>
        </div>
    );
}

export default Player