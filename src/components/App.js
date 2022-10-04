import React from 'react';
import Header from './Header';
import FantasyControl from './FantasyControl';
import SignIn from './SignIn';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';



const StyledWrapper = styled.section`
// text-color: 'white';
  
`;
const bodyStyle = {
  backgroundColor: 'light-gray'
}

function App() {
  return (
    <StyledWrapper>
      <Router>
        <Header/>
        <div style={bodyStyle}>
        <Routes>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/' element={<FantasyControl/>}/>     
        </Routes> 
        </div>
      </Router>
    </StyledWrapper>  
  );
}

export default App;
