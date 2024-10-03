import React from 'react'
import styled , {keyframes} from "styled-components"
import Map from './Map';
const blob = keyframes`
  0%, 100% {
    border-radius: 77% 47% 61% 49%;
  }

  20% {
    border-radius: 89% 26% 70% 30%;
  }

  40% {
    border-radius: 56% 93% 56% 94%;
  }

  60% {
    border-radius: 68% 60% 94% 96%;
  }

  80% {
    border-radius: 34% 74% 59% 82%;
  }
`;

const Section= styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: row;
`
const SocialLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 128px;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    background: #fff;
    transition: 0.5s ease;
    animation: ${blob} 12s linear infinite alternate;
  }

  &:hover:before {
    opacity: 0.6;
  }

  &.linkedin:before {
    background: linear-gradient(165deg, #1da1f2, #657786);
  }

  &.github:before {
    background: linear-gradient(165deg, #0a0e16, #3f3f3f);
  }

  &.leet:before {
    background: linear-gradient(165deg, #0e0d0d, #d39436);
  }

`
const SocialContainer = styled.ul`
  display: flex;;
  align-items: center;
  gap: 20px;
  padding: 40px;
`
const Title = styled.h1`
position: relative;
font-size: 50px;
`
const Container = styled.div`
  position: relative;
  justify-content:space-between;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;

  gap: 50px;
`
const Icon = styled.img`
  width: 60px;
  height: 60px;
`
const Mail = styled.h2`
  
`
const ContactContainer = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
  padding: 40px;
`
function Contact() {
  return (
    <>
    <Section>
    <Container>
    <ContactContainer>
    <Title>Contact</Title>
    <Mail>E-mail: rudydinoargentinos@gmail.com.</Mail>
    </ContactContainer>
    <SocialContainer>
    <SocialLink className="linkedin" target='_blank' href="https://linkedin.com"><Icon src='./img/linkedin.png'></Icon></SocialLink>
    <SocialLink className="github" target='_blank' href="https://github.com/blokzz"><Icon src='./img/github.png'></Icon></SocialLink>
    <SocialLink className="leet" target='_blank' href="https://leetcode.com/u/blokz/"><Icon src='./img/leet.png'></Icon></SocialLink>
    </SocialContainer>
    </Container>
    <Map/>
    </Section>
    </>
  )
}

export default Contact