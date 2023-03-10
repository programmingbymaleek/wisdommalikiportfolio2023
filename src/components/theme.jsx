import React from "react";
import ReactSwitch from "react-switch";
import { useContext } from "react";
import { ModeContext } from "./context/backgroundcontext";
import styled from "styled-components";

function Theme() {
  const { toogleFunc, mode } = useContext(ModeContext);
  return (
    <CustomThemeSwitch>
      <div className="container">
        <div className="me">
          {mode ? (
            <span className="mode">Light</span>
          ) : (
            <span className="mode">Dark</span>
          )}
          <ReactSwitch
            onChange={toogleFunc}
            checked={mode === false}
            offColor="#000000"
            onColor="#0000FF"
          />
        </div>
      </div>
    </CustomThemeSwitch>
  );
}

export default Theme;
const CustomThemeSwitch = styled.div`
  .mode {
    position: relative;
    top: -0.5rem;
    right: 0.5rem;
  }
  .container {
    position: relative;
    .me {
      position: fixed;
      right: 4rem;
    }
  }
`;
