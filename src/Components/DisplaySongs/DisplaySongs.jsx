import React, {useState} from 'react';
import "./DisplaySongs.css";
import Modal from '../Modal/Modal';
import axios from 'axios';

const DisplaySongs = (props) => {
    const handleDelete=(i)=>{
        axios.delete(`http://127.0.0.1:8000/music/${i}/`)
    }
    const [openModal, setOpenModel] = useState(false)
    return ( 

        <div>
            <div className='titles'>
                <span>Title</span><span>Artist</span><span>Album</span><span>Release Date</span><span>Genre</span>
            </div>
            {props.parentSongs.map((songs, i) => {
                return (
                <div key={i}>
                    <center>
                        <div className="grid-container">
                            <div className='grid-item'>{songs.title}</div>
                            <div className='grid-item'>{songs.artist}</div>
                            <div className='grid-item'>{songs.album}</div>
                            <div className='grid-item'>{songs.release_date}</div>
                            <div className='grid-item'>{songs.genre}</div>
                            <div className='grid-item'><button className='modalBtn' onClick={() => setOpenModel(true)}>Edit</button>
                            <Modal open={openModal} parentSongs={songs} index={i}/>
                            <button onClick={()=>handleDelete(songs.id)}>X</button>
                            <Modal open={openModal} onClose={()=>setOpenModel(false)}/></div>
                        </div>
                    </center>
                </div>
                );
        })}
        </div>
        
     )
}
 
export default DisplaySongs;