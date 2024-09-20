import React, { useState } from 'react';
import styled from 'styled-components';

const Icon = styled.img`
  max-width: 300px;
  height: 140px;
`;

const IconContainer = styled.div`
  padding: 5px;
  aspect-ratio: 4/4;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 220px;
  width: 220px;
  padding: 5px;
  transition: width 0.3s linear;

  
  &::before {
  content: '';
  position: absolute;
  transition: all 0.3s ease; 
  opacity: 0; 
  border-top: black 2px solid;
  border-right: black 2px solid;
  background-color: transparent;
  top: -4px;
  right: -4px;
  height: 0%; 
  width: 0%; 
  transform-origin: right; 
}
&::after {
  content: '';
  position: absolute;
  transition:  0.3s ease; 
  opacity: 0; 
  border-bottom: black 2px solid;
  border-left: black 2px solid;
  background-color: transparent;
  bottom: -4px;
  left: -4px;
  height: 0%;
  width: 0%; 
}
&:hover{
  ::after{
    opacity: 1;
    animation: movee;
    width: 50%;
    height: 50%;
    transition: 0.3s ease;
  }
  ::before{
    opacity: 1;
    animation: movee;
    width: 50%;
    height: 50%;
    transition: 0.3s ease;

}}
`;

const ProgressBar = styled.div`
  width: 80%;
  position: relative;
  height: 5px;
  background-color: transparent; 
  border: ${(props) => (props.hovered ? 'solid black 1px' : 'none') };
  overflow: hidden;
  margin: auto;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    background-color: green;
    width: ${(props) => (props.hovered ? props.prc : '0%')}; 
    transition: width 0.3s linear; 
  }
`;
const Title = styled.span`
  height: 20px;
`
const Level = styled.span`
  height: 17px;
`

const Techicon = (props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <IconContainer
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >{hovered ? (<Title>{props.name}</Title>) : (<Title></Title>)}
      <Icon src={props.img} />
      <ProgressBar hovered={hovered} prc={props.prc} />
      {hovered ? <Level>{props.level}</Level> : <Level> </Level>}
    </IconContainer>
  );
};

export default Techicon;