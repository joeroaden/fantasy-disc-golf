import * as React from "react";
import PropTypes from "prop-types";


function MyTeam(props){

  return (
    <React.Fragment>
      <h1>Your Team</h1>
      <div>
        {props.players.map((player, i ) => (
          key={i}
        ))}
      </div>
      <ol>
        <li>{props.player.player1.objectValue}</li>
        <li>{props.player.player2.objectValue2}</li>
        <li>{props.player.player3.objectValue3}</li>
        <li>{props.player.player4.objectValue4}</li>
        <li>{props.player.player5.objectValue5}</li>
      </ol>
    </React.Fragment>
  );
}

MyTeam.propTypes = {
  fantasy: PropTypes.object,
  player: PropTypes.object
}

export default MyTeam;