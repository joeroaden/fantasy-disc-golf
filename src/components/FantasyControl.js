import React, { useState, useEffect } from "react";
import { collection, addDoc, doc, onSnapshot, deleteDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "./../firebase.js";
import FantasyList from "./FantasyList";
import NewFantasyForm from "./NewFantasyForm";
import FantasyDetail from "./FantasyDetail";
import EditFantasyForm from "./EditFantasyForm.js";
import MyFantasyList from "./MyFantasyList.js";
// import MyTeam from "./MyTeam.js"; 
import * as css from '../StyleComponents'

function FantasyControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainFantasyList, setMainFantasyList] = useState([]);
  const [error, setError] = useState(null);
  const [selectedFantasy, setSelectedFantasy] = useState(null);
  // const [currentAnswer, setCurrentAnswer] = useState(null);
  const [editing, setEditing] = useState(false);
  const [viewMyFantasyList, setViewMyFantasyList] = useState(false);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "events"),
      (collectionSnapshot) => {
        const events = [];
        collectionSnapshot.forEach((doc) => {
          events.push({
            ...doc.data(),
            id: doc.id
          });
        });
        setMainFantasyList(events);
      },
      (error) => {
        setError(error.message);
      }
    );
    return () => unSubscribe();
  }, []);

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
    if (selectedFantasy != null) {
      setFormVisibleOnPage(false);
      // setCurrentAnswer(null);
      setSelectedFantasy(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleAddingNewFantasyToList = async (newFantasyData) => {
    const collectionRef = collection(db, "events");
    await addDoc(collectionRef, newFantasyData);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedFantasy = (id) => {
    const selection = mainFantasyList.filter(fantasy => fantasy.id === id)[0];
    setSelectedFantasy(selection);
  }

  const handleAddingNewAnswerToList = async (newAnswerData) => {
    const collectionRef = collection(db, "answers");
    await addDoc(collectionRef, newAnswerData);
    // setCurrentAnswer(newAnswerData);
    setFormVisibleOnPage(false);
    // logic to show a component that has the correct answers for the Fantasy you just took, and shows your answers alongside them.
  }

  const handleDeletingFantasy = async (id) => {
    await deleteDoc(doc(db, "events", id));
    setSelectedFantasy(null);
  }

  const handleEditingFantasyInList = async (FantasyToEdit) => {
    const FantasyRef = doc(db, "events", FantasyToEdit.id);
    await updateDoc(FantasyRef, FantasyToEdit);
    setEditing(false);
    setSelectedFantasy(null);
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleChangingFantasyList = () => {
    setViewMyFantasyList(!viewMyFantasyList);
  }
  
  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>You must be signed in to access Events</h1>
      </React.Fragment>
    )
  } else if (auth.currentUser != null) {
    console.log(auth.currentUser);

    let currentlyVisibleState = null;
    let buttonText = null; 
    
    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
    // } else if (currentAnswer != null){
    //   currentlyVisibleState = <AnswerKey answer={currentAnswer} Fantasy={selectedFantasy} />;
    //   buttonText = "Return to Fantasy List";
    } else if (editing) {      
      currentlyVisibleState = <EditFantasyForm fantasy={selectedFantasy} onEditFantasy={handleEditingFantasyInList} />
      buttonText = "Return to Fantasy List";
    } else if (selectedFantasy != null) {
      currentlyVisibleState= <FantasyDetail
      fantasy={selectedFantasy} 
      onClickingDelete={handleDeletingFantasy}
      onClickingEdit = {handleEditClick} 
      onNewAnswerCreation = {handleAddingNewAnswerToList} />
      buttonText = "Return to Fantasy List";
    } else if (formVisibleOnPage) {
      currentlyVisibleState = <NewFantasyForm onNewFantasyCreation={handleAddingNewFantasyToList}/>;
      buttonText = "Return to Fantasy List"; 
    } else if (viewMyFantasyList){
      currentlyVisibleState = <MyFantasyList onFantasySelection={handleChangingSelectedFantasy} FantasyList={mainFantasyList} changeVisibleList={handleChangingFantasyList}/>;
      buttonText = "Add Event";
    } else {
      currentlyVisibleState = <FantasyList onFantasySelection={handleChangingSelectedFantasy} fantasyList={mainFantasyList} changeVisibleList={handleChangingFantasyList}/>;
      buttonText = "Add Event"; 
    }
  
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {error ? null : <css.Button onClick={handleClick}>{buttonText}</css.Button>} 
      </React.Fragment>
    );   
  }
}

export default FantasyControl;