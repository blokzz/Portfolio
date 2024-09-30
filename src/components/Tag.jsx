import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const TagWrapper = styled.div`
display: flex;
flex-direction: row;
padding: 9px 15px 9px 15px;
height: 20px;
background-color: ${(props) =>(props.isActive ? '#6c85c4' : '#3d548f')};
gap: 3px;
cursor: pointer;
transition: 0.3s ease;
border-radius: 20px;
&:hover{
  background-color:#526699 ;
}
`;
const Icon = styled.img`
max-width:40px;
height:20px;
`
const TagName = styled.span`
    font-size: 15px;
`
const TagContainer = styled.div`
  display: flex;
  position: relative;
`
const Tag = (props) => {
  const [isActive , setIsActive] = useState(false)
  const handleTagSelection = () =>{
    if(props.activeTags.includes(props.name)){
      props.setCurrentTags((prevTags) => prevTags.filter(tag => tag !== props.name));
      setIsActive(false)
    }
    else{
      props.setCurrentTags((prevTags) => [...prevTags, props.name])
      setIsActive(true)
    }
  }
  return (
  <TagContainer onClick={handleTagSelection}>
  <TagWrapper isActive={isActive}>
    <Icon src={props.img}/><TagName>{props.name}</TagName>
  </TagWrapper>
  </TagContainer>
  );
};

export default Tag;