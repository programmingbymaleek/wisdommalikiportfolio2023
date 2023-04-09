import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { SiRedux, SiTypescript, SiJquery, SiFirebase, SiWebpack, SiVisualstudio, SiJest } from "react-icons/si"
import { BsDatabaseFillGear, BsFillBootstrapFill, BsFiletypePhp } from "react-icons/bs"
import { DiSass, DiGitBranch } from "react-icons/di"
import { FaReact } from "react-icons/fa"
import { TbBrandNextjs, TbBrandJavascript } from "react-icons/tb"
import { ImHtmlFive } from "react-icons/im"
import { IoLogoCss3 } from "react-icons/io"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BsPrefixComponent } from "react-bootstrap/esm/helpers";





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
        <div className="techStackUsed">  <p variants={fadeIn("down", 0.2)}
          initial={"hidden"}
          whileInView={"show"} className="techStackHeader" style={{ textAlign: "center", fontSize: "2rem" }}>Technology stack of many used over the years.</p>
          <div className="stackContainer">
            <div className="stack">
              <div>  <ImHtmlFive className="individualStack" style={{ color: "#DD4B25" }} />
                <IoLogoCss3 className="individualStack" style={{ color: "#0079C0" }} />
                <TbBrandJavascript className="individualStack" style={{ color: "#D3B32A" }} /></div>
              <p>HTML,CSS, Js</p>
            </div>
            <div className="stack">
              <BsFillBootstrapFill className="individualStack" style={{ color: "#7248B6" }} />
              <p>Bootstrap</p>
            </div>
            <div className="stack">
              <DiSass className="individualStack" style={{ color: "#CB6899" }} />
              <p>Sass</p>
            </div>
            <div className="stack">
              <SiJquery className="individualStack" style={{ color: "#1163A4" }} />
              <p>Jquery</p>
            </div>
            <div className="stack">
              <SiTypescript className="individualStack" style={{ color: "#2F74C0" }} />
              <p>TypeScript</p>
            </div>
            <div className="stack">
              <FaReact className="individualStack" style={{ color: "#00D1F7" }} />
              <p>React</p>
            </div>
            <div className="stack">
              <TbBrandNextjs className="individualStack" style={{ color: "#cbced8" }} />
              <p>NextJs</p>
            </div>
            <div className="stack">
              <SiRedux className="individualStack" style={{ color: "#7248B6" }} />
              <p>Redux</p>
            </div>
            <div className="stack">
              <DiGitBranch className="individualStack" style={{ color: "#E4392C" }} />
              <p>Git</p>
            </div>
            <div className="stack">
              <SiVisualstudio className="individualStack" style={{ color: "#0173C1" }} />
              <p>Vistual Studio</p>
            </div>
            <div className="stack">
              <SiWebpack className="individualStack" style={{ color: "#1B72B6" }} />
              <p>Webpack</p>
            </div>
            <div className="stack">
              <SiJest className="individualStack" style={{ color: "#913F4B" }} />
              <p>Jest</p>
            </div>

            <div className="stack">
              <BsFiletypePhp className="individualStack" style={{ color: "#4B568C" }} />
              <p>Php</p>
            </div>
            <div className="stack">
              <BsDatabaseFillGear className="individualStack" />
              <p>Relational Databases</p>
            </div>
            <div className="stack">
              <SiFirebase className="individualStack" style={{ color: "#F7C62E" }} />
              <p>Google fireBase</p>
            </div>
          </div>
        </div>
      </div>
    </AboutmeContainer >
  );
}

export default Aboutme;

const AboutmeContainer = styled.div`
  @media (max-width: 460px) {
    .yearsOFExperience {
      flex-direction: column;
    }
  }

  .techStackUsed{
    margin-top:6rem;
  }
  .stackContainer{
    display:flex;
     background:rgba(0,0,0,.3);
     border-radius:1rem;
    justify-content:center; 
    align-items:center;
    padding:1rem;
    text-transform:uppercase;
    gap:1.5rem;
    flex-wrap:wrap;
    .stack{
      p{
        letter-spacing:.1rem;
      }
      font-family: "Shantell Sans", cursive;
      font-weight:bold;
      display:flex;
      align-items:center;
      gap:1rem;
      flex-direction:column;
      flex-wrap:no-wrap;
      .individualStack{
        width:3rem;
        height:3rem;
      }

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
  .techStackHeader{
    font-size: 2.5rem;
    text-transform: uppercase;
    font-family: "Shantell Sans", cursive;
    font-weight:bold;
  }
  .spanClass {
    font-family: "Rubik Wet Paint", cursive;
    background-color: white;
    color: black;
    padding: 0 0.2rem;
    font-size: 2rem;
  }
`;
