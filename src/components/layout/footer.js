import React from 'react'
import styled from 'styled-components';
import bg from "../../assets/images/bg.jpg"

const Footer = () => {
  return (
    <>
     <FooterBar>
       <div>
       Powered by caffeine? ... Coca-Cola conta? </div>
     </FooterBar>

    </>
  )
}

export default Footer

const FooterBar = styled.footer`
height:5vh;
background:url(${bg});
font-family:monospace;

>div{
  background-color:rgba(0,0,0,0.5);
  color:#fff;
  width:100%;
  height:5vh;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
}

`