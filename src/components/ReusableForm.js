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
          placeholder='Enter name of event' />   
          <br></br>
        <input
          type='text'
          name='location'
          placeholder='Enter Location of Event' />
          <br></br>
        <input
          type='text'
          name='date'
          placeholder='Date of event' />
          <br></br>
        <input
          type='url'
          name='website'
          placeholder='Enter URL for Event' />
          <br></br>
        <input
          type='text'
          name='answer2'
          placeholder='Answer 2' />
        <input
          type='text'
          name='question3'
          placeholder='Question 3' />
        <input
          type='text'
          name='answer3'
          placeholder='Answer 3' />
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