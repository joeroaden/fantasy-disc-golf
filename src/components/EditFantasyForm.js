import React from "react";
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";


function EditFantasyForm(props){
  const { fantasy } = props;

  function handleEditFantasyFormSubmission(event) {
    event.preventDefault();
    props.onEditFantasy({
      name: event.target.name.value,
      location: event.target.location.value,
      question2: event.target.question2.value,
      question3: event.target.question3.value,
      answer1: event.target.answer1.value,
      answer2: event.target.answer2.value,
      answer3: event.target.answer3.value,
      id: fantasy.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleEditFantasyFormSubmission}
       buttonText={"Edit Fantasy"}/>
    </React.Fragment>
  );
}

EditFantasyForm.propTypes = {
  onEditFantasy: PropTypes.func,
  fantasy: PropTypes.object
};

export default EditFantasyForm;