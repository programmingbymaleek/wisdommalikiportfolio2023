import { createContext, useState } from "react";

import eccomerceHomePage from "../../assets/ecommencesite/homePage.png";
import eccomercecCollections from "../../assets/ecommencesite/collections.png";
import eccomercecheckOutPage from "../../assets/ecommencesite/checkoutpage.png";
import eccomerceAuthentication from "../../assets/ecommencesite/authentication.png";

const setPreviousTemplate = (currentTemplate, avalibleTemplates) => {
  if (currentTemplate.id > 1) {
    return avalibleTemplates.filter((avalibleTemplate) => avalibleTemplate.id === currentTemplate.id - 1)
  }
  else return [currentTemplate]

}

const setNextTemplate = (currentTemplate, avalibleTemplates) => {
  if (currentTemplate.id < 4) {
    return avalibleTemplates.filter((avalibleTemplate) => avalibleTemplate.id === currentTemplate.id + 1)
  }
  else return [currentTemplate]

}

export const CreatePreviewContext = createContext({
  isPreviewActive: false,
  setPreview: () => { },
  setPreviewAndBackGround: () => { },
  previewBackGround: "",
  opacity: 1,
  eccommerceSiteTemplate: [],
  setEccommerSiteTemplate: () => { },
  setPrev: () => { },
  setNext: () => { }
});

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
  const [eccommerceSiteTemplate] = useState(Eccomercesite)

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
    setPreviewAndBackGround(setPreviousTemplate(currentImageTemplate, eccommerceSiteTemplate))

  }
  const setNext = (currentImageTemplate) => {
    setPreviewAndBackGround(setNextTemplate(currentImageTemplate, eccommerceSiteTemplate))

  }
  const value = {
    isPreviewActive,
    previewBackGround,
    setPreview,
    setPreviewAndBackGround,
    setPreviewAndOpacity,
    opacity,
    eccommerceSiteTemplate,
    setPrev,
    setNext
  };

  return (
    <CreatePreviewContext.Provider value={value}>
      {children}
    </CreatePreviewContext.Provider>
  );
};
