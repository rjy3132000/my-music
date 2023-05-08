import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../components/login/Login';
import Sidebar from '../../components/sidebar/Sidebar';
import { setClientToken } from '../../spotify';
import Favourite from '../favorites/Favourite';
import Feeds from '../feeds/Feeds';
import Library from '../library/Library';
import Player from '../player/Player';
import Trending from '../trending/Trending';
import "./Home.css";

const Home = () => {
    const [token, setToken] = useState("");
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const hash = window.location.hash;
        window.location.hash = "";
        if (!token && hash) {
            const _token = hash.split("&")[0].split("=")[1];
            window.localStorage.setItem("token", _token)
            setToken(_token);
            setClientToken(_token)
        } else {
            setToken(token);
            setClientToken(token)
        }
    }, []);

    return (
        !token
            ? <Login />
            : <BrowserRouter>
                <div className='main-body'>
                    <Sidebar />
                    <Routes>
                        <Route path='/' element={<Library />} exact />
                        <Route path='/feed' element={<Feeds />} exact />
                        <Route path='/trending' element={<Trending />} exact />
                        <Route path='/player' element={<Player />} exact />
                        <Route path='/favourite' element={<Favourite />} exact />
                    </Routes>
                </div>
            </BrowserRouter>
    )
}

export default Home;