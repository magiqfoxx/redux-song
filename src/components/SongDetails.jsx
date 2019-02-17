import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
  const renderContent = () => {
    if (song !== null) {
      return (
        <React.Fragment>
          <h2>Details for:</h2>
          <h3>{song.title}</h3>
          <h4>{song.duration}</h4>
        </React.Fragment>
      );
    } else {
      return <h2>Please, select a song.</h2>;
    }
  };
  return <div className="ui left floated content">{renderContent()}</div>;
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetails);
