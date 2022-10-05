import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../img/Logo.png';

const FantasyHeader = styled.h1`
  font-size: 30px;
  text-color: white;
  background-color: lightgray;
`;

const StyledWrapper = styled.section`
  background-color: lightgray;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  text-align: center;
`;

function Header() {
  return (
    <React.Fragment>
      <StyledWrapper>
      <FantasyHeader>
        <img src={Logo} width='700px'alt='fantasty disc golf logo'/>
      </FantasyHeader>
        <p><Link to="/">Home</Link> | <Link to="/sign-in">Account</Link> | <Link to="/rules">Rules</Link></p>
      </StyledWrapper> 
    </React.Fragment>
  );
}

export default Header;