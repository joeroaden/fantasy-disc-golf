import React from "react";
import background from '../img/grass.png';
import '../App.css'

function Rules(){
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
    <h1>Rules & Scoring</h1>
    <p>1. Salary Cap - every week each player has salary cap of 10k to select players based on rating</p>
    <p>2. Choose your top 4 for MPO and FPO and 1 wild card each - wild card will be the player you believe to play most above their *rating - *points above rating will be added to overall score along with additional points</p>
    <p>3. Players will accumulate points based on where they finish regardless of order - except wild card - this is the player you believe will finish well but also farther above their rating</p>
    <div className="App">
    <table>
        <tr>
          <th>Place</th>
          <th>MPO</th>
          <th>FPO</th>
        </tr>
        <tr>
          <td>1</td>
          <td>250</td>
          <td>250</td>
        </tr>
        <tr>
          <td>2</td>
          <td>225</td>
          <td>230</td>
        </tr>
        <tr>
          <td>3</td>
          <td>220</td>
          <td>210</td>
        </tr>
        <tr>
          <td>4</td>
          <td>215</td>
          <td>190</td>
        </tr>
        <tr>
          <td>5</td>
          <td>210</td>
          <td>170</td>
        </tr>
        <tr>
          <td>6</td>
          <td>200</td>
          <td>150</td>
        </tr>
        <tr>
          <td>7</td>
          <td>198</td>
          <td>130</td>
        </tr>
        <tr>
          <td>8</td>
          <td>196</td>
          <td>110</td>
        </tr>
        <tr>
          <td>9</td>
          <td>194</td>
          <td>100</td>
        </tr>
        <tr>
          <td>10</td>
          <td>192</td>
          <td>90</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>

        
      </table>
      </div>

    </div>
      </div>
  </React.Fragment>
);
}



export default Rules;