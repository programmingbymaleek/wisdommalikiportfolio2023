import { createContext, useState } from "react";

export const CreatePreviewContext = createContext({
  isPreviewActive: false,
  setPreview: () => {},
  setPreviewAndBackGround: () => {},
  previewBackGround: "",
  opacity: 1,
});

export const CreatePreviewProvider = ({ children }) => {
  const [isPreviewActive, setPreviewStatus] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [previewBackGround, setPreviewAndBackGround] = useState("");

  const setPreview = (bol, background) => {
    setPreviewStatus(bol);
    setPreviewAndBackGround(background);
    setOpacity(0.2);
  };
  const setPreviewAndOpacity = () => {
    setPreviewStatus(false);
    setOpacity(1);
  };
  const value = {
    isPreviewActive,
    previewBackGround,
    setPreview,
    setPreviewAndBackGround,
    setPreviewAndOpacity,
    opacity,
  };

  return (
    <CreatePreviewContext.Provider value={value}>
      {children}
    </CreatePreviewContext.Provider>
  );
};
