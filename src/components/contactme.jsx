import React from "react";
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import styled from "styled-components";
import Thankyou from "./thankyou";

function Contactme() {
  return (
    <ContactmeContainer className="section" id="contact">
      <div className="body">
        <div className="sections"><h4>Get in touch </h4>
          <h2>Let's work<br /> together !</h2>
        </div>
        <form className="c-form" action="https://formsubmit.co/wisdommaliki19@gmail.com" method="POST">
          <input className="customInput" placeholder="Your email" type='email' required />
          {/* <input type="hidden" name="_next" value={`https://https://github.com/programmingbymaleek/Myportfolio/${<Thankyou />}`} /> */}
          <input className="customInput" placeholder="Your Name" type='text' required />
          <textarea className="customInput" placeholder="Your message" type='text' required />
          <button type="submit">send message</button>
        </form>

      </div>
    </ContactmeContainer>
  );
}

export default Contactme;

const ContactmeContainer = styled.div`
.c-form{
  display:flex; 
  border:1px solid white; 
  flex-direction:column;
  padding:2rem; 
  justify-content:space-evenly; 
  border-radius:1rem;

}
textarea{
  padding-top:2rem;
  resize:none; 
  min-height: 7rem; 
}
.customInput{
  margin-top:.5rem; 
  background:transparent; 
  border:none;
  border-bottom:1px solid white; 
  width:30rem;
  outline:none;
  caret-color: white; 
  padding-bottom: 1rem; 
  color:white; 
  :focus{
    border-bottom:1px solid yellow; 
  }
}
.body{
  
  margin-top:2rem; 
  width:100%; 
  display:flex; 
  justify-content: space-between; 
  height:30rem; 
}
.sections{

align-self:center;  
  h4{
   text-transform:upperCase; 
   background-color:white; 
   display:inline-block; 
   padding:1rem;
   color:black;
  }
  h2{
    margin-top:1rem; 
    font-size:5rem; 
    font-family: "Rubik Wet Paint", cursive;
  }
}
button{
  text-transform:uppercase; 
  margin-top:2rem; 
 
  padding:1rem;
  border-radius:1rem;
  font-size:.9em;
  font-weight:600;
  font-family: "Rubik Wet Paint", cursive;
  :hover{
    background-color:yellow; 

  }
}

`


