import React from "react";
import PropTypes from "prop-types";

function Fantasy(props){

  return (
  <React.Fragment>
      <div onClick = {() => props.whenFantasyClicked(props.id)}>
        <h1>{props.name}</h1>
        <h4>{props.location}</h4>
        <h5>{props.date}</h5>
        <hr/>
      </div>
    </React.Fragment>
    );
}

Fantasy.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  website: PropTypes.string,
  id: PropTypes.string,
  whenFantasyClicked: PropTypes.func
}

export default Fantasy;