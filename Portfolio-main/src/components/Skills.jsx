import React from 'react'
import styled from "styled-components"
import { useState,useEffect } from 'react'
const Section= styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;


`
const Container= styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`

const Icon = styled.img`
max-width: 200px;
height: 100px;

`

const IconsWrapper= styled.div`
margin-top: 40px;
display:flex;
flex-direction: row;
gap: 50px;
`

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:5px;
`

const Title= styled.h1`
display: flex;
font-size: 45px;
`
const ProgressBar = styled.div`
  
`

const Skills = () => {



  return (
    <Section>
      <Container>
        <Title>My Skills</Title>
        <IconsWrapper>
          <IconContainer>
            <Icon width="100px" src='./img/jslogo.png'/>
            <ProgressBar></ProgressBar>
          </IconContainer>
            <Icon src='./img/nodejslogo.png'/>
            <Icon src='./img/reactlogo.png'/>
            <Icon src='./img/SQLlogo.png'/>
            <Icon src='./img/pythonlogo.png'/>
            <Icon src='./img/tensorflowlogo.png'/>
        </IconsWrapper>
       </Container>
      </Section>
  )
}

export default Skills