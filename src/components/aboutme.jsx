import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Aboutme() {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <AboutmeContainer id="about" ref={ref}>
      <div className="">
        <p className="aboutMe">About Me:</p>
        <div className="aboutContent">
          <div>
            <span className="intro">Welcome to my portfolio website!</span>{" "}
            <p className="aboutMecontent">
              As a front-end developer with over{" "}
              <span className="spanClass">
                {" "}
                {inView ? <CountUp start={1} end={4} duration={2} /> : null}
              </span>{" "}
              years of experience, I am passionate about creating beautiful,
              functional, and responsive websites that deliver exceptional user
              experiences. My expertise in HTML, CSS, JavaScript, Jquery,
              TypeScript, React and other web development technologies allows me
              to bring anyone's visions to life. I am Skilled in developing responsive and scalable web applications, passionate about creating user-friendly interfaces and solving complex problems with elegant solutions. I have Strong communication skills and ability to work well in a team environment. Additionally, I have experience with ETL tools and data integration. Take a look at my portfolio to see some of my recent work and get in touch. I look forward to working with you!
            </p>
          </div>
        </div>
      </div>
    </AboutmeContainer>
  );
}

export default Aboutme;

const AboutmeContainer = styled.div`
  @media (max-width: 460px) {
    .yearsOFExperience {
      flex-direction: column;
    }
  }
  padding: 2rem 0;
  .spanMe {
    font-family: "Kanit", sans-serif;
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 4px;
  }
  .yearsOFExperience {
    display: flex;
    gap: 2rem;
  }
  .section {
  }
  .intro {
    font-family: "Shantell Sans", cursive;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    display: block;
  }
  .aboutMecontent {
    font-family: "Shantell Sans", cursive;
    font-size: 1.6rem;
  }
  .aboutMe {
    font-family: "Shantell Sans", cursive;
    font-size: 2.5rem;
    text-transform: uppercase;
  }
  .spanClass {
    font-family: "Rubik Wet Paint", cursive;
    background-color: white;
    color: black;
    padding: 0 0.2rem;
    font-size: 2rem;
  }
`;
