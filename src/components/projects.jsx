import React from "react";
import PreviewSite from "./previewSite/previewSite.component";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CreatePreviewContext } from "./context/sitePreviewContext";
import { fadeIn } from "../variants";

function Projects() {

  const { eccommerceSiteTemplate } = useContext(CreatePreviewContext)


  return (
    <ProjectsContainer>
      <div className="section" id="projects">
        <h1>Some of my Projects</h1>
        <motion.div
          variants={fadeIn("up", 1)}
          initial={"hidden"}
          whileInView={"show"}
        >
          <PreviewSite SitePreview={eccommerceSiteTemplate} />
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
