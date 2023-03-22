import { createContext, useState } from "react";

import movieMockUp1 from "../../assets/moviebasesite/moviemockup1.png";
import movieMockUp2 from "../../assets/moviebasesite/moviemockup2mobile.png";
import movieMockUp3 from "../../assets/moviebasesite/moviemockup3desktop.png";
import movieMockUp4 from "../../assets/moviebasesite/moviemockup4desktop2.png";
import ReactImg from "../../assets/techstacks/reactImg.png";
import HtmlJsCSS from "../../assets/techstacks/htmljscss.png";
import XMLIMG from "../../assets/techstacks/xmlpng.png";
import sassImg from "../../assets/techstacks/sassimg.png";

const setPreviousTemplate = (currentTemplate, avalibleTemplates) => {
  if (currentTemplate.id > 1) {
    return avalibleTemplates.filter(
      (avalibleTemplate) => avalibleTemplate.id === currentTemplate.id - 1
    );
  } else return [currentTemplate];
};

const setNextTemplate = (currentTemplate, avalibleTemplates) => {
  if (currentTemplate.id < 4) {
    return avalibleTemplates.filter(
      (avalibleTemplate) => avalibleTemplate.id === currentTemplate.id + 1
    );
  } else return [currentTemplate];
};

const siteAssets = {
  viewLiveSite: "https://programmingbymaleek.github.io/movieApplication/",
  viewtechnologyUsed: {
    techDiscription: [
      "A movie application created with React, HTML, CSS, SCSS, and API/XML that enables users to search for and view movie details, as well as manage their movie collections. The UI is responsive and visually appealing across devices.",
    ],
    usedStack: [ReactImg, HtmlJsCSS, sassImg, XMLIMG],
  },
  viewSourceCode: "https://github.com/programmingbymaleek/movieApplication",
};

export const CreatePreviewMovieContext = createContext({
  isPreviewActive: false,
  setPreview: () => {},
  setPreviewAndBackGround: () => {},
  previewBackGround: "",
  opacity: 1,
  movieBaseTemplate: [],
  setEccommerSiteTemplate: () => {},
  setPrev: () => {},
  setNext: () => {},
  SiteAssetM: {},
});

const MovieBaseSite = [
  { id: 1, pageName: movieMockUp1 },
  { id: 2, pageName: movieMockUp2 },
  { id: 3, pageName: movieMockUp3 },
  { id: 4, pageName: movieMockUp4 },
];

export const CreatePreviewMovieProvider = ({ children }) => {
  const [isPreviewActive, setPreviewStatus] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [previewBackGround, setPreviewAndBackGround] = useState([]);
  const [movieBaseTemplate] = useState(MovieBaseSite);
  const [SiteAssetM] = useState(siteAssets);

  const setPreview = (bol, background) => {
    setPreviewStatus(bol);
    setPreviewAndBackGround([background]);
    setOpacity(0.2);
  };
  const setPreviewAndOpacity = () => {
    setPreviewStatus(false);
    setOpacity(1);
  };
  const setPrev = (currentImageTemplate) => {
    setPreviewAndBackGround(
      setPreviousTemplate(currentImageTemplate, movieBaseTemplate)
    );
  };
  const setNext = (currentImageTemplate) => {
    setPreviewAndBackGround(
      setNextTemplate(currentImageTemplate, movieBaseTemplate)
    );
  };
  const value = {
    isPreviewActive,
    previewBackGround,
    setPreview,
    setPreviewAndBackGround,
    setPreviewAndOpacity,
    opacity,
    movieBaseTemplate,
    setPrev,
    setNext,
    SiteAssetM,
  };

  return (
    <CreatePreviewMovieContext.Provider value={value}>
      {children}
    </CreatePreviewMovieContext.Provider>
  );
};
