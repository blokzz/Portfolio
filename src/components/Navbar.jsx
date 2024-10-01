import React from 'react';
import styled, { keyframes } from "styled-components";


const underlineAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;


const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

const Logo = styled.img`
  height: 50px;
  display: flex;
  border-radius: 50%;
`;

const List = styled.ul`
  display: flex;
  gap: 60px;
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  position: relative;
  cursor: pointer;
  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2.2px;
    background-color: #fff;
    animation: ${underlineAnimation} 0.5s forwards;
  }
`;


const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About me</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;