import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import styled from "styled-components";
import { Link } from "react-scroll";

function Navigation() {
  return (
    <NavContainer className="container">
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
          <Link to="contact" activeClass="active" smooth={true} spy={true}>
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </NavContainer>
  );
}

export default Navigation;
const NavContainer = styled.div`
  z-index: 30 !important;
  bottom: 4rem;
  position: fixed;

  .nav-flex-container {
    display: flex;
    background-color: transparent;
    justify-content: center;
    padding: 1rem;
    gap: 2rem;

    .content {
      display: flex;
      color: blue;
      padding: 0 16rem;
      gap: 3rem;
      font-size: 30px;
      .active {
        color: red;
      }
    }
  }
`;
