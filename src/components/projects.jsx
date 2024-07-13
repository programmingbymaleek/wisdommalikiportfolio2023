import React from "react";
import PreviewSite from "./previewSite/previewSite.component";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CreatePreviewContext } from "./context/sitePreviewContext";
import { fadeIn } from "../variants";
import { CreatePreviewMovieContext } from "./context/moviePreviewContext";
import { CreatePreviewContext_2 } from "./context/sitePreviewContext_2";
function Projects() {
  const { eccommerceSiteTemplate, SiteAsset } =
    useContext(CreatePreviewContext);
  const { ecommerceSiteTemplate2, SiteAsset2 } = useContext(
    CreatePreviewContext_2
  );

  console.log("this is the site assest 2 ", SiteAsset2);
  const { movieBaseTemplate, SiteAssetM } = useContext(
    CreatePreviewMovieContext
  );

  return (
    <ProjectsContainer>
      <div className="section" id="projects">
        <h1>My Latest Projects</h1>
        <motion.div
          variants={fadeIn("up", 1)}
          initial={"hidden"}
          whileInView={"show"}
        >
          <PreviewSite
            SitePreview={ecommerceSiteTemplate2}
            SiteAsset={SiteAsset2}
          />
          <PreviewSite
            SitePreview={eccommerceSiteTemplate}
            SiteAsset={SiteAsset}
          />
          <PreviewSite SitePreview={movieBaseTemplate} SiteAsset={SiteAssetM} />
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
