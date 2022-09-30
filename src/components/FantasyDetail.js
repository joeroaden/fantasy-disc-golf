import React, { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import PropTypes from "prop-types";
import { db, auth } from "./../firebase.js"; //removed db
import { v4 } from 'uuid';
import { Dropdown, Option } from "./Dropdown";
import * as css from '../StyleComponents'

function FantasyDetail(props){
  const { fantasy, onClickingDelete, onClickingEdit } = props; 
  const [playerList, setPlayerList] = useState(null);
  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  }
  
  let showButtons = null;

  const getPlayers = async () => {
    const q = query(collection(db, "fantasy"), where("fantasyId", "==", fantasy.id))
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });

    let newPlayerList = [];
    querySnapshot.forEach((doc) => {
      newPlayerList.push(
      <ol>
        <li key={v4()}>{doc.data().player1}</li>
        <li key={v4()}>{doc.data().answer2}</li>
        <li key={v4()}>{doc.data().answer3}</li>
      </ol>
      )
    })
    setPlayerList(newPlayerList);
    console.log(playerList);
  }
  

  function handleNewPlayerFormSubmission(event) {
    event.preventDefault();
    props.onNewAnswerCreation({
      player1: event.target.player1.value,
      // setOptionValue(event.target.value);
      fantasyId: fantasy.id
    });
  }

  // if(auth.currentUser.email === fantasy.creator){
    showButtons = 
    <>
      <css.Button onClick={onClickingEdit}>Update Event</css.Button>
      <css.Button onClick={()=> onClickingDelete(fantasy.id)}>Delete Event</css.Button>
      <css.Button onClick={getPlayers}>Show Picks</css.Button>
    </>
  // }

  return (
    <React.Fragment>
      <h1>{fantasy.name}</h1>
      <h2>{fantasy.website}</h2>
      <Dropdown
        formLabel="Choose a player"
        buttonText="Se"
        onChange={handleNewPlayerFormSubmission}
        action="https://jsonplaceholder.typicode.com/posts"
      >
        <Option selected value="Click to see available players" />
        <Option value="Paul McBeth - 27523 - 1049" />
        <Option value="Option 2" />
        <Option value="Option 3" />
      </Dropdown>
      <p>You selected {optionValue} </p>
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