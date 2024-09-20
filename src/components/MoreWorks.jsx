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

const Projects = styled.ul`
 overflow: scroll;
 -ms-overflow-style: none; 
 scrollbar-width: none;
 &::-webkit-scrollbar {
  display: none;
 }
 `

const ProjectName = styled.span`
 
`
const ProjectWrapper = styled.li`
   list-style: none;
   padding: 10px;
   font-size: 1.5em;
`
const projectInfo = styled.div`
  
`

const MoreWorks = () => {
  const [inputValue, setInputValue] = useState(''); 
  const [data, setData] = useState([]);
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
  }, [activeTags]);
  

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
        {data
          .filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()) &&  activeTags.every((element) => item.technologies.includes(element))) 
          .map((item) => (
            <ProjectWrapper key={item.id}>{item.name}</ProjectWrapper>
          ))}
      </Projects>
    </Section>
  );
};

export default MoreWorks;