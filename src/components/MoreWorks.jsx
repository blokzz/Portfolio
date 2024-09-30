import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TagsSection from './TagsSection';
const Section = styled.div`
  display: flex;
  padding: 15px;
  height: 80vh;
  width: 30vw;
  position: relative;
  background-color: transparent;
  flex-direction: column;
  background: rgba(24, 24, 24, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.5px);
-webkit-backdrop-filter: blur(5.5px);
`;

const Input = styled.input`
  display: flex;
  height: 20px;
  border: none;
  border-radius: 20px;
  background-color: #c2c2c2;
  font-size: 15px;
  width: 70%;
  padding: 10px 15px 10px 15px;
  &:focus{
    outline: none;
  }
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;
  justify-content: center;
`;

const Projects = styled.table`
 overflow: scroll;
 -ms-overflow-style: none; 
 scrollbar-width: none;
 &::-webkit-scrollbar {
  display: none;
 }
 `

const ProjectName = styled.td`
 font-size: 1.5em;
 width: 40%;
`
const ProjectWrapper = styled.tr`
display: flex;

padding: 10px;
border-bottom: #ffffff solid 1px;
`
const ProjectInfo = styled.td`
  font-size: 0.7em;
  width: 30%;
  white-space: break-spaces;
  word-break: break-all;
  display: flex;
  justify-content: center;
`
const Icons = styled.td`
  font-size: 0.7em;
  width: 30%;
  display: flex;
  justify-content: right;
  gap: 5px;
  flex-wrap: wrap;
`
const Icon = styled.img`
  max-width: 40px;
  height: 20px;
`

const Title = styled.div`
  font-size: 1.2em;
  padding: 10px;
  display: flex;
  flex-direction: row;
 justify-content:space-between;
`

const MoreWorks = () => {
  const [inputValue, setInputValue] = useState(''); 
  const [data, setData] = useState([]);
  const [techs, setTechs] = useState([]);
  const [activeTags, SetCurrentTags] = useState([])

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
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data/techs.json'); 
        const jsonData = await response.json();
        setTechs(jsonData);
      } catch (error) {
        console.error('Błąd pobierania danych:', error);
      }
    };

    fetchData();
  }, []);
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Section>
      <NavBar>
        <Input value={inputValue} onChange={handleInputChange} placeholder="Search..." />
      </NavBar>
      <TagsSection activeTags={activeTags} SetCurrentTags={SetCurrentTags}/>
      <Projects>
        <Title><span>Project Name</span><span>Description</span><span>Techs</span></Title>
        {data
          .filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()) &&  activeTags.every((element) => item.technologies.includes(element))) 
          .map((item) => (
            <ProjectWrapper key={item.id}>
              <ProjectName>{item.name}</ProjectName>
            <ProjectInfo>{item.desc}</ProjectInfo>
            <Icons>{techs.filter((tech) => item.technologies.includes(tech.name)).map((tech)=>(<Icon src={tech.image}/>))}</Icons>
            </ProjectWrapper>
          ))}
      </Projects>
    </Section>
  );
};

export default MoreWorks;