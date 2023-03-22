import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { CreatePreviewContext } from "../context/sitePreviewContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { GrNext, GrPrevious } from "react-icons/gr";

function SiteMiddleDisplay() {
  const {
    isPreviewActive,
    previewBackGround,
    setPreviewAndOpacity,
    setNext,
    setPrev,
  } = useContext(CreatePreviewContext);
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
          <div className="navigateTemplate">
            <button
              onClick={() => {
                setPrev(previewBackGround[0]);
              }}
            >
              <GrPrevious />
            </button>
            <button
              onClick={() => {
                setNext(previewBackGround[0]);
              }}
            >
              <GrNext className="test" />
            </button>
          </div>
        </div>
      )}
    </ContentPreview>
  );
}

export default SiteMiddleDisplay;

const ContentPreview = styled.div`

  .navigateTemplate {
    width: 100% !important;
    display: flex;
    margin-top: 1em;
    gap: 1em;
    justify-content: center;
    button {
      padding: 0.5rem;
      background: transparent;
      border: none;
      color: white !important;
      font-size: 2rem;
    }
  }
  .centerDiv {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 20rem;
    height: 60rem;

    position: fixed;

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

  @media (max-width: 792px) {
    .centerDiv {
      min-width: 30rem;
      height: 30rem;
    }
  }
  @media (max-width: 1190px) {
    .centerDiv {
      min-width: 40rem;
      height: 40rem;
    }
    @media (max-width: 674px) {
      .centerDiv {
        min-width: 25rem;
        height: 25rem;
      }
      @media (max-width: 401px) {
        .centerDiv {
          min-width: 20rem;
          height: 20rem;
        }
`;
