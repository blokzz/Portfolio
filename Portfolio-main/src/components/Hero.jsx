import React from 'react'
import styled from "styled-components"
import Navbar from "./Navbar"

const Section= styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1100px;
  display: flex;
  justify-content: center;

`

const Left = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
gap:20px;
align-items: center;

`
const Title = styled.h1`
font-size: 100px;
`
const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
const Line = styled.img`
user-select: none;
height: 5px;
`
const Subtitle = styled.h2`
color: #526699;
font-size: 25px;
`
const Description = styled.p`
font-size: 18px;
color: lightgray;
`
const Button = styled.button`
background-color: #526699;
color: white;
font-weight: 500;
width: 160px;
padding: 15px;
border: none;
border-radius: 5px;
cursor: pointer;
`

const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: 0;
animation: animate 2s infinite ease alternate;
@keyframes animate {
  to{
    transform: translateY(20px) ;
  }
}
`
const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>My name is Kamil</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>Front-End Developer and Software Engineer</Subtitle>
            <Line src="./img/line.png"/>
          </WhatWeDo>
          <Description>I </Description>
          <Button>Learn more about me</Button>
        </Left>
      </Container>
    </Section>
  )
}

export default Hero