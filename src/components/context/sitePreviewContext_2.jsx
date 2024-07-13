import { createContext, useState } from "react";

import ecommerceHomePage from "../../assets/ecommerceSite2/home.png";
import ecommerceCollections from "../../assets/ecommerceSite2/shop.png";
import ecommerceCheckOutPage from "../../assets/ecommerceSite2/order_summary.png";
import ecommerceAuthentication from "../../assets/ecommerceSite2/signup.png";
import ReactImg from "../../assets/techstacks/reactImg.png";
import Redux from "../../assets/techstacks/redux.png";
import FireBaseimg from "../../assets/techstacks/firebase.png";
import HtmlJsCSS from "../../assets/techstacks/htmljscss.png";
import sassImg from "../../assets/techstacks/sassimg.png";

const setPreviousTemplate = (currentTemplate, availableTemplates) => {
  if (currentTemplate.id > 1) {
    return availableTemplates.filter(
      (availableTemplate) => availableTemplate.id === currentTemplate.id - 1
    );
  } else return [currentTemplate];
};

const setNextTemplate = (currentTemplate, availableTemplates) => {
  if (currentTemplate.id < 4) {
    return availableTemplates.filter(
      (availableTemplate) => availableTemplate.id === currentTemplate.id + 1
    );
  } else return [currentTemplate];
};

export const CreatePreviewContext_2 = createContext({
  isPreviewActive: false,
  setPreview: () => {},
  setPreviewAndBackGround: () => {},
  previewBackGround: "",
  opacity: 1,
  ecommerceSiteTemplate2: [],
  setEcommerceSiteTemplate: () => {},
  setPrev: () => {},
  setNext: () => {},
  SiteAsset2: {},
});

const siteAssets = {
  viewLiveSite: "https://programmingbymaleek.github.io/wimatechstore/",
  viewtechnologyUsed: {
    techDiscription: [
      "This e-commerce product website built with React, Redux, HTML, CSS, JavaScript, Firebase, and Tailwind CSS is a web application that allows users to browse, select, preview, and purchase products online. The website has a responsive design that adapts to different screen sizes and devices.",
      "The website's frontend is built with React, a JavaScript library for building user interfaces. The state management of the application is handled by Redux, a predictable state container for JavaScript apps. Tailwind CSS is used for styling, providing utility-first CSS classes that help in building responsive designs quickly.",
      "Firebase is used as the backend for the application, providing a real-time database and hosting for the website. Firebase authentication is used to manage user accounts, and Firebase storage is used to store product images.",
      "Stripe is integrated for handling payments, providing a secure and seamless checkout experience.",
      "Overall, this e-commerce product website built with these technologies provides a seamless user experience, from browsing and selecting products to previewing, purchasing, and tracking orders.",
    ],
    usedStack: [ReactImg, Redux, HtmlJsCSS, sassImg, FireBaseimg],
  },
  viewSourceCode: "https://github.com/programmingbymaleek/wimatechstore",
};

const EcommerceSite = [
  { id: 1, pageName: ecommerceHomePage },
  { id: 2, pageName: ecommerceCollections },
  { id: 3, pageName: ecommerceCheckOutPage },
  { id: 4, pageName: ecommerceAuthentication },
];

export const CreatePreviewProvider_2 = ({ children }) => {
  const [isPreviewActive, setPreviewStatus] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [previewBackGround, setPreviewAndBackGround] = useState([]);
  const [SiteAsset2] = useState(siteAssets);
  const [ecommerceSiteTemplate2] = useState(EcommerceSite);

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
      setPreviousTemplate(currentImageTemplate, ecommerceSiteTemplate2)
    );
  };
  const setNext = (currentImageTemplate) => {
    setPreviewAndBackGround(
      setNextTemplate(currentImageTemplate, ecommerceSiteTemplate2)
    );
  };
  const value = {
    isPreviewActive,
    previewBackGround,
    setPreview,
    setPreviewAndBackGround,
    setPreviewAndOpacity,
    opacity,
    ecommerceSiteTemplate2,
    setPrev,
    setNext,
    SiteAsset2,
  };

  return (
    <CreatePreviewContext_2.Provider value={value}>
      {children}
    </CreatePreviewContext_2.Provider>
  );
};
