import React from 'react';
import Header from './Header';
import FantasyControl from './FantasyControl';
import SignIn from './SignIn';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  // background-color: red;
`;

function App() {
  return (
    <StyledWrapper>
      <Router>
        <Header/>
        <Routes>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/' element={<FantasyControl/>}/>       
        </Routes>
      </Router>
    </StyledWrapper>
  );
}

export default App;
