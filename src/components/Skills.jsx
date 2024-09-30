import React from 'react'
import styled from "styled-components"
import { useState,useEffect } from 'react'
import Techicon from './TechIcon'
const Section= styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;



`
const Container= styled.div`
display: flex;
padding: 20px;
width: 100%;
align-items: center;
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
flex-wrap: wrap;
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
  width: 80%;
  position: relative;
  height: 20px;
  ::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    background-color: green;
    animation: moveText 0.3s linear both;
    @keyframes moveText {
      from{
        width: 0%;
      }
      to{
        width: ${(props)=>props.prc};
      }
    }
  }
`

const Skills = () => {

  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data/techs.json'); 
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Błąd pobierania danych:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <Section>
      <Container>
        <Title>My Skills</Title>
        <IconsWrapper>
        {data.map(item => (
          <Techicon img={item.image} level={item.level} name={item.name} prc={item.percentage} key={item.id}/>
        ))}
        </IconsWrapper>
       </Container>
      </Section>
  )
}

export default Skills