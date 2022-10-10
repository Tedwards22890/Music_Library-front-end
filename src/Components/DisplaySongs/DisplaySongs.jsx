import React from 'react';
import "./DisplaySongs.css";



const DisplaySongs = (props) => {
    return ( 
        props.parentSongs.map((songs, i) =>
        <div key={i}>
            <center>

                <div className="grid-container">
                    <div className='grid-item'>{songs.title}</div>
                    <div className='grid-item'>{songs.artist}</div>
                    <div className='grid-item'>{songs.album}</div>
                    <div className='grid-item'>{songs.release}</div>
                    <div className='grid-item'>{songs.genre}</div>
                </div>
            </center>
        </div>

     ))
}
 
export default DisplaySongs;