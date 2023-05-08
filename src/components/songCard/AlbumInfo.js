import React from 'react';
import "./AlbumInfo.css";

const AlbumInfo = ({ album }) => {
    const artist = [];
    album?.artists.forEach((elem) => artist.push(elem.name));

    return (
        <div className='albumInfo-card'>
            <div className="albumName-container">
                <div className="marquee">
                    <p>{album?.name + " - " + artist.join(", ")}</p>
                </div>
            </div>
            <div className="album-info">
                <p>{`${album?.name} is an ${album?.album_type} by ${artist.join(", ")} with ${album?.total_tracks} tracks`}</p>
            </div>
            <div className="album-release">
                <p>Release Data: {album?.release_date}</p>
            </div>
        </div>
    )
}

export default AlbumInfo