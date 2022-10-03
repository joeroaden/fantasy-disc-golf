import React from "react";
import PropTypes from "prop-types";
import * as css from '../StyleComponents'

function ReusableForm(props) {
  const hiddenPlayers={
    display: 'none'
  }
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
          <br></br>
          <div style={hiddenPlayers}>
          <input
          type='text'
          name='player1'
          placeholder='player1' />
           <input
          type='text'
          name='player2'
          placeholder='player2' />
           <input
          type='text'
          name='player3'
          placeholder='player3' />
           <input
          type='text'
          name='player4'
          placeholder='player4' />
           <input
          type='text'
          name='player5'
          placeholder='player5' />
          </div>
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