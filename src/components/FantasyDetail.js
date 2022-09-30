import React, { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import PropTypes from "prop-types";
import { db, auth } from "./../firebase.js"; //removed db
import { v4 } from 'uuid';
import * as css from '../StyleComponents'

function FantasyDetail(props){
  const { fantasy, onClickingDelete, onClickingEdit } = props; 
  const [answerList, setAnswerList] = useState(null);
  let showButtons = null;

  const getAnswers = async () => {
    const q = query(collection(db, "fantasy"), where("fantasyId", "==", fantasy.id))
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
  

  function handleNewPicksFormSubmission(event) {
    event.preventDefault();
    props.onNewAnswerCreation({
      answer1: event.target.answer1.value,
      answer2: event.target.answer2.value,
      answer3: event.target.answer3.value,
      fantasyId: fantasy.id
    });
  }

  // if(auth.currentUser.email === fantasy.creator){
    showButtons = 
    <>
      <css.Button onClick={onClickingEdit}>Update Event</css.Button>
      <css.Button onClick={()=> onClickingDelete(fantasy.id)}>Delete Event</css.Button>
      <css.Button onClick={getAnswers}>Show Picks</css.Button>
    </>
  // }

  return (
    <React.Fragment>
      <h1>{fantasy.name}</h1>
      <h2>{fantasy.website}</h2>
      <form onSubmit={handleNewPicksFormSubmission}>
        <h4>Choose your Team!</h4>
        <Dropdown></Dropdown>
        formLabel="Choose your players">
       <Option selected value="player 1">Click to see Options/>
       </Dropdown>
        <css.Button type='submit'>Submit your Picks!</css.Button>
      </form>
      <hr/>
      {/* {answerList} */}
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