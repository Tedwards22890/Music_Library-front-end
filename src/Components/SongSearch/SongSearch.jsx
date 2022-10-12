import React, { useState } from "react";

const SongSearch = (props) => {
    const [query, setQuery] = useState("");
    console.log(query);

function filterMusic(event) {
    event.preventDefault();
    let response = props.parentSongs.filter((song) => {
        if(song.title.toLowerCase().includes(query)||song.artist.toLowerCase().includes(query)||song.album.toLowerCase().includes(query)||song.genre.toLowerCase().includes(query)) {
            return true;
        }
        else {
            return false;
        }
    });
    console.log(response)
    console.log(query)
    props.setSongs(response)
}

return ( 
    <div>
        <div className="searchBar">
            <form onSubmit={filterMusic}>
                <input type='text' placeholder='Search...' value={query} onChange={(event)=>setQuery(event.target.value)}/>  
                <button type="submit">Search</button>
            </form>
        </div>
    </div>
);}


export default SongSearch;