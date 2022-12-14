import React from "react";
import PropTypes from "prop-types";
import background from '../img/grass.png';


function MyTeam(props){
  const mainStyle={
    backgroundImage: `url(${background})`,

  }

  const textStyle={
    color: 'white',
    fontWeight: 'bold',
    fontSize: 'larger'

  }

  return (
    <React.Fragment>
      <div style={mainStyle}>
        <div style={textStyle}>
      <h1>Team: {props.player.name}</h1>
      <h3>Your Picks:</h3>
      <ol>
        <li>{props.player.player1}</li>
        <br></br>
        <li>{props.player.player2}</li>
        <br></br>
        <li>{props.player.player3}</li>
        <br></br>
        <li>{props.player.player4}</li>
        <br></br>
        <li>Wildcard: {props.player.player5}</li>
        <br></br>
      </ol>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
      </div>
    </React.Fragment>
  );
}


MyTeam.propTypes = {
  fantasy: PropTypes.object,
  player: PropTypes.object
}

export default MyTeam;