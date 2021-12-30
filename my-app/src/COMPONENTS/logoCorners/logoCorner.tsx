import styled, { keyframes } from "styled-components"
import "./logoCorner.scss"
import React, { FC } from "react";
interface LogoProps {
    text:string,
    onClick:React.MouseEventHandler,
   
}

const LogoCorner: FC<LogoProps>= (props)=>{
return (
    <div onClick={props.onClick}>
    <span className="logo" >{props.text}</span>
    </div>
   
)
}
export default LogoCorner