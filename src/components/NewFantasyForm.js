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
      question1: event.target.question1.value,
      question2: event.target.question2.value,
      question3: event.target.question3.value,
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