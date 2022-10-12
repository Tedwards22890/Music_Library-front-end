import axios from 'axios';
import React, { useState } from 'react';
import './SongEntry.css'

const SongEntry = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setRelease_date] = useState('');
    const [genre, setGenre] = useState('');


    async function handleSubmit(event) {
        event.preventDefault();
        const newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre,

        };
        if (title===''|| artist==='' || album==='' ||release_date===''||genre==='')
        {
            alert('Please be sure all fields are filled out!')
        }
        else 
        {
            console.log({newSong});
            axios.post('http://127.0.0.1:8000/music/', newSong)
            setTitle("")
            setArtist("")
            setAlbum("")
            setRelease_date("")
            setGenre('')

        }
    }

    return ( 
        <form onSubmit={handleSubmit} className="form-grid">
            <center>
                <div className="grid-container">
                    <div classname="grid-item">
                    <input type="text" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                    </div>

                    <div classname="grid-item">

                    <input type="text" placeholder="Artist" value={artist} onChange={(event) => setArtist(event.target.value)}/>
                    </div>

                    <div classname="grid-item">

                    <input type="text" placeholder="Album" value={album} onChange={(event) => setAlbum(event.target.value)}/>
                    </div>

                    <div classname="grid-item">

                    <input type="date" placeholder="Release Date" value={release_date} onChange={(event) => setRelease_date(event.target.value)}/>
                    </div>

                    <div classname="grid-item">

                    <input type="text" placeholder="Genre" value={genre} onChange={(event) => setGenre(event.target.value)}/>
                    </div>
                <br/>
                </div>
                    <button type="submit" className="btn btn-primary" style={{"margin-right": "1em"}}>Add</button>
                <br/>
            </center>
        </form>
     );
}
 
export default SongEntry;
