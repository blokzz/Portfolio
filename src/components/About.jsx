import React from 'react'
import styled from "styled-components"


const data = [
  "Web Design",
  "Development",
  "Machine Learning",
  "日本語"
]

const Section= styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
flex: 2;
display: flex;
align-items: center;

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
const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap:20px;
  
`
const ListItem= styled.li`
  font-size: 100px;
  font-weight: bold;
  position: relative;
  color: transparent;
  -webkit-text-stroke: 1px white;
  cursor: pointer;
  ::after{
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  
  &:hover{
    ::after{
    animation: moveText 0.3s linear both;
    @keyframes moveText {
      to{
        width: 100%;
      }
    }
  }
  }
`


const About = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item)=>(
              <>
              <ListItem key={item} text={item}>{item}</ListItem>
              </>
            ))}
          </List>
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