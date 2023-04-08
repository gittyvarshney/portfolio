import React from 'react'
import { FinvolvDiv, InternDiv, WrapperDiv, MMTDiv } from './styles';

const WorkingExp = () => {

    return (
      <WrapperDiv id="section-2">
        {/* <div class="custom-shape">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div> */}
        <h1 class="main-heading"> Working Experience </h1>
        <InternDiv>
          <div className="intro-internship">
            <div className="heading">
              Intership at Kuliza Technologies
              <p>Feb, 21 - Jul, 21</p>
            </div>
            <div className="body">
              My first experience as a Developer started as an intern, During
              the starting of training I learned how to create Databases, Rest
              Api's and integrate it into the core product. After some time I
              onboarded into the LendIn team to work as a frontEnd Developer in
              Portals based on React Framework, After getting hold of codebase I
              started solving Jira issues and new UI requirements
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
              Currenlty Working on FrontEnd Side of Portals, Handling core
              responsibilites which includes Implementing new UI
              Functionalities, product requirements, working on feedback,
              solving support issues &amp; developing responsive behaviours.
              Working Extensively on ReactJs, Redux, Saga, CSS (Styled
              Components)
              <p>Click on Finvolv to visit </p>
            </div>
          </div>
        </FinvolvDiv>
        <MMTDiv>
          <div className="intro-finvolv">
            <div className="heading">
              Software Engineer at GO-MMT
              <p>Aug, 22 - Current</p>
            </div>
            <div className="body">
              Currently Working for Mojo (Post-sales) Frontend for both
              <b> MakeMyTrip & Go-Ibibo</b> Brands, Handling core responsibilites for
              development of Desktop Web App (React) as well as Mobile
              Application (React-Native), developed various UI features for
              flights, hotels as well as ground transports of which some major
              contributions are langugage localization, writing flights
              cancellatoin flow from scratch, making application consistent with
              DGCA guidelines &amp; last-minute cancellation support
            </div>
          </div>
          <div className="image-div">
            <div className="working-man">
              <img src={process.env.PUBLIC_URL + "/images/go_mmt.png"} />
            </div>
          </div>
        </MMTDiv>
      </WrapperDiv>
    );
}

export default WorkingExp;
