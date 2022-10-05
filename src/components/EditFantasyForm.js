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
      date: event.target.date.value,
      website: event.target.website.value,
      id: fantasy.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleEditFantasyFormSubmission}
       buttonText={"Edit Event"}/>
    </React.Fragment>
  );
}

EditFantasyForm.propTypes = {
  onEditFantasy: PropTypes.func,
  fantasy: PropTypes.object
};

export default EditFantasyForm;