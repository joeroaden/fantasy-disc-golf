import React from "react";
import PropTypes from "prop-types";

function Fantasy(props){

  return (
  <React.Fragment>
      <div onClick = {() => props.whenFantasyClicked(props.id)}>
        <h2>{props.name}</h2>
        <hr/>
      </div>
    </React.Fragment>
    );
}

Fantasy.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  whenFantasyClicked: PropTypes.func
}

export default Fantasy;