import { createContext, useState } from "react";

import eccomerceHomePage from "../../assets/ecommencesite/homePage.png";
import eccomercecCollections from "../../assets/ecommencesite/collections.png";
import eccomercecheckOutPage from "../../assets/ecommencesite/checkoutpage.png";
import eccomerceAuthentication from "../../assets/ecommencesite/authentication.png";
import ReactImg from "../../assets/techstacks/reactImg.png";
import Redux from "../../assets/techstacks/redux.png";
import FireBaseimg from "../../assets/techstacks/firebase.png";
import HtmlJsCSS from "../../assets/techstacks/htmljscss.png";
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

export const CreatePreviewContext = createContext({
  isPreviewActive: false,
  setPreview: () => {},
  setPreviewAndBackGround: () => {},
  previewBackGround: "",
  opacity: 1,
  eccommerceSiteTemplate: [],
  setEccommerSiteTemplate: () => {},
  setPrev: () => {},
  setNext: () => {},
  SiteAsset: {},
});

const siteAssets = {
  viewLiveSite: "https://programmingbymaleek.github.io/shopwithstyle/",
  viewtechnologyUsed: {
    techDiscription: [
      "This e-commerce shoe website built with React, Redux, HTML, CSS, JavaScript, and Firebase is a web application that allows users to browse, select, and purchase shoes online. The website has a responsive design that adapts to different screen sizes and devices.",
      "The website's frontend is built with React, a JavaScript library for building user interfaces. The state management of the application is been handled by Redux, a predictable state container for JavaScript apps.",
      "Firebase is used as the backend for the application, providing a real-time database and hosting for the website. Firebase authentication is used to manage user accounts, and Firebase storage is be used to store shoe images.",
      "Overall, this e-commerce shoe website built with these technologies provides a seamless user experience, from browsing and selecting shoes to purchasing and tracking orders.",
    ],
    usedStack: [ReactImg, Redux, HtmlJsCSS, sassImg, FireBaseimg],
  },
  viewSourceCode: "https://github.com/programmingbymaleek/shopwithstyle",
};

const Eccomercesite = [
  { id: 1, pageName: eccomerceHomePage },
  { id: 2, pageName: eccomercecCollections },
  { id: 3, pageName: eccomercecheckOutPage },
  { id: 4, pageName: eccomerceAuthentication },
];

export const CreatePreviewProvider = ({ children }) => {
  const [isPreviewActive, setPreviewStatus] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [previewBackGround, setPreviewAndBackGround] = useState([]);
  const [SiteAsset] = useState(siteAssets);
  const [eccommerceSiteTemplate] = useState(Eccomercesite);

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
      setPreviousTemplate(currentImageTemplate, eccommerceSiteTemplate)
    );
  };
  const setNext = (currentImageTemplate) => {
    setPreviewAndBackGround(
      setNextTemplate(currentImageTemplate, eccommerceSiteTemplate)
    );
  };
  const value = {
    isPreviewActive,
    previewBackGround,
    setPreview,
    setPreviewAndBackGround,
    setPreviewAndOpacity,
    opacity,
    eccommerceSiteTemplate,
    setPrev,
    setNext,
    SiteAsset,
  };

  return (
    <CreatePreviewContext.Provider value={value}>
      {children}
    </CreatePreviewContext.Provider>
  );
};
