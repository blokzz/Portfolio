import React from 'react'
import styled from "styled-components"

const Section= styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1100px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
flex: 1;

`
const Title = styled.h1`
font-size: 70px;
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
`
const Description = styled.p`
font-size: 18px;
color: lightgray;
`
const Button = styled.button`
background-color: #526699;
color: white;
font-weight: 500;
width: 120px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
&:hover{
  transition: 0.1s ease;
background-color: #3d548f;
}
`
const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
`


const About = () => {
  return (
    <Section>
      <Container>
        <Left>
          
        </Left>
        <Right>
          <Title>About me</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>Learn about my hobbies</Subtitle>
          </WhatWeDo>
          <Description>I have </Description>
          <Button>See my works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default About