import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <HomeContainer>
      <div className="" id="home">
        {/* {logo} */}
        <div className="logo">
          <span>Wilmatech </span>
          <span> Enterprise</span>
        </div>
      </div>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  .logo {
    display: flex;
    flex-direction: column;
    span {
      text-transform: uppercase;
      font-size: 26px;
      font-family: "Genos", sans-serif;
      font-family: "Great Vibes", cursive;
      font-family: "Orbitron", sans-serif;
      font-family: "Roboto", sans-serif;
      font-family: "Silkscreen", cursive;
    }
  }
`;
