import React from 'react';
import styled from "styled-components";
import { useState , useEffect } from 'react';

const Container = styled.div`
  min-width: 17vw;
  max-width: 20vw;
  height: 240px;
  background-color: #526699;
  border-radius: 15%;
  display: flex;
  overflow: hidden;
  transition: 0.5s ease;
  cursor: pointer;
  background-image: ${(props) => props.image};
  background-size: cover;
  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${(props) => props.image};
    background-size: cover;
    filter: blur(3px);
    z-index: -1;
    transform: scale(1.01);
    transition: 0.5s ease;

  }
  &:hover {
    transform: scale(1.05);
    transition: 0.5s ease;

  }
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  margin-bottom: 0;
  margin-top: auto;
  border-bottom-left-radius: 0;
  font-size: 15px;
  text-align: center;
  transform: scale(1.05);
  transition: 0.5s ease;
`;

const Description = styled.div`
padding: 10px;
font-size: 15px;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.7);
`
const Nav = styled.nav`
 position: relative;
  display: flex;
  justify-content: center;
`
const Gitlink = styled.a`
  position: absolute;
  right: 5px;
`
const GitIcon = styled.img`
  height: 20px;
  width: 20px;
`
const ProjectDesc = styled.div`
  padding: 10px;
`
const Name = styled.span`
  
`

const Work = (props) => {
  const { name,image,desc , link } = props;

  const [hovered , setHover] = useState(false)


  const test = () => {
    setHover(true)
  }
  const test2 = () => {
    setHover(false)
  }

  return (
    <Container onMouseEnter={()=>test()} onMouseLeave={()=>test2()} image={image}>
      {hovered ? (
      <Description>
      <Nav><Name>{name}</Name><Gitlink href={link} target='_blank'><GitIcon src='./img/gitwhite.png'></GitIcon></Gitlink></Nav>
      <ProjectDesc>{desc}</ProjectDesc>
      </Description>
    ) : (<TitleContainer>{name}</TitleContainer>)}
    </Container>
  );
};

export default Work;