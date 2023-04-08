import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import styled from "styled-components";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contactme() {
  const defaultFormField = {
    sender_email: "",
    fullname: "",
    message: "",
  };

  const [formField, setFormField] = useState(defaultFormField);

  const { sender_email, fullname, message } = formField;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Email has been sent");
          setFormField(defaultFormField);
        },
        (error) => {
          alert("There was an error sendin your message", error.message);
        }
      );
  };
  return (
    <ContactmeContainer className="section" id="contact">
      <div className="body">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          className="sections"
        >
          <h4>Get in touch </h4>
          <h2>
            Let's work
            <br /> together !
          </h2>
        </motion.div>
        <motion.form
          variants={fadeIn("up", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          className="c-form"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            className="customInput"
            placeholder="Your email"
            type="email"
            name="sender_email"
            value={sender_email}
            onChange={onChangeHandler}
            required
          />
          <input
            className="customInput"
            placeholder="Your Name"
            type="text"
            name="fullname"
            value={fullname}
            onChange={onChangeHandler}
            required
          />
          <textarea
            className="customInput"
            placeholder="Your message"
            type="text"
            name="message"
            value={message}
            onChange={onChangeHandler}
            required
          />
          <button type="submit">send message</button>
        </motion.form>
      </div>
    </ContactmeContainer>
  );
}

export default Contactme;

const ContactmeContainer = styled.div`
  textarea,
  input {
    ::placeholder {
      color: white;
      opacity: 0.7;
    }
  }
  margin-top: 15rem;

  ::placeholder {
    color: white !important;
  }

  .c-form {
    display: flex;
    border: 1px solid white;
    flex-direction: column;
    padding: 2rem;
    justify-content: space-evenly;
    align-items: center;
    min-width: 40rem;
    border-radius: 1rem;
  }
  textarea {
    padding-top: 2rem;
    resize: none;
    min-height: 7rem;
  }
  .customInput {
    margin-top: 0.5rem;
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    width: 30rem;
    outline: none;
    caret-color: white;
    padding: 0 0 0 1rem;
    padding-bottom: 1rem;
    color: white;
    :focus {
      border-bottom: 1px solid yellow;
    }
  }
  .body {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    height: 30rem;
  }
  .sections {
    align-self: center;
    h4 {
      text-transform: upperCase;
      background-color: white;
      display: inline-block;
      padding: 1rem;
      color: black;
    }
    h2 {
      margin-top: 1rem;
      font-size: 5rem;
      font-family: "Rubik Wet Paint", cursive;
    }
  }
  button {
    text-transform: uppercase;
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    font-size: 0.9em;
    font-weight: 600;
    font-family: "Rubik Wet Paint", cursive;
    :hover {
      background-color: yellow;
    }
  }

  @media (max-width: 1200px) {
    .sections {
      h2 {
        font-size: 4rem;
      }
    }
    .c-form {
      min-width: 25rem;
    }
    .customInput {
      width: 25rem;
    }
  }
  @media (max-width: 995px) {
    padding: 0 1rem;
    .c-form {
      min-width: 20;
    }
    .customInput {
      width: 20rem;
    }
  }

  @media (max-width: 960px) {
    .body {
      flex-direction: column;
    }
    .c-form {
      min-width: 20;
    }
    .customInput {
      width: 35rem;
    }
  }
  @media (max-width: 772px) {
    .customInput {
      width: 25rem;
    }
  }
  @media (max-width: 772px) {
    .c-form {
      min-width: 15rem;
    }
    .customInput {
      width: 20rem;
    }
  }
  @media (max-width: 360px) {
    .c-form {
      min-width: 10rem;
    }
    .customInput {
      width: 15rem;
    }
  }
`;
