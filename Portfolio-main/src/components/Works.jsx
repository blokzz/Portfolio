import React from 'react'
import styled from "styled-components"
import { useState,useEffect } from 'react'
import Work from './Work'
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
const WorksContainer= styled.div`
margin-top: 40px;
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
gap: 30px;

`
const Title= styled.h1`
display: flex;
font-size: 45px;
`

const SeeMore = styled.div`
  width: 190px;
  height: 90px;
  background-color: #526699;
  font-size: 15px;
  border-radius: 15%;
  margin-top: auto;
  display: flex;
  margin-bottom: auto;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  border: black solid 1px;
  cursor: pointer;
  &:hover{
margin-left: 10px;
transition: 1.2s ease;
background-color: #3d548f;
opacity: 1;

  }
`
const Works = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data/projects.json'); 
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
        <Title>My Works</Title>
        <WorksContainer>
        {data.slice(0, 8).map(item => (
          <Work key={item.id} name={item.name} image={item.image} desc={item.desc} ></Work>
        ))}
         <SeeMore>See More of my Projects</SeeMore>
        </WorksContainer>
       </Container>
      </Section>
  )
}

export default Works