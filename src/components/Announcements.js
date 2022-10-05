import React from "react";
import background from '../img/grass.png';

function Announcements(){
  const mainStyle={
    backgroundImage: `url(${background})`,

  }

  const textStyle={
    color: 'white',
    fontWeight: 'bold',
    fontSize: 'larger'

  }

  return (
    <React.Fragment>
      <div style={mainStyle}>
        <div style={textStyle}>
          <h1>Announcements go here!</h1>
      </div>
      </div>
    </React.Fragment>
  );
}




export default Announcements;