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
          <h1>Announcements</h1>
          <p>There are no new announcements to share at this time, but thank you for stopping by and stay tuned for more updates!</p>
      </div>
      </div>
    </React.Fragment>
  );
}




export default Announcements;