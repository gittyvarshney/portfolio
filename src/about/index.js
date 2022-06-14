import React from 'react'
import { AboutDiv } from './styles';

const About = () => {

    return(
        <AboutDiv id='section-1'>
            <div class="custom-shape">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className='avatar'>
                <div className='white-circle'></div>
                <div className='avatar-body'>
                    <div className='avatar-head'>
                    <img src={process.env.PUBLIC_URL + '/images/avatar_body_cropped_face.png'}/>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/images/avatar_body_cropped.png'}/>
                </div>
            </div>
            <div className='intro-bio'>
                <div className='heading'>
                Hi, My Name is Pranjul &amp; I'm a Web Developer Based in India
                </div>
                <div className='body'>
                I have been working as a web developer since the starting of 2021; 
                I started my career as a Software Developer Intern, from then I started admiring
                the frontEnd due to the awesomeness of modern Javascript &amp; increasing popularity
                of front-end frameworks, I've been into JS and React for quite a while &amp; slowly
                become delighted and less frustated as more FE tasks came along my way
                </div>
            </div>
            <div class="custom-shape bottom">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
        </AboutDiv>
    )
}

export default About;