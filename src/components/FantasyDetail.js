import React, { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import PropTypes from "prop-types";
import { db, auth } from "./../firebase.js";
import { v4 } from 'uuid';
import * as css from '../StyleComponents'

function FantasyDetail(props){
  const { fantasy, onClickingDelete, onClickingEdit } = props; 
  const [answerList, setAnswerList] = useState(null);
  let showButtons = null;

  const getAnswers = async () => {
    const q = query(collection(db, "answers"), where("fantasyId", "==", fantasy.id))
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });

    let newAnswerList = [];
    querySnapshot.forEach((doc) => {
      newAnswerList.push(
      <ol>
        <li key={v4()}>{doc.data().answer1}</li>
        <li key={v4()}>{doc.data().answer2}</li>
        <li key={v4()}>{doc.data().answer3}</li>
      </ol>
      )
    })
    setAnswerList(newAnswerList);
    console.log(answerList);
  }

  function handleNewAnswerFormSubmission(event) {
    event.preventDefault();
    props.onNewAnswerCreation({
      answer1: event.target.answer1.value,
      answer2: event.target.answer2.value,
      answer3: event.target.answer3.value,
      fantasyId: fantasy.id
    });
  }

  if(auth.currentUser.email === fantasy.creator){
    showButtons = 
    <>
      <css.Button onClick={onClickingEdit}>Update Event</css.Button>
      <css.Button onClick={()=> onClickingDelete(fantasy.id)}>Delete Event</css.Button>
      <css.Button onClick={getAnswers}>Show Picks</css.Button>
    </>
  }

  return (
    <React.Fragment>
      <h1>{fantasy.name}</h1>
      <form onSubmit={handleNewAnswerFormSubmission}>
        <h2>{fantasy.question1}</h2>
        <input
          type='text'
          name='answer1'
          placeholder='Answer' />
        <h2>{fantasy.question2}</h2>
        <input
          type='text'
          name='answer2'
          placeholder='Answer' />
        <h2>{fantasy.question3}</h2>
        <input
          type='text'
          name='answer3'
          placeholder='Answer' />
        <css.Button type='submit'>Submit your Picks!</css.Button>
      </form>
      <hr/>
      {answerList}
      {showButtons}
    </React.Fragment>
  );
}

FantasyDetail.propTypes = {
  fantasy: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default FantasyDetail;