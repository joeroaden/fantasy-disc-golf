import React from "react";
import PropTypes from "prop-types";
import * as css from '../StyleComponents'

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name of event' />   
          <br></br>
        <input
          type='text'
          name='location'
          placeholder='Location of Event' />
          <br></br>
        <input
          type='text'
          name='date'
          placeholder='Date of event' />
          <br></br>
        <input
          type="url"
          name='website'
          placeholder='Event Website' />
          <br></br>
        <css.Button type='submit'>{props.buttonText}</css.Button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;