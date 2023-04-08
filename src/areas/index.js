import React from 'react';
import { WrapperDiv } from './styles';

const  Areas = () => {


    return(
        <WrapperDiv  id='section-4'>
            <div class="custom-shape">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
                </svg>
            </div>
            <div class='main-heading'>
                Areas
            </div>
            {/* <div>JS</div> */}
            <div class='cards-layout'>
                <div class='card'>
                    <div class='card-content'>
                        <img src={process.env.PUBLIC_URL + '/images/cover_images/js_background.jpg'} />
                        <div class='card-front'>
                            <h3 class='card-title'>
                                Javascript
                            </h3>
                            <p class='card-subtitle'> 
                                Intermediate
                            </p>
                        </div>
                        <div class='card-back'>
                            <p class='card-body'>
                                Been into JS since College time &amp; having almost a year
                                of industrial experience, I found myself quite confident
                                working with it.  
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div>React</div> */}
                <div class='card'>
                    <div class='card-content clockwise'>
                        <img src={process.env.PUBLIC_URL + '/images/cover_images/React_JS.jpg'} />
                        <div class='card-front'>
                            <h3 class='card-title'>
                                React
                            </h3>
                            <p class='card-subtitle'> 
                                Intermediate
                            </p>
                        </div>
                        <div class='card-back'>
                            <p class='card-body'>
                                Got a Taste of ReactJS during college since then loved
                                building UI's with it and solved a wide range of
                                industry-grade problems in react. Along with ReactJS also
                                worked in <b>Redux</b>, <b>Saga</b> &amp; <b>Antd</b> 
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div>CSS</div> */}
                <div class='card'>
                    <div class='card-content'>
                        <img src={process.env.PUBLIC_URL + '/images/cover_images/css_background.jpg'} />
                        <div class='card-front'>
                            <h3 class='card-title'>
                                CSS
                            </h3>
                            <p class='card-subtitle'> 
                                Intermediate
                            </p>
                        </div>
                        <div class='card-back'>
                            <p class='card-body'>
                                Since it is an integral part of UI design, the same story also applies to CSS.
                                I also worked with libraries to style ReactJS like <b>styled-components</b> &amp; had 
                                solved various industry-related UI issues
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div>AndroidDevelopment</div> */}
                <div class='card'>
                    <div class='card-content clockwise'>
                        <img src={process.env.PUBLIC_URL + '/images/cover_images/mobile_background.jpg'} />
                        <div class='card-front'>
                            <h3 class='card-title'>
                                Mobile Development React-Native
                            </h3>
                            <p class='card-subtitle'> 
                                Intermediate
                            </p>
                        </div>
                        <div class='card-back'>
                            <p class='card-body'>
                            Started mobile Development with Java and switched to <b>React Native</b>, Developed various cross-platform
                            features (Android/IOS) for both <b>MakeMyTrip & Go-Ibibo.</b>
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div>BackEnd Development</div> */}
                <div class='card'>
                    <div class='card-content'>
                        <img src={process.env.PUBLIC_URL + '/images/cover_images/be_background.jpg'} />
                        <div class='card-front'>
                            <h3 class='card-title'>
                                BackEnd Development
                            </h3>
                            <p class='card-subtitle'> 
                                Beginner
                            </p>
                        </div>
                        <div class='card-back'>
                            <p class='card-body'>
                            As a web developer, I didn't have that much but quite a good understanding when it
                            comes to developing a Backend; I had worked with <b>Springboot</b>, <b>ExpressJS</b> based Backend
                            framework, and also handled databases related to <b>MongoDB</b> and <b>Postgres</b> 
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div>BackEnd Development</div> */}
                <div class='card'>
                    <div class='card-content clockwise'>
                        <img src={process.env.PUBLIC_URL + '/images/cover_images/cp_background.png'} />
                        <div class='card-front' >
                            <h3 class='card-title'>
                                DS, Algo &amp; P.S.
                            </h3>
                            <p class='card-subtitle'> 
                                Try Me out
                            </p>
                        </div>
                        <div class='card-back' >
                            <div class='card-body algo'>
                            I've been into Alorithm &amp; DataStructures for a long time, I loved solving problems
                            on various competetive platforms since then I improved a lot and progressing
                            <p> check my profiles</p>
                            <a href={`https://leetcode.com/BlackPeacock/`} target="_blank" rel="noreferrer noopener"><img src={process.env.PUBLIC_URL + '/images/leetcode.png'} /></a>
                            <a href={`https://codeforces.com/profile/BlackPeacock`} target="_blank" rel="noreferrer noopener"><img style={{marginLeft: '10px'}}src={process.env.PUBLIC_URL + '/images/codeforces.svg'} /></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WrapperDiv>
    )
}

export default Areas;