import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Experiences() {
  return (
    <ExperienceContainer>
      <div id="experience" className="experience">
        <div className="d-flex justify-content-center my-5 ">
          <h1 className="exp">Experience</h1>
        </div>
        <div className="container experience-wrapper">
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial={"hidden"}
              whileInView={"show"}
              className="timeline-content"
            >
              <h3 className="date" style={{ textAlign: "center" }}>
                2018-2019
              </h3>
              <h4 className="header">Database Administrator Internship</h4>
              <h4 className="header">Nigerian Television Authority</h4>
              <ul>
                <li>
                  Tested and modified databases to determine and correct issues.
                </li>
                <li>
                  Partnered with project management teams on development of
                  scope and timelines.
                </li>
                <li>
                  Specified user access levels for each database segment to
                  protect database integrity and company information.
                </li>
              </ul>
            </motion.div>
          </div>
          {/*  */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <motion.div
              variants={fadeIn("down", 0.7)}
              initial={"hidden"}
              whileInView={"show"}
              className="timeline-content"
            >
              <h3 className="date" style={{ textAlign: "center" }}>
                2020-2021
              </h3>
              <h4 className="header">Elite Line Services {`(ELS)`}</h4>
              <h4 className="header">Software Engineer(Front-End) Contract </h4>
              <ul>
                <li>Designed web applications for multiple clients.</li>
                <li>
                  Designed visual and graphic images to use on multiple
                  platforms.
                </li>
                <li>
                  Reviewed project specifications and devised solutions for use
                  across multiple websites
                </li>
                <li>
                  Created web materials such as images and redirect links for
                  use in marketing.
                </li>
                <li>
                  Reviewed information and elements regularly on websites and
                  pages for accuracy and functionality.
                </li>
                <li>
                  Established hosting for each website and completed go-live
                  process by uploading sites to host account.
                </li>
                <li>
                  Coordinated system installations, testing and code corrections
                </li>
                <li>
                  Delivered end-user training on content management systems
                  allowing staff to make easy updates and maintenance to website
                  without developer assistance.
                </li>
                <li>
                  Contributed back-end development experience and collaborated
                  on multiple APIs crucial to functionality.
                </li>
                <li>
                  Developed and altered applications to meet changing market
                  trends and individual customer demands
                </li>
                <li>
                  Identified opportunities for process improvements to decrease
                  in support calls
                </li>
                <li>
                  Analyze, design, develop, as well as implement RESTful
                  services and APIs
                </li>
                <li>
                  Modify existing programs, prepare test data and functional
                  specifications.
                </li>
                <li>
                  Implement common APIs based on architecture guidelines and
                  frameworks
                </li>
              </ul>
            </motion.div>
          </div>
          {/*  */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial={"hidden"}
              whileInView={"show"}
              className="timeline-content"
            >
              <h3 className="date" style={{ textAlign: "center" }}>
                2021-Current
              </h3>
              <h4 className="header">Henry Schein One</h4>
              <h4 className="header">
                Software Developer {`(Front End Engineer)`}
              </h4>
              <ul>
                <li>
                  Developed user interface using HTML,CSS,Sass, Jquery and
                  React.
                </li>
                <li>Developed dynamic and cross-browser compatible pages</li>
                <li>
                  Developed CSS styles to maintain the uniformity of all screens
                  throughout the applications.{" "}
                </li>
                <li>
                  Integrated most application with various APIs/web Services to
                  send/fetch data and populate on the pages developed.{" "}
                </li>
                <li>
                  {" "}
                  Maintain websites and applications, Including content updates,
                  account administration, debugging, feature enhancements and
                  documentations.
                </li>

                <li>
                  Support regular maintenance of websites and daily updates of
                  web pages.{" "}
                </li>
                <li>
                  Responsible for maintaining existing code and functionality
                  during assimilation of ongoing operations of web services.
                </li>
                <li>
                  Designed and Implemented web application along with 3rd party
                  software for both payment processes and authentications{" "}
                </li>

                <li>
                  Created non-technical descriptions of operations and work flow
                  to enable non-coding team to function with minimal
                  interaction.{" "}
                </li>
                <li>
                  Wrote user manuals and other documentation for roll-out in
                  customer training sessions.
                </li>
                <li>
                  Some dev tools used daily for web development by me are:
                  Hubspot, Integrity, Adobe Acrobat, Photoshop, Virtual Studio,
                  Bitbucket, Git, Chrome, Firefox, Github and Source tree.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </ExperienceContainer>
  );
}

export default Experiences;

const ExperienceContainer = styled.div`
  .date {
    font-family: "Rubik Wet Paint", cursive;
    font-size: 2rem;
    color: white !important;
    margin-bottom: 1.5rem;
  }
  .exp {
    margin-top: 4rem;
    font-family: "Rubik Wet Paint", cursive;
    font-size: 3rem;
  }
  .header {
    font-size: 24px;
    font-family: "Shantell Sans", cursive;
  }
  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 1.2rem;
  }
  .experience-wrapper {
    position: relative;
    padding: 3.125rem 0;
    overflow: hidden;
  }
  .experience {
    padding: 0.7rem;
  }

  .experience-wrapper::before {
    position: absolute;
    content: "";
    top: 0;
    left: 50%;
    margin-left: -0.0625rem;
    width: 0.1253rem;
    height: 100%;
    background-color: gray;
    z-index: 1;
  }

  .timeline-block {
    width: calc(50% + 0.5rem);
    display: flex;
    justify-content: space-between;
    clear: both;
  }
  .timeline-block-right {
    float: right;
  }
  .timeline-block-left {
    float: left;
    direction: rtl;
  }
  .marker {
    width: 1rem;
    height: 1rem;

    border: 0.3125rem solid black;
    margin-top: 0.625rem;
    z-index: 3;
    background-color: #f8fcff;
  }

  .timeline-content {
    width: 95%;
    padding: 0 0.375rem;
    direction: ltr;
    h3 {
      margin-top: 0.3125rem;
      color: #212529;
      font-weight: 400;
    }
  }

  /***********************/
  @media (max-width: 768px) {
    .experience .container {
      padding-left: 0;
    }
    .experience-wrapper:before {
      left: 0.5rem;
      margin-bottom: 1.875rem;
    }
    .timeline-block-right {
      float: none;
      width: 100%;
    }

    .timeline-block-left {
      float: none;
      direction: ltr;
      width: 100%;
    }
  }
`;
