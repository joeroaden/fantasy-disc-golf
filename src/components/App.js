import React from 'react';
import Header from './Header';
import GolfControl from './GolfControl';
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
          <Route path='/' element={<GolfControl/>}/>       
        </Routes>
      </Router>
    </StyledWrapper>
  );
}

export default App;
