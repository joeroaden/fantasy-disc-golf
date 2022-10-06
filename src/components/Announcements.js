import React from "react";
import background from '../img/grass.png';

function Announcements(){
  const mainStyle={
    backgroundImage: `url(${background})`,

  }

  const textStyle={
    color: 'white',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 'larger'

  }

  return (
    <React.Fragment>
      <div style={mainStyle}>
        <div style={textStyle}>
          <h1>Announcements</h1>
          <h3>There are no new announcements to share at this time, but thank you for stopping by and stay tuned for more updates!</h3>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      </div>
      </div>
    </React.Fragment>
  );
}




export default Announcements;