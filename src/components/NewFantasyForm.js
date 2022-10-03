import React from "react";
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";
import { auth } from "./../firebase.js";
import { v4 } from 'uuid';

function NewFantasyForm(props){

  function handleNewFantasyFormSubmission(event) {
    event.preventDefault();
    props.onNewFantasyCreation({
      name: event.target.name.value,
      location: event.target.location.value,
      date: event.target.date.value,
      creator: auth.currentUser.email,
      player1: event.target.player1.value,
      player2: event.target.player2.value,
      player3: event.target.player3.value,
      player4: event.target.player4.value,
      player5: event.target.player5.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewFantasyFormSubmission} buttonText={"Add Event"}/>
    </React.Fragment>
  );
}

NewFantasyForm.propTypes = {
  onNewFantasyCreation: PropTypes.func
};

export default NewFantasyForm;