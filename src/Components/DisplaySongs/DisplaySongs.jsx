import React, {useState} from 'react';
import "./DisplaySongs.css";
import Modal from '../Modal/Modal';

const DisplaySongs = (props) => {
    const handleDelete=(i)=>{
        const deleteValue=[...props]
        deleteValue.splice(i)
        setInterval(deleteValue)
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
                            <div className='grid-item'><button>Edit</button><button onClick={()=>handleDelete(i)}>X</button><Modal open={openModal} /></div>
                        </div>
                    </center>
                </div>
                );
        })}
        </div>
        
     )
}
 
export default DisplaySongs;