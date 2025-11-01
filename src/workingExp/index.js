import React from 'react'
import { FinvolvDiv, InternDiv, WrapperDiv, MMTDiv, SumoDiv } from './styles';

const WorkingExp = () => {

    return (
      <WrapperDiv id="section-2">
        <h1 class="main-heading"> Working Experience </h1>
        <InternDiv>
          <div className="intro-internship">
            <div className="heading">
              Intership at Kuliza Technologies
              <p>Feb, 21 - Jul, 21</p>
            </div>
            <div className="body">
              My development journey began as a Software Developer Intern.
              During my initial training, I learned how to create databases,
              build REST APIs, and integrate them into the core product.
              Eventually, I was onboarded to the LendIn team as a Front-End
              Developer, working on portals built using the React framework.
              After becoming familiar with the codebase, I started contributing
              by resolving Jira issues and implementing new UI requirements.
              <p>Click on JS icon to see My college report </p>
            </div>
          </div>
          <div className="image-div">
            <div className="working-man">
              <a
                className="js-page"
                href={`https://drive.google.com/file/d/1EjMeV2mIcl0VoIKxVC2N4ErJBYxoOpWE/view?usp=sharing`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/javascript_page.png"}
                />
              </a>
              <img
                src={process.env.PUBLIC_URL + "/images/working_intern.png"}
              />
            </div>
          </div>
        </InternDiv>

        <FinvolvDiv>
          <div className="image-div">
            <div className="working-man">
              <a
                className="finvolv-png"
                href={`https://finvolv.ai/`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={process.env.PUBLIC_URL + "/images/finvolv_png.png"} />
              </a>
              <img src={process.env.PUBLIC_URL + "/images/finvolv.png"} />
            </div>
          </div>
          <div className="intro-finvolv">
            <div className="heading">
              Software Engineer at Finvolv
              <p>Aug, 21 - Aug,22</p>
            </div>
            <div className="body">
              I worked on the Front-End side of portals, <b>handling core
              responsibilities </b> such as implementing new UI functionalities,
              delivering product requirements, addressing feedback, resolving
              support issues, and ensuring responsive UI behavior. I worked
              extensively with React.js, Redux, Redux-Saga, and CSS (Styled
              Components).
              <p>Click on Finvolv to visit </p>
            </div>
          </div>
        </FinvolvDiv>
        <MMTDiv>
          <div className="intro-finvolv">
            <div className="heading">
              Software Engineer at MakeMyTrip
              <p>Aug, 22 - Dec, 23</p>
            </div>
            <div className="body">
              I worked on the Frontend side for both <b>MakeMyTrip</b> and{" "}
              <b>Goibibo</b> brands. I was also one of the{" "}
              <b>top contributors</b> as a developer &amp; was
              responsible for the development of the <b>Desktop Web Application</b>
              (React) as well as the <b>Mobile Application (React Native)</b>. I
              delivered multiple UI features across flights, hotels, and ground
              transport, with major contributions such as implementing language
              localization, building the complete flight cancellation flow from
              scratch, ensuring application alignment with DGCA guidelines, and
              supporting last-minute cancellation scenarios.
            </div>
          </div>
          <div className="image-div">
            <div className="working-man">
              <img src={process.env.PUBLIC_URL + "/images/go_mmt.png"} />
            </div>
            <div className="contributions">
              <img
                src={process.env.PUBLIC_URL + "/images/contributions_chart.png"}
              />
            </div>
          </div>
        </MMTDiv>
        <SumoDiv>
          <div className="image-div">
            <div className="working-man">
              <img src={process.env.PUBLIC_URL + "/images/sumologic.png"} />
            </div>
          </div>
          <div className="intro-finvolv">
            <div className="heading">
              Senior Software Engineer- 1 at Sumologic
              <p>Aug, 25 - Current</p>
            </div>
            <div className="heading">
              Software Engineer- 2 at Sumologic
              <p>Jan, 24 - Jul, 25</p>
            </div>
            <div className="body">
              I'm working as a <b>Core UI Developer</b> in the Collection team at Sumo
              Logic, focused on elevating front-end performance, usability, and
              overall developer experience. I contribute to integrating new
              features for <b>OpenTelemetry-based ingestion</b>, while also handling UI
              on-call duties, ensuring production deployment readiness, and
              collaborating closely with cross-geo Product and UX teams to drive
              timely resolution of UI-related escalation.
            </div>
          </div>
        </SumoDiv>
      </WrapperDiv>
    );
}

export default WorkingExp;
