import React, { useState } from "react";

const SongSearch = (props) => {
    const [query, setQuery] = useState("");
    console.log(query);

    return ( 
        props.filter(filteredSongs => 
            filteredSongs.title.toLowerCase().includes(query)).map((songs, i) =>
        <div key={i}>
        <div className="searchBar">
            <input type="text" placeholder="Search..." onChange={e=>setQuery(e.target.val)}>Search</input>
            <ul className="list">

            </ul>

        </div>
        </div>
    ));}


export default SongSearch;