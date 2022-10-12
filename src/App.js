import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SongSearch from './Components/SongSearch/SongSearch';
import SongEntry from './Components/PostSong/SongEntry';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs';


function App() {

  const [songs, setSongs] = useState([{title: "Title", artist: "Artist", album:"Album", release_date:"Release Date", genre:"Genre"}]);

function addNewSong(song){
  let tempSong=[...songs, song];

  setSongs(tempSong);
}

async function getAllSongs(){
  const response = await axios.get('http://127.0.0.1:8000/music/');
  console.log(response.data)
  setSongs(response.data)
}


useEffect(() =>{
  getAllSongs();
}, []);

  return (
    <div>
      <SongSearch setSongs={setSongs} parentSongs={songs}/>
      <DisplaySongs parentSongs={songs} />
      <br/>
      <SongEntry addNewSongProperty={addNewSong} />


    </div>
  );
}

export default App;


/*
  useEffect(() => {
    getAllSongs();
}, []);

async function getAllSongs(){
  const response = await axios.get('http://127.0.0.1:8000/music/');
  console.log(response.data);
  setSongs(response.data)

}
*/