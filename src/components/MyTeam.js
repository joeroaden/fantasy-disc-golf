import React from "react";
import PropTypes from "prop-types";


function MyTeam(props){

  return (
    <React.Fragment>
      <h1>{props.player.name}</h1>
      <div>
        {/* {props.players.map((player) => (
        [{player.}]   */}
        {/* ))} */}
      </div>
      <ol>
        <li>{props.player.player1}</li>
        <li>{props.player.player2}</li>
        <li>{props.player.player3}</li>
        <li>{props.player.player4}</li>
        <li>{props.player.player5}</li>
      </ol>
    </React.Fragment>
  );
}


MyTeam.propTypes = {
  fantasy: PropTypes.object,
  player: PropTypes.object
}

export default MyTeam;