import styled, { keyframes } from "styled-components"
import "./textAnimationTitle.scss"
import React, { FC } from "react";
interface TextProps {
    text:string
}

const TextAnimation: FC<TextProps>= (props)=>{
return (
    <div>
    <Wrapper className="textAnimationTitle">
        {props.text}
    </Wrapper>
    
    </div>
   
)
}

export default TextAnimation
const animation = keyframes`
0% {opacity:0;rotateZ(0); filter:blur(100px); }
50% {opacity:1;rotateZ(0); filter:blur(0px);}
}
`
const Wrapper = styled.span`
display :inline-block ;
opacity:0;
animation-name:${animation};
animation-duration:4s;
animation-fill-mode:forwards;`

