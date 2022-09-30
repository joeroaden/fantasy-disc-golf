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
      website: event.target.website.value,
      answer1: event.target.answer1.value,
      answer2: event.target.answer2.value,
      answer3: event.target.answer3.value,
      creator: auth.currentUser.email,
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