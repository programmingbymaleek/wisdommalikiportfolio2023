import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProfilePicture from "../assets/profilepics.jpg";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

function Banner() {
  return (
    <BannerContainer className="" id="home">
      <div className="profilePicsContainer">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          className="picsContainer"
        >
          <img src={ProfilePicture} alt="" />
        </motion.div>
      </div>
      <div className="bannertopic">
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="name"
        >
          Wisdom <span className="">Maliki</span>
        </motion.h1>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="whatIdo"
        >
          <span>I am a </span>
          <TypeAnimation
            sequence={[
              "web developer",
              2000,
              "Web designer",
              2000,
              "Content creator",
              2000,
            ]}
            speed={50}
            className=""
            wrapper="span"
            repeat={Infinity}
          />
        </motion.div>
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="intro"
        >
          A good web design is essential for connecting with potential customers
          and driving sales. By prioritizing clear navigation, mobile
          responsiveness, fast load times, strong branding, compelling content,
          and easy contact, I can create a website that stands out from others.
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="portfolioRef"
        >
          <a href="#projects" className="portFirst">
            Check out my Amazing work
          </a>
          <div className="socials">
            <a href="https://github.com/programmingbymaleek" target="_blank">
              <FaGithub />
            </a>
            <a href="linkedin.com/in/maliki-wisdom-509b5a142" target={"_blank"}>
              <BsLinkedin />
            </a>
            <a
              href="https://www.youtube.com/watch?v=dE5N8YnkzJA"
              target={"_blank"}
            >
              <FaYoutube />
            </a>
          </div>
        </motion.div>
      </div>
    </BannerContainer>
  );
}

export default Banner;

const BannerContainer = styled.div`
  margin: 5rem 0rem;
  @media (max-width: 460px) {
    .profilePicsContainer {
      display: none;
      width: 5rem;
      height: 5rem;
      .picsContainer {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media (max-width: 960px) {
    flex-direction: column;
  }
  .intro {
    font-size: 24px;
    font-family: "Shantell Sans", cursive;
  }
  .whatIdo {
    font-family: "Rubik Wet Paint", cursive;
    font-size: 2rem;
  }

  .name {
    font-family: "Rubik Wet Paint", cursive;
    font-size: 5rem;
  }
  display: flex;
  gap: 4rem;
  align-items: center;
  .socials {
    display: flex;
    gap: 2rem;
    a {
      color: white;
      font-size: 1.5rem;
    }
  }

  .portfolioRef {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    .portFirst {
      text-decoration: none;
      border: 1px solid white;
      padding: 0.5rem;
      background-color: #ffffff;
      font-family: "Rubik Wet Paint", cursive;
      color: black;
      border-radius: 0.5rem;
    }
  }
  .bannertopic {
    align-self: center;
    font-size: 20px;
  }

  .picsContainer {
    border-top-right-radius: 4rem;
    border-bottom-left-radius: 4rem;
    box-shadow: 0.5rem 0.5rem 0.5rem white;
    width: 30rem;
    height: 30rem;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-top-right-radius: 4rem;
      border-bottom-left-radius: 4rem;
    }
  }
`;
