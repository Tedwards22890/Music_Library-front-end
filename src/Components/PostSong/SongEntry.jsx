import React, { useState } from 'react';
import './SongEntry.css'

const SongEntry = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release, setRelease] = useState('');
    const [genre, setGenre] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release: release,
            genre: genre,

        };
        if (title===''|| artist==='' || album==='' ||release===''||genre==='')
        {
            alert('Please be sure all fields are filled out!')
        }
        else 
        {
            console.log({newSong});
            props.addNewSongProperty(newSong);
            setTitle("")
            setArtist("")
            setAlbum("")
            setRelease("")
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

                    <input type="text" placeholder="Release Date" value={release} onChange={(event) => setRelease(event.target.value)}/>
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
