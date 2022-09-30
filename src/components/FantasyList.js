import React from "react";
import Fantasy from "./Fantasy";
import PropTypes from "prop-types";
import * as css from '../StyleComponents'

// const Button = styled.button`
//   font-weight: bolder; 
//   background-color: HEX #FBFAF5;
//   border-radius: 6px;
//   border: 3px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;
// `

function FantasyList(props){

  return(
    <React.Fragment>
      <hr/>
      {props.fantasyList.map((fantasy) =>
        <Fantasy 
          whenFantasyClicked={props.onFantasySelection}
          name={fantasy.name}
          id={fantasy.id}
          key={fantasy.id}/>
      )}
      <css.Button onClick={props.changeVisibleList}>View My Picks</css.Button>
    </React.Fragment>
  );
}

FantasyList.propTypes = {
  fantasyList: PropTypes.array,
  onFantasySelection: PropTypes.func,
};

export default FantasyList;