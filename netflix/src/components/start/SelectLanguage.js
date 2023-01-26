import React from 'react';
import {BsGlobe} from 'react-icons/bs';
import styled from "styled-components";

const StyledSelectLanguage = styled.div`
  width:${(props) => props.width || "100px"};
  height:${(props) => props.height || "40px"};
  border:2px solid ${(props) => props.color || "white"};
  background-color: black;
  color:white;
  margin-left: ${(props) => props.margin || "1050px"};
  display: flex;
  & > .select-icon {
    color: ${(props) => props.iconcolor || "white"};
    margin-top:${(props) => props.iconmt || "10px"};
    margin-left:${(props) => props.iconml || "5px"};
    margin-right:${(props) => props.iconmr || "0px"};
    size:15px;
  }
  & > .select-language{
    background-color: black;
    color: ${(props) => props.languagecolor || "white"};
    border:0px;
   }
`;


const SelectLanguage = ({width, height, color, margin, iconcolor, iconmt, iconml, iconmr, languagecolor}) => {
  return (
    <StyledSelectLanguage 
      width={width} height={height} color={color} margin={margin} 
      iconcolor={iconcolor} iconmt={iconmt} iconml={iconml} iconmr={iconmr} 
      languagecolor={languagecolor}
    >
        <BsGlobe className='select-icon'/>
        <select className='select-language'>
              <option>한국어</option>
              <option>English</option>
        </select>
    </StyledSelectLanguage>
  )
}

export default SelectLanguage