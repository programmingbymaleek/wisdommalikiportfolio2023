import "./App.scss";
import styled from "styled-components";
import Contactme from "./components/contactme";
import Home from "./components/home";
import Experiences from "./components/experiences";
import Banner from "./components/banner";
import Projects from "./components/projects";
import Navigation from "./components/navigation";
import Theme from "./components/theme";
import { useContext } from "react";
import { ModeContext } from "./components/context/backgroundcontext";
import Aboutme from "./components/aboutme";
import SiteMiddleDisplay from "./components/sitemiddleDisplay/siteMiddleDisplay";
import { CreatePreviewContext } from "./components/context/sitePreviewContext";

function App() {
  const { mode } = useContext(ModeContext);
  const { opacity } = useContext(CreatePreviewContext);
  const ModeChange = {
    dark: "dark",
    light: "light",
  };

  return (
    <div
      className={`App ${
        mode === true ? `${ModeChange.light}` : ModeChange.dark
      }`}
    >
      <div className="container">
        <div style={{ opacity: opacity }}>
          <Theme />
          <Home />
          <Banner />
          <Aboutme />
          <Experiences />
          <Projects />
          <Contactme />
          <Navigation />
        </div>
        <SiteMiddleDisplay />
      </div>
    </div>
  );
}

export default App;
