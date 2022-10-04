import React from "react";
import PropTypes from "prop-types";
import { auth } from "./../firebase.js";
import Fantasy from "./Fantasy.js";
import * as css from '../StyleComponents';

function MyFantasyList(props) {
  const myFantasyList = props.fantasyList.filter(fantasy => auth.currentUser.email === fantasy.creator);

  


  return(
    <React.Fragment>
      <hr/>
      {myFantasyList.map((fantasy) => 
        <Fantasy 
          whenFantasyClicked={props.onFantasySelection}
          name={fantasy.name}
          id={fantasy.id}
          key={fantasy.id}/>
      )}
      <css.Button onClick={props.changeVisibleList}>View All Events</css.Button>
    </React.Fragment>
  );
}

MyFantasyList.propTypes = {
  fantasyList: PropTypes.array,
  onFantasySelection: PropTypes.func,
};

export default MyFantasyList;