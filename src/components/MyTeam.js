import React from "react";
import PropTypes from "prop-types";

function MyTeam(props){

  return (
    <React.Fragment>
      <h1>Your Team</h1>
      <ol>
        <li>{props.optionValue}</li>
        <li>{props.fantasy.player2}</li>
        <li>{props.fantasy.player3}</li>
        <li>{props.fantasy.player4}</li>
        <li>{props.fantasy.player5}</li>
      </ol>
    </React.Fragment>
  );
}

MyTeam.propTypes = {
  fantasy: PropTypes.object,
  events: PropTypes.object
}

export default MyTeam;