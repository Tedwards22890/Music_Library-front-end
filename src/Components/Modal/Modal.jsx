import React, {useState} from 'react';
import './Modal.css'
import axios from 'axios';

const Modal= ({open, onClose}, props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setRelease_date] = useState('');
    const [genre, setGenre] = useState('');

    if (!open) return null;

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
            axios.put(`http://127.0.0.1:8000/music/${props.index}/`, newSong)
            setTitle("")
            setArtist("")
            setAlbum("")
            setRelease_date("")
            setGenre('')

        }
    }
    

    return (
        <form onSubmit={handleSubmit} className="form-grid">
        <div className='overlay'>
            <div className='modalContainer'>
                <div className="modalRight">
                    <button className='closeBtn' onClick={onClose}>x</button>
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
                    <button type="submit" className="btn btn-primary" style={{"margin-right": "1em"}}>Update</button>

                </div>
            </div>
        </div>
        </form>
    )
}

export default Modal;