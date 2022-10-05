import React from 'react';
import Header from './Header';
import FantasyControl from './FantasyControl';
import SignIn from './SignIn';
import Rules from './Rules'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import Announcements from './Announcements';



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
          <Route path='/rules' element={<Rules/>}/>
          <Route path='/announcements' element={<Announcements/>}/>

          <Route path='/' element={<FantasyControl/>}/>     
        </Routes> 
        </div>
      </Router>
    </StyledWrapper>  
  );
}

export default App;
