import React from 'react'
import styled from "styled-components"
import { useState,useEffect } from 'react'
import MoreWorks from './MoreWorks'
import Work from './Work'
const Section= styled.div`
height: 100vh;
width: 100vw;
scroll-snap-align: center;
display: flex;
justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 200vw; /* 2 full width sections, so 200% of the viewport width */
  height: 100vh; /* Full viewport height */
  transition: transform 0.5s ease-in-out; /* Smooth scroll animation */
  transform: ${(props) => (props.scrollRight ? 'translateX(-100vw)' : 'translateX(0)')};
`

const Container= styled.div`
display: flex;
justify-content: center;
align-items: center;
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
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 1s ease, opacity 0.4s ease-out;
  opacity:  ${(props) => (props.arrowHovered ? '1' : '0')};
`

const Arrow = styled.img`
position: absolute;
  width: 100px;
  height: 100px;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.arrowHovered ? 'translateX(150px)' : 'translateX(0)')};
`
const SeeMoreWrap = styled.div`
position: relative;
margin-top: auto;
margin-bottom: auto;
height: 100px;
display: flex;
cursor: pointer;
flex-direction: row;
`



const Works = () => {
  const [scrollRight, setScrollRight] = useState(false);

  const [arrowHovered , SetarrowHovered] = useState(false);

  const handleScroll = () => {
    setScrollRight(!scrollRight); 
  };
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
    <Wrapper scrollRight={scrollRight}>
    <Section>
      <Container>
        <Title>My Works</Title>
        <WorksContainer>
        {data.slice(0, 8).map(item => (
          <Work key={item.id} name={item.name} image={item.image} desc={item.desc} link={item.link} ></Work>
        ))}
         <SeeMoreWrap  onClick={handleScroll} onMouseOver={()=>SetarrowHovered(true)} onMouseOut={()=>SetarrowHovered(false)}>
             <SeeMore arrowHovered={arrowHovered}>See More of my Projects</SeeMore>
             <Arrow  arrowHovered={arrowHovered} src="./img/arrow.png"></Arrow>
         </SeeMoreWrap>
        </WorksContainer>
       </Container>
      </Section>
      <Section>
      <Container>
        <Title>More of my Works</Title>
        <MoreWorks/>
        <span onClick={handleScroll}>Back</span>
       </Container>
      </Section>
      </Wrapper>
  )
}

export default Works