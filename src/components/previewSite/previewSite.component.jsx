import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { CreatePreviewContext } from "../context/sitePreviewContext";

function PreviewSite({ SitePreview }) {
  const { setPreview } = useContext(CreatePreviewContext);
  return (
    <SitePreviewContainer className="container">
      <div className="preview_container">
        <div
          className="one grid-row-span-2 grid-col-span-2"
          onClick={() => {
            setPreview(true, SitePreview[0]);
          }}
        >
          <img src={SitePreview[0].pageName} alt="" />
        </div>
        <div
          className="two"
          onClick={() => {
            setPreview(true, SitePreview[1]);
          }}
        >
          <img src={SitePreview[1].pageName} alt="" />
        </div>
        <div
          className="three"
          onClick={() => {
            setPreview(true, SitePreview[2]);
          }}
        >
          <img src={SitePreview[2].pageName} alt="" />
        </div>
        <div
          className="four"
          onClick={() => {
            setPreview(true, SitePreview[3]);
          }}
        >
          <img src={SitePreview[3].pageName} alt="" />
        </div>
        <div
          className="five"
          onClick={() => {
            setPreview(true, SitePreview[0]);
          }}
        >
          <img src={SitePreview[0].pageName} alt="" />
        </div>
      </div>
    </SitePreviewContainer>
  );
}

export default PreviewSite;
const SitePreviewContainer = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: fit;
  }
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  .grid-row-span-2 {
    grid-row: span 2;
  }
  .grid-col-span-2 {
    grid-column: span 2;
  }
  .preview_container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    width: min(100%, 90rem);

    * {
      min-height: 15rem;
    }
  }
`;
