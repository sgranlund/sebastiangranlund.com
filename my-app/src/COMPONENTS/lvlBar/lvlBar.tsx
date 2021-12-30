// 1. It should show the progress
// 2. Show the percentage of completion in text
// 3. Color, width
import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import "./LvlBar.scss"
type Div = {
  width: string;
  value: number;
  nom: string;
};
const Container = Styled.div<Div>`
  div{
      position:relative;
      margin-left:0%;
  }
progress {
    margin-right: 0px;
    position:relative;
   
  }

  progress[value] {
    width: ${(props) => props.width};

    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 16px;
    border-radius: 2px;
    border-style:solid;
    border-color:orange;
    background-color: transparent;
  }  

  progress[value]::-webkit-progress-value {
    height: 10px;
    border-radius: 0px;
    background-color: ${(props) => props.color};
  
  
  }
  progress[value]:hover:after {
   
    content: attr(value);
    position:absolute;
    transform:translate(-50%,-50%);
    top:-100%;
    left:${(props) => props.value}%
 
}
p{
    color:white;}
`;

const LvlBar = ({ value, max, color, width, nom }) => {
  return (
    <Container color={color} width={width} value={value} nom={nom}>
      <div>
        <p data-value="60">{nom}</p>
        <progress value={value} max={max} />
      </div>
    </Container>
  );
};

LvlBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
};

LvlBar.defaultProps = {
  max: 100,
  color: "lightBlue",
  width: "250px",
};

export default LvlBar;
