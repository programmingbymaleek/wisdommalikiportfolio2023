import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { DiFirebase } from "react-icons/di";
import { SiJavascript, SiRedux } from "react-icons/si";
import { useState } from "react";

function ViewsiteAndTechStack({ SiteAsset }) {
  const { viewLiveSite, viewtechnologyUsed, viewSourceCode } = { ...SiteAsset };
  const techStack = [FaReact, BsBootstrap, FaHtml5, DiFirebase];
  const [isOpen, setIsOpen] = useState(false);
  const setOpenState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ViewsiteAndTechStackContainer>
      <div className="siteContent">
        <a href={viewLiveSite} target={"_blank"}>
          View Live site
        </a>
        <a onClick={setOpenState}>View Technology Stack used</a>
        <a href={viewSourceCode} target={"_blank"}>
          View Source Code{" "}
        </a>
      </div>

      {isOpen && (
        <div id="technology_stack">
          <div className="description">
            {viewtechnologyUsed.techDiscription.map((des, index) => (
              <p key={index}>{des}</p>
            ))}
          </div>
          <div className="techStack">
            {viewtechnologyUsed.usedStack.map((el, index) => (
              <div className="block" key={index}>
                <img src={el} />
              </div>
            ))}
          </div>
        </div>
      )}
    </ViewsiteAndTechStackContainer>
  );
}

export default ViewsiteAndTechStack;

const ViewsiteAndTechStackContainer = styled.div`
  @media (max-width: 528px) {
    .siteContent {
      flex-direction: column;
    }
  }
  .siteContent {
    display: flex;
    gap: 2rem;
    justify-content: space-evenly;
    margin-bottom: 2rem;
    a {
      border: 1px solid white;
      padding: 1rem;
      border-radius: 0.5rem;
      font-family: "Kanit", sans-serif;
      text-transform: uppercase;
      font-size: 1.2rem;
      letter-spacing: 4px;
      box-shadow: 10px 10px 0px #ffff, 20px 20px 0px #000000;
      :hover {
        cursor: pointer;
        background-color: white;
        color: black;
        font-weight: bold;
      }
    }
  }

  .stackContainer {
    margin: 2rem;
  }
  .stackContainer > * {
    width: 12rem;
    border: 1px solid white;
    text-align: center;
    border-radius: 1rem;
  }
  .stackContainer div:hover {
    color: black;
    background-color: white;
    a {
      color: black;
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
  .techStackused {
    cursor: pointer;
  }
  #technology_stack {
    border: 1px solid white;
    box-shadow: 10px 10px 0px #ffff, 20px 20px 0px #000000;
    border-radius: 2rem;
    gap: 2rem;
    display: flex;
    justify-content: space-evenly !important;
    .description {
      align-self: center;
      padding: 2rem;
      font-size: 22px;
      font-family: "Kanit", sans-serif;
    }
  }
  .block {
    min-width: 8rem;
    height: 8rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .techStack {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    flex-wrap: wrap;
    background-color: white;
    border-radius: 2rem;
  }
  margin-top: 2rem;
  .container {
    display: flex;
    justify-content: space-around;
    height: 2rem;
  }
  .display {
    width: 4rem;
    height: 4rem;
    border: 1px solid white;
  }
`;
