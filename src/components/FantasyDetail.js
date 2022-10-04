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
  const [optionValue2, setOptionValue2] = useState("");
  const [optionValue3, setOptionValue3] = useState("");
  const [optionValue4, setOptionValue4] = useState("");
  const [optionValue5, setOptionValue5] = useState("");



  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  }
  
  const handleSelect2 = (e) => {
    console.log(e.target.value);
    setOptionValue2(e.target.value);
  }
  const handleSelect3 = (e) => {
    console.log(e.target.value);
    setOptionValue3(e.target.value);
  }
  const handleSelect4 = (e) => {
    console.log(e.target.value);
    setOptionValue4(e.target.value);
  }
  const handleSelect5 = (e) => {
    console.log(e.target.value);
    setOptionValue5(e.target.value);
  }
  
  let showButtons = null;

  const getPlayers = async () => {
    const q = query(collection(db, "player"), where("eventsId", "==", fantasy.id))
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });

    let newPlayerList = [];
    querySnapshot.forEach((doc) => {
      newPlayerList.push(
      <ol>
        <li key={v4()}>{doc.data().player1}</li>
        <li key={v4()}>{doc.data().player2}</li>
        <li key={v4()}>{doc.data().player3}</li>
        <li key={v4()}>{doc.data().player4}</li>
        <li key={v4()}>{doc.data().player5}</li>
      </ol>
      )
    })
    setPlayerList(newPlayerList);
    console.log(playerList);
  }
  
  function handleNewPlayerFormSubmission(event) {
    event.preventDefault();
    // console.log({player1})
    props.onNewPlayerCreation({
      name: event.target.name.value,
      player1: optionValue,
      player2: optionValue2,
      player3: optionValue3,
      player4: optionValue4,
      player5: optionValue5,
      fantasyId: fantasy.id
    });
    console.log(optionValue)
  }
  

  if(auth.currentUser.email === fantasy.creator){
    showButtons = 
    <>
      <css.Button onClick={onClickingEdit}>Update Event</css.Button>
      <css.Button onClick={()=> onClickingDelete(fantasy.id)}>Delete Event</css.Button>
      <css.Button onClick={getPlayers}>Show Picks</css.Button>
    </>
  }

  return (
    <React.Fragment>
      <h1>{fantasy.name}</h1>
      <a href="https://www.pdga.com/tour/event/55454">PDGA Event Page</a>
      <form onSubmit={handleNewPlayerFormSubmission}>
        <br></br>
      <input
          type='text'
          name='name'
          height='100px'
          placeholder='Your Team Name' />   
          <br></br>
          <br></br>
          <br></br>
      <Dropdown
        formLabel="Choose Player 1"
        name="player1"
        // buttonText="Select Player"
        onChange={handleSelect}
        // action="https://jsonplaceholder.typicode.com/posts"
      >
        <Option selected value="Click to see available players" />
        <Option value="Paul McBeth - 1049" />
        <Option value="Richard Wysocki - 1048" />
        <Option value="Matthew Orum	- 1043"/>
        <Option value="Chris Dickerson - 1043" />
        <Option value="Gannon Buhr - 1042" />
        <Option value="Calvin Heimburg - 1042" />
        <Option value="Kyle Klein	- 1038" />
        <Option value="Anthony Barela	-	1037" />
        <Option value="Simon Lizotte	-	1037	" />
        <Option value="Joel Freeman	-	1036" />
        <Option value="James Conrad	-	1035" />
        <Option value="Nathan Sexton -	1035" />
        <Option value="Kevin Jones	-	1034" />
        <Option value="Drew Gibson	-	1034" />
        <Option value="Chris Clemons	-	1034" />
        <Option value="Corey Ellis	-	1031" />
        <Option value="Adam Hammes	-	1031" />
        <Option value="Isaac Robinson	-	1030" />
        <Option value="Mason Ford	-	1030" />
        <Option value="Alden Harris	-	1030" />
        <Option value="Aaron Gossage	-	1029" />
        <Option value="Scott Withers	-	1029" />
        <Option value="Lauri Lehtinen	-	1029" />
        <Option value="Gavin Rathbun	-	1028" />
        <Option value="Andrew Marwede	-	1028" />
        <Option value="Niklas Anttila	-	1028" />
        <Option value="David Feldberg	-	1027" />
        <Option value="Gregg Barsby	-	1027" />
        <Option value="Väinö Mäkelä	-	1027" />
        <Option value="Andrew Presnell	-	1027" />
        <Option value="Evan Smith	-	1027" />
        <Option value="Cole Redalen	-	1026" />
        <Option value="Thomas Gilbert	-	1026" />
        <Option value="Ezra Aderhold	-	1026" />
        <Option value="Paul Ulibarri	-	1024" />
        <Option value="Benjamin Callaway	-	1024" />
        <Option value="Emerson Keith	-	1024" />
        <Option value="Joona Heinänen	-	1024" />
        <Option value="Chandler Kramer	-	1024" />
        <Option value="Jesse Nieminen	-	1023	" />
        <Option value="Albert Tamm	-	1023" />
        <Option value="Barry Schultz	-	1022" />
        <Option value="James Proctor	-	1022" />
        <Option value="Kristian Kuoksa	-	1022" />
        <Option value="Brodie Smith	-	1022" />
        <Option value="Jeremy Koling	-	1022" />
        <Option value="Linus Carlsson	-	1022" />
        <Option value="Nathan Queen	-	1021" />
        <Option value="Paul Oman	-	1020" />
        <Option value="Austin Turner	-	1019" />
        <Option value="Connor O'Reilly	-	1019" />
        <Option value="Chandler Fry	-	1018	" />
        <Option value="Eric Oakley	-	1018" />
        <Option value="Luke Samson	-	1018" />
        <Option value="Sullivan Tipton	-	1018" />
        <Option value="Luke Humphries	-	1017" />
        <Option value="Jakub Semerád	-	1017" />
        <Option value="Jason Hebenheimer	-	1017" />
        <Option value="Austin Hannum	-	1016" />
        <Option value="Gavin Babcock	-	1016" />
        <Option value="Steve Brinster	-	1016" />
        <Option value="Alex Russell	-	1016" />
        <Option value="Knut Valen Håland	-	1014" />
        <Option value="Ezra Robinson	-	1013" />
        <Option value="Kevin Kiefer III	-	1013" />
        <Option value="Tristan Tanner	-	1013" />
        <Option value="AJ Carey	-	1012" />
        <Option value="Cody Kirkland	-	1011" />
        <Option value="Travis Head	-	1009" />
        <Option value="Randon Latta	-	1009" />
        <Option value="Tuomas Hyytiäinen	-	1009" />
        <Option value="Robert Burridge	-	1009" />
        <Option value="Garett Everson	-	1009" />
        <Option value="Mike Sale	-	1008" />
        <Option value="G.T. Hancock	-	1008	" />
        <Option value="Carter Ahrens	-	1008" />
        <Option value="Parker Welck	-	1007" />
        <Option value="Jacob Courtis	-	1007" />
        <Option value="Jake Monn	-	1007" />
        <Option value="Paul Krans	-	1006" />
        <Option value="Noah Fiveash	-	1005" />
        <Option value="Henar Ruudna	-	1002" />
        <Option value="Mauri Villmann	-	1002" />
        <Option value="Matt Thompson	-	1002" />
        <Option value="Justin Rosak	-	998" />
        <Option value="Cam Zanini	-	997" />
        <Option value="William Hannu	-	992" />
        <Option value="Ilkin Groh	-	990" />
        <Option value="Brandon Holsworth	-	990" />
      </Dropdown>
      <hr/>
      <Dropdown
        formLabel="Choose Player 2"
        name="player2"
        // buttonText="Select Player"
        onChange={handleSelect2}
        // action="https://jsonplaceholder.typicode.com/posts"
      >
        <Option selected value="Click to see available players" />
        <Option value="Paul McBeth - 1049" />
        <Option value="Richard Wysocki - 1048" />
        <Option value="Matthew Orum	- 1043"/>
        <Option value="Chris Dickerson - 1043" />
        <Option value="Gannon Buhr - 1042" />
        <Option value="Calvin Heimburg - 1042" />
        <Option value="Kyle Klein	- 1038" />
        <Option value="Anthony Barela	-	1037" />
        <Option value="Simon Lizotte	-	1037	" />
        <Option value="Joel Freeman	-	1036" />
        <Option value="James Conrad	-	1035" />
        <Option value="Nathan Sexton -	1035" />
        <Option value="Kevin Jones	-	1034" />
        <Option value="Drew Gibson	-	1034" />
        <Option value="Chris Clemons	-	1034" />
        <Option value="Corey Ellis	-	1031" />
        <Option value="Adam Hammes	-	1031" />
        <Option value="Isaac Robinson	-	1030" />
        <Option value="Mason Ford	-	1030" />
        <Option value="Alden Harris	-	1030" />
        <Option value="Aaron Gossage	-	1029" />
        <Option value="Scott Withers	-	1029" />
        <Option value="Lauri Lehtinen	-	1029" />
        <Option value="Gavin Rathbun	-	1028" />
        <Option value="Andrew Marwede	-	1028" />
        <Option value="Niklas Anttila	-	1028" />
        <Option value="David Feldberg	-	1027" />
        <Option value="Gregg Barsby	-	1027" />
        <Option value="Väinö Mäkelä	-	1027" />
        <Option value="Andrew Presnell	-	1027" />
        <Option value="Evan Smith	-	1027" />
        <Option value="Cole Redalen	-	1026" />
        <Option value="Thomas Gilbert	-	1026" />
        <Option value="Ezra Aderhold	-	1026" />
        <Option value="Paul Ulibarri	-	1024" />
        <Option value="Benjamin Callaway	-	1024" />
        <Option value="Emerson Keith	-	1024" />
        <Option value="Joona Heinänen	-	1024" />
        <Option value="Chandler Kramer	-	1024" />
        <Option value="Jesse Nieminen	-	1023	" />
        <Option value="Albert Tamm	-	1023" />
        <Option value="Barry Schultz	-	1022" />
        <Option value="James Proctor	-	1022" />
        <Option value="Kristian Kuoksa	-	1022" />
        <Option value="Brodie Smith	-	1022" />
        <Option value="Jeremy Koling	-	1022" />
        <Option value="Linus Carlsson	-	1022" />
        <Option value="Nathan Queen	-	1021" />
        <Option value="Paul Oman	-	1020" />
        <Option value="Austin Turner	-	1019" />
        <Option value="Connor O'Reilly	-	1019" />
        <Option value="Chandler Fry	-	1018	" />
        <Option value="Eric Oakley	-	1018" />
        <Option value="Luke Samson	-	1018" />
        <Option value="Sullivan Tipton	-	1018" />
        <Option value="Luke Humphries	-	1017" />
        <Option value="Jakub Semerád	-	1017" />
        <Option value="Jason Hebenheimer	-	1017" />
        <Option value="Austin Hannum	-	1016" />
        <Option value="Gavin Babcock	-	1016" />
        <Option value="Steve Brinster	-	1016" />
        <Option value="Alex Russell	-	1016" />
        <Option value="Knut Valen Håland	-	1014" />
        <Option value="Ezra Robinson	-	1013" />
        <Option value="Kevin Kiefer III	-	1013" />
        <Option value="Tristan Tanner	-	1013" />
        <Option value="AJ Carey	-	1012" />
        <Option value="Cody Kirkland	-	1011" />
        <Option value="Travis Head	-	1009" />
        <Option value="Randon Latta	-	1009" />
        <Option value="Tuomas Hyytiäinen	-	1009" />
        <Option value="Robert Burridge	-	1009" />
        <Option value="Garett Everson	-	1009" />
        <Option value="Mike Sale	-	1008" />
        <Option value="G.T. Hancock	-	1008	" />
        <Option value="Carter Ahrens	-	1008" />
        <Option value="Parker Welck	-	1007" />
        <Option value="Jacob Courtis	-	1007" />
        <Option value="Jake Monn	-	1007" />
        <Option value="Paul Krans	-	1006" />
        <Option value="Noah Fiveash	-	1005" />
        <Option value="Henar Ruudna	-	1002" />
        <Option value="Mauri Villmann	-	1002" />
        <Option value="Matt Thompson	-	1002" />
        <Option value="Justin Rosak	-	998" />
        <Option value="Cam Zanini	-	997" />
        <Option value="William Hannu	-	992" />
        <Option value="Ilkin Groh	-	990" />
        <Option value="Brandon Holsworth	-	990" />
      </Dropdown>
      <hr></hr>
      <Dropdown
        formLabel="Choose Player 3"
        name="player3"
        // buttonText="Select Player"
        onChange={handleSelect3}
        // action="https://jsonplaceholder.typicode.com/posts"
      >
        <Option selected value="Click to see available players" />
        <Option value="Paul McBeth - 1049" />
        <Option value="Richard Wysocki - 1048" />
        <Option value="Matthew Orum	- 1043"/>
        <Option value="Chris Dickerson - 1043" />
        <Option value="Gannon Buhr - 1042" />
        <Option value="Calvin Heimburg - 1042" />
        <Option value="Kyle Klein	- 1038" />
        <Option value="Anthony Barela	-	1037" />
        <Option value="Simon Lizotte	-	1037	" />
        <Option value="Joel Freeman	-	1036" />
        <Option value="James Conrad	-	1035" />
        <Option value="Nathan Sexton -	1035" />
        <Option value="Kevin Jones	-	1034" />
        <Option value="Drew Gibson	-	1034" />
        <Option value="Chris Clemons	-	1034" />
        <Option value="Corey Ellis	-	1031" />
        <Option value="Adam Hammes	-	1031" />
        <Option value="Isaac Robinson	-	1030" />
        <Option value="Mason Ford	-	1030" />
        <Option value="Alden Harris	-	1030" />
        <Option value="Aaron Gossage	-	1029" />
        <Option value="Scott Withers	-	1029" />
        <Option value="Lauri Lehtinen	-	1029" />
        <Option value="Gavin Rathbun	-	1028" />
        <Option value="Andrew Marwede	-	1028" />
        <Option value="Niklas Anttila	-	1028" />
        <Option value="David Feldberg	-	1027" />
        <Option value="Gregg Barsby	-	1027" />
        <Option value="Väinö Mäkelä	-	1027" />
        <Option value="Andrew Presnell	-	1027" />
        <Option value="Evan Smith	-	1027" />
        <Option value="Cole Redalen	-	1026" />
        <Option value="Thomas Gilbert	-	1026" />
        <Option value="Ezra Aderhold	-	1026" />
        <Option value="Paul Ulibarri	-	1024" />
        <Option value="Benjamin Callaway	-	1024" />
        <Option value="Emerson Keith	-	1024" />
        <Option value="Joona Heinänen	-	1024" />
        <Option value="Chandler Kramer	-	1024" />
        <Option value="Jesse Nieminen	-	1023	" />
        <Option value="Albert Tamm	-	1023" />
        <Option value="Barry Schultz	-	1022" />
        <Option value="James Proctor	-	1022" />
        <Option value="Kristian Kuoksa	-	1022" />
        <Option value="Brodie Smith	-	1022" />
        <Option value="Jeremy Koling	-	1022" />
        <Option value="Linus Carlsson	-	1022" />
        <Option value="Nathan Queen	-	1021" />
        <Option value="Paul Oman	-	1020" />
        <Option value="Austin Turner	-	1019" />
        <Option value="Connor O'Reilly	-	1019" />
        <Option value="Chandler Fry	-	1018	" />
        <Option value="Eric Oakley	-	1018" />
        <Option value="Luke Samson	-	1018" />
        <Option value="Sullivan Tipton	-	1018" />
        <Option value="Luke Humphries	-	1017" />
        <Option value="Jakub Semerád	-	1017" />
        <Option value="Jason Hebenheimer	-	1017" />
        <Option value="Austin Hannum	-	1016" />
        <Option value="Gavin Babcock	-	1016" />
        <Option value="Steve Brinster	-	1016" />
        <Option value="Alex Russell	-	1016" />
        <Option value="Knut Valen Håland	-	1014" />
        <Option value="Ezra Robinson	-	1013" />
        <Option value="Kevin Kiefer III	-	1013" />
        <Option value="Tristan Tanner	-	1013" />
        <Option value="AJ Carey	-	1012" />
        <Option value="Cody Kirkland	-	1011" />
        <Option value="Travis Head	-	1009" />
        <Option value="Randon Latta	-	1009" />
        <Option value="Tuomas Hyytiäinen	-	1009" />
        <Option value="Robert Burridge	-	1009" />
        <Option value="Garett Everson	-	1009" />
        <Option value="Mike Sale	-	1008" />
        <Option value="G.T. Hancock	-	1008	" />
        <Option value="Carter Ahrens	-	1008" />
        <Option value="Parker Welck	-	1007" />
        <Option value="Jacob Courtis	-	1007" />
        <Option value="Jake Monn	-	1007" />
        <Option value="Paul Krans	-	1006" />
        <Option value="Noah Fiveash	-	1005" />
        <Option value="Henar Ruudna	-	1002" />
        <Option value="Mauri Villmann	-	1002" />
        <Option value="Matt Thompson	-	1002" />
        <Option value="Justin Rosak	-	998" />
        <Option value="Cam Zanini	-	997" />
        <Option value="William Hannu	-	992" />
        <Option value="Ilkin Groh	-	990" />
        <Option value="Brandon Holsworth	-	990" />
      </Dropdown>
      <hr></hr>
      <Dropdown
        formLabel="Choose Player 4"
        name="player4"
        // buttonText="Select Player"
        onChange={handleSelect4}
        // action="https://jsonplaceholder.typicode.com/posts"
      >
        <Option selected value="Click to see available players" />
        <Option value="Paul McBeth - 1049" />
        <Option value="Richard Wysocki - 1048" />
        <Option value="Matthew Orum	- 1043"/>
        <Option value="Chris Dickerson - 1043" />
        <Option value="Gannon Buhr - 1042" />
        <Option value="Calvin Heimburg - 1042" />
        <Option value="Kyle Klein	- 1038" />
        <Option value="Anthony Barela	-	1037" />
        <Option value="Simon Lizotte	-	1037	" />
        <Option value="Joel Freeman	-	1036" />
        <Option value="James Conrad	-	1035" />
        <Option value="Nathan Sexton -	1035" />
        <Option value="Kevin Jones	-	1034" />
        <Option value="Drew Gibson	-	1034" />
        <Option value="Chris Clemons	-	1034" />
        <Option value="Corey Ellis	-	1031" />
        <Option value="Adam Hammes	-	1031" />
        <Option value="Isaac Robinson	-	1030" />
        <Option value="Mason Ford	-	1030" />
        <Option value="Alden Harris	-	1030" />
        <Option value="Aaron Gossage	-	1029" />
        <Option value="Scott Withers	-	1029" />
        <Option value="Lauri Lehtinen	-	1029" />
        <Option value="Gavin Rathbun	-	1028" />
        <Option value="Andrew Marwede	-	1028" />
        <Option value="Niklas Anttila	-	1028" />
        <Option value="David Feldberg	-	1027" />
        <Option value="Gregg Barsby	-	1027" />
        <Option value="Väinö Mäkelä	-	1027" />
        <Option value="Andrew Presnell	-	1027" />
        <Option value="Evan Smith	-	1027" />
        <Option value="Cole Redalen	-	1026" />
        <Option value="Thomas Gilbert	-	1026" />
        <Option value="Ezra Aderhold	-	1026" />
        <Option value="Paul Ulibarri	-	1024" />
        <Option value="Benjamin Callaway	-	1024" />
        <Option value="Emerson Keith	-	1024" />
        <Option value="Joona Heinänen	-	1024" />
        <Option value="Chandler Kramer	-	1024" />
        <Option value="Jesse Nieminen	-	1023	" />
        <Option value="Albert Tamm	-	1023" />
        <Option value="Barry Schultz	-	1022" />
        <Option value="James Proctor	-	1022" />
        <Option value="Kristian Kuoksa	-	1022" />
        <Option value="Brodie Smith	-	1022" />
        <Option value="Jeremy Koling	-	1022" />
        <Option value="Linus Carlsson	-	1022" />
        <Option value="Nathan Queen	-	1021" />
        <Option value="Paul Oman	-	1020" />
        <Option value="Austin Turner	-	1019" />
        <Option value="Connor O'Reilly	-	1019" />
        <Option value="Chandler Fry	-	1018	" />
        <Option value="Eric Oakley	-	1018" />
        <Option value="Luke Samson	-	1018" />
        <Option value="Sullivan Tipton	-	1018" />
        <Option value="Luke Humphries	-	1017" />
        <Option value="Jakub Semerád	-	1017" />
        <Option value="Jason Hebenheimer	-	1017" />
        <Option value="Austin Hannum	-	1016" />
        <Option value="Gavin Babcock	-	1016" />
        <Option value="Steve Brinster	-	1016" />
        <Option value="Alex Russell	-	1016" />
        <Option value="Knut Valen Håland	-	1014" />
        <Option value="Ezra Robinson	-	1013" />
        <Option value="Kevin Kiefer III	-	1013" />
        <Option value="Tristan Tanner	-	1013" />
        <Option value="AJ Carey	-	1012" />
        <Option value="Cody Kirkland	-	1011" />
        <Option value="Travis Head	-	1009" />
        <Option value="Randon Latta	-	1009" />
        <Option value="Tuomas Hyytiäinen	-	1009" />
        <Option value="Robert Burridge	-	1009" />
        <Option value="Garett Everson	-	1009" />
        <Option value="Mike Sale	-	1008" />
        <Option value="G.T. Hancock	-	1008	" />
        <Option value="Carter Ahrens	-	1008" />
        <Option value="Parker Welck	-	1007" />
        <Option value="Jacob Courtis	-	1007" />
        <Option value="Jake Monn	-	1007" />
        <Option value="Paul Krans	-	1006" />
        <Option value="Noah Fiveash	-	1005" />
        <Option value="Henar Ruudna	-	1002" />
        <Option value="Mauri Villmann	-	1002" />
        <Option value="Matt Thompson	-	1002" />
        <Option value="Justin Rosak	-	998" />
        <Option value="Cam Zanini	-	997" />
        <Option value="William Hannu	-	992" />
        <Option value="Ilkin Groh	-	990" />
        <Option value="Brandon Holsworth	-	990" />
      </Dropdown>
      <hr></hr>
      <Dropdown
        formLabel="Choose Player 5"
        name="player5"
        // buttonText="Select Player"
        onChange={handleSelect5}
        // action="https://jsonplaceholder.typicode.com/posts"
      >
        <Option selected value="Click to see available players" />
        <Option value="Paul McBeth - 1049" />
        <Option value="Richard Wysocki - 1048" />
        <Option value="Matthew Orum	- 1043"/>
        <Option value="Chris Dickerson - 1043" />
        <Option value="Gannon Buhr - 1042" />
        <Option value="Calvin Heimburg - 1042" />
        <Option value="Kyle Klein	- 1038" />
        <Option value="Anthony Barela	-	1037" />
        <Option value="Simon Lizotte	-	1037	" />
        <Option value="Joel Freeman	-	1036" />
        <Option value="James Conrad	-	1035" />
        <Option value="Nathan Sexton -	1035" />
        <Option value="Kevin Jones	-	1034" />
        <Option value="Drew Gibson	-	1034" />
        <Option value="Chris Clemons	-	1034" />
        <Option value="Corey Ellis	-	1031" />
        <Option value="Adam Hammes	-	1031" />
        <Option value="Isaac Robinson	-	1030" />
        <Option value="Mason Ford	-	1030" />
        <Option value="Alden Harris	-	1030" />
        <Option value="Aaron Gossage	-	1029" />
        <Option value="Scott Withers	-	1029" />
        <Option value="Lauri Lehtinen	-	1029" />
        <Option value="Gavin Rathbun	-	1028" />
        <Option value="Andrew Marwede	-	1028" />
        <Option value="Niklas Anttila	-	1028" />
        <Option value="David Feldberg	-	1027" />
        <Option value="Gregg Barsby	-	1027" />
        <Option value="Väinö Mäkelä	-	1027" />
        <Option value="Andrew Presnell	-	1027" />
        <Option value="Evan Smith	-	1027" />
        <Option value="Cole Redalen	-	1026" />
        <Option value="Thomas Gilbert	-	1026" />
        <Option value="Ezra Aderhold	-	1026" />
        <Option value="Paul Ulibarri	-	1024" />
        <Option value="Benjamin Callaway	-	1024" />
        <Option value="Emerson Keith	-	1024" />
        <Option value="Joona Heinänen	-	1024" />
        <Option value="Chandler Kramer	-	1024" />
        <Option value="Jesse Nieminen	-	1023	" />
        <Option value="Albert Tamm	-	1023" />
        <Option value="Barry Schultz	-	1022" />
        <Option value="James Proctor	-	1022" />
        <Option value="Kristian Kuoksa	-	1022" />
        <Option value="Brodie Smith	-	1022" />
        <Option value="Jeremy Koling	-	1022" />
        <Option value="Linus Carlsson	-	1022" />
        <Option value="Nathan Queen	-	1021" />
        <Option value="Paul Oman	-	1020" />
        <Option value="Austin Turner	-	1019" />
        <Option value="Connor O'Reilly	-	1019" />
        <Option value="Chandler Fry	-	1018	" />
        <Option value="Eric Oakley	-	1018" />
        <Option value="Luke Samson	-	1018" />
        <Option value="Sullivan Tipton	-	1018" />
        <Option value="Luke Humphries	-	1017" />
        <Option value="Jakub Semerád	-	1017" />
        <Option value="Jason Hebenheimer	-	1017" />
        <Option value="Austin Hannum	-	1016" />
        <Option value="Gavin Babcock	-	1016" />
        <Option value="Steve Brinster	-	1016" />
        <Option value="Alex Russell	-	1016" />
        <Option value="Knut Valen Håland	-	1014" />
        <Option value="Ezra Robinson	-	1013" />
        <Option value="Kevin Kiefer III	-	1013" />
        <Option value="Tristan Tanner	-	1013" />
        <Option value="AJ Carey	-	1012" />
        <Option value="Cody Kirkland	-	1011" />
        <Option value="Travis Head	-	1009" />
        <Option value="Randon Latta	-	1009" />
        <Option value="Tuomas Hyytiäinen	-	1009" />
        <Option value="Robert Burridge	-	1009" />
        <Option value="Garett Everson	-	1009" />
        <Option value="Mike Sale	-	1008" />
        <Option value="G.T. Hancock	-	1008	" />
        <Option value="Carter Ahrens	-	1008" />
        <Option value="Parker Welck	-	1007" />
        <Option value="Jacob Courtis	-	1007" />
        <Option value="Jake Monn	-	1007" />
        <Option value="Paul Krans	-	1006" />
        <Option value="Noah Fiveash	-	1005" />
        <Option value="Henar Ruudna	-	1002" />
        <Option value="Mauri Villmann	-	1002" />
        <Option value="Matt Thompson	-	1002" />
        <Option value="Justin Rosak	-	998" />
        <Option value="Cam Zanini	-	997" />
        <Option value="William Hannu	-	992" />
        <Option value="Ilkin Groh	-	990" />
        <Option value="Brandon Holsworth	-	990" />
      </Dropdown>
      <p>You selected:
      <br></br>
      {optionValue} 
      <br></br>
      {optionValue2} 
      <br></br>
      {optionValue3}
      <br></br>
      {optionValue4}
      <br></br>
      {optionValue5} </p>
      <css.Button type='submit'>Submit your Team!</css.Button>
      </form>
      {/* {answerList} */}
      {showButtons}
    </React.Fragment>
  );
}
// console.log(player1);

FantasyDetail.propTypes = {
  fantasy: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default FantasyDetail;