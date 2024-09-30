import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tag from './Tag';

const TagsContainer = styled.div`
width: 100%;
padding-bottom: 10px;
display: flex;
flex-direction: row;
gap: 5px;
flex-wrap: wrap;
justify-content: center;
`;

const TagsSection = (props) => {
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
    <TagsContainer>
    {data.map((item)=>(
        <Tag activeTags={props.activeTags} setCurrentTags={props.SetCurrentTags} name={item.name} img={item.image}/>
    ))}
    </TagsContainer>
  );
};

export default TagsSection;