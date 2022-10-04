import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../img/Logo.png';
import grass from '../img/grass.png';

const FantasyHeader = styled.h1`
  margin: 10px; 
  font-size: 50px;
  text-color: white;
  // background-color: teal;
`;

const StyledWrapper = styled.section`
  background-color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

function Header() {
  return (
    <React.Fragment>
      <StyledWrapper>
      <FantasyHeader>
        <img src={Logo} width='750px'alt='fantasty disc golf logo'/>
      </FantasyHeader>
        <p><Link to="/">Home</Link> | <Link to="/sign-in">Account</Link> | <Link to="/sign-in">Contact</Link></p>
      </StyledWrapper> 
    </React.Fragment>
  );
}

export default Header;