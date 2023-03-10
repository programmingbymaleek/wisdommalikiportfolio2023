import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { CreatePreviewContext } from "../context/sitePreviewContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function SiteMiddleDisplay() {
  const { isPreviewActive, previewBackGround, setPreviewAndOpacity, setNext, setPrev } =
    useContext(CreatePreviewContext);
  return (
    <ContentPreview>
      {isPreviewActive && (
        <div className="centerDiv">
          <motion.div
            className="close"
            variants={fadeIn("up", 0.7)}
            initial={"hidden"}
            whileInView={"show"}
            onClick={setPreviewAndOpacity}
          >
            <AiOutlineCloseCircle />
          </motion.div>
          <img src={previewBackGround[0].pageName} alt={`${""}`} />
          <div className="navigateTemplate"><button onClick={() => { setPrev(previewBackGround[0]) }}>Prev</button><button onClick={() => { setNext(previewBackGround[0]) }}>Next</button></div>
        </div>
      )}
    </ContentPreview>
  );
}

export default SiteMiddleDisplay;

const ContentPreview = styled.div`
.navigateTemplate{
  width:100% !important;
  display:flex; 
  margin-top: 1em; 
  gap:1em;
  justify-content:center;
}
  .centerDiv {
    margin: 0 auto;
    z-index: 200;
    top: 22%;
    left: 28%;
    width: 80em;
    height: 45em;
    margin-top: -9em;
    margin-left: -15em;

    position: fixed;
    // border: 1px solid white;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
    .close {
      position: absolute;
      right: 0;
      top: 7rem;
      color: red;
      font-size: 2.5rem;
      font-weight: bold;
      background-color: #212529;
      width: 6rem;
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
      :hover {
        cursor: pointer;
        opacity: 0.5 !important;
      }

      > * {
        position: relative;
        color: white;
        top: -0.5rem;
      }
    }
  }
`;
