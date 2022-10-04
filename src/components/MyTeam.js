import React from "react";
import PropTypes from "prop-types";
import background from '../img/grass.png';


function MyTeam(props){
  const mainStyle={
    backgroundImage: `url(${background})`,

  }

  const textStyle={
    fontColor: 'white'
  }

  return (
    <React.Fragment>
      <div style={mainStyle}>
        <div style={textStyle}>
      <h1>{props.player.name}</h1>
      
      <ol>
        <li>{props.player.player1}</li>
        <li>{props.player.player2}</li>
        <li>{props.player.player3}</li>
        <li>{props.player.player4}</li>
        <li>{props.player.player5}</li>
      </ol>
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