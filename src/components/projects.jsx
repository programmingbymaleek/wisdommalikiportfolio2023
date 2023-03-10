import React from "react";
import PreviewSite from "./previewSite/previewSite.component";
import eccomerceHomePage from "../assets/ecommencesite/homePage.png";
import eccomercecCollections from "../assets/ecommencesite/collections.png";
import eccomercecheckOutPage from "../assets/ecommencesite/checkoutpage.png";
import eccomerceAuthentication from "../assets/ecommencesite/authentication.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Projects() {
  const Eccomercesite = [
    eccomerceHomePage,
    eccomercecCollections,
    eccomercecheckOutPage,
    eccomerceAuthentication,
  ];

  return (
    <ProjectsContainer>
      <div className="section" id="projects">
        <h1>Some of my Projects</h1>
        <motion.div
          variants={fadeIn("up", 1)}
          initial={"hidden"}
          whileInView={"show"}
        >
          <PreviewSite SitePreview={Eccomercesite} />
        </motion.div>
      </div>
    </ProjectsContainer>
  );
}

export default Projects;

const ProjectsContainer = styled.div`
  .section {
    h1 {
      text-align: center;
      margin-top: 4rem;
      font-family: "Rubik Wet Paint", cursive;
      font-size: 3rem;
    }
  }
`;
