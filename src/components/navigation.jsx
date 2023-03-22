import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import styled from "styled-components";
import { Link } from "react-scroll";

function Navigation() {
  return (
    <NavContainer>
      <div className="nav-flex-container">
        <div className="content">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            <BiHomeAlt />
          </Link>

          <Link to="about" activeClass="active" smooth={true} spy={true}>
            <BiUser />
          </Link>
          <Link to="experience" activeClass="active" smooth={true} spy={true}>
            <BsBriefcase />
          </Link>
          <Link to="projects" activeClass="active" smooth={true} spy={true}>
            <BsClipboardData />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-150}
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </NavContainer>
  );
}

export default Navigation;
const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  margin-bottom: 8rem;

  z-index: 200 !important;

  .nav-flex-container {
    display: flex;
    background-color: transparent;
    justify-content: center;
    padding: 1rem;

    gap: 2rem;

    .content {
      display: flex;
      color: blue;
      padding: 1rem 4rem;
      border-radius: 2rem;
      gap: 3rem;
      font-size: 30px;
      background-color: rgba(255, 255, 255, 0.5);
      justify-content: space-evenly;
      max-width: 60rem;
      .active {
        color: red;
      }
    }
  }

  @media (max-width: 497px) {
    .nav-flex-container {
      padding: 0rem;
      gap: 1rem;
      font-size: 20px;
      .content {
        padding: 1rem !important;
        gap: 1rem !important;
      }
    }
  }
`;
