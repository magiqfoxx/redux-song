import { combineReducers } from "redux";

//Technically unnecessary
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Start", duration: "3:15" },
    { title: "I Want it that Way", duration: "1:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  //Technically unnecessary, necessary for more actions obvs.
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
