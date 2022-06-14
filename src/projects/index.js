import React, { useState } from 'react'
import { WrapperDiv, Modal } from './styles';


const Projects = () => {

    const [modalVisible, toggleModal] = useState(false);

    const [modalData, setModalData] = useState({
        img : '/images/cosmology_bg.png',
        heading: 'Cosmology Platform',
        stack: 'MERN',
        description: 'Providing understanding of our universe in a very easy and understandable manner, where people can learn and share their ideas and curiosity about this vast topic.',
        link: 'https://github.com/gittyvarshney/projectOne'})

    const projects_describe = {
        'project-1' : {
            img : '/images/cosmology_bg.png',
            heading: 'Cosmology Platform',
            stack: 'MERN',
            description: 'Providing understanding of our universe in a very easy and understandable manner, where people can learn and share their ideas and curiosity about this vast topic.',
            link: 'https://github.com/gittyvarshney/projectOne'
        },
        'project-2' : {
            img : '/images/redapt_bg.png',
            heading: 'Redapt',
            stack: 'PureJS+Springboot',
            description: 'creating a Social networking type platfrom without using any framework or UI library where users can create their profiles and share stuff about their daily life.',
            link: 'https://github.com/gittyvarshney/Redapt'
        },
        'project-3' : {
            img : '/images/flood_prediction_bg.png',
            heading: 'Flood Forecasting',
            stack: 'ML/Python/Geo',
            description: 'Involves Mining depth from Google earth of flood prone areas & taking into account the climate factors, historical rainfall to predict future outcomes.',
            link: 'https://github.com/gittyvarshney/Flood-Prediction'
        },
        'project-4' : {
            img : '/images/cmd_shopping_bg_2.png',
            heading: 'CMD Shopping',
            stack: 'Alog/DS',
            description: 'Simulating shopping in command prompt by using C/C++ and notepad, features involved reading inventory, cart management, sorting & billing',
            link: 'https://github.com/gittyvarshney/CPP-Project-Shopping-Program-'
        }
    }

    const projectClickHandler = (e) => {
        console.log("image just clicked: ", e.target);
        if(e?.target?.id && Object.keys(projects_describe).includes(e.target.id)){
            const { img, heading, stack, description, link } = projects_describe[e.target.id];
            console.log("img is: ", img, " heading is: ", heading);
            setModalData({ img: img, heading: heading, stack: stack, description: description, link: link})
            toggleModal(true);
        }

    }

    const openRepo = (e) => {
        window.open(modalData.link);
    }


    return(
        <>
        <Modal isVisible={modalVisible} onClick={() => {toggleModal(false)}} >
            <div className={`modal-container${modalVisible ? " visible" : ""}`} onClick={(e) => e.stopPropagation()}>
                <div class='close' onClick={() => {toggleModal(false)}}></div>
                <div class='image'>
                    <img src={process.env.PUBLIC_URL + modalData.img} />
                </div>
                <div class='info'>
                    <h1> {modalData.heading} </h1>
                    <h2> {modalData.stack} </h2>
                    <p> {modalData.description} </p>
                    <button type='button' onClick={openRepo}>
                    <img src={process.env.PUBLIC_URL + '/images/github.png'} />
                    <p> Git Repo</p>
                    </button>
                </div>
            </div>
        </Modal>
        <WrapperDiv id='section-3'>
            <div class="custom-shape">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class='main-heading'>
                Projects
            </div>
            <div class='project-tiles' onClick={projectClickHandler}>
                <div class='project'>
                    <img src={process.env.PUBLIC_URL + '/images/project_pages/cosmology.png'} id='project-1' />
                    <div class='info'>
                        <h2> Cosmology Platform</h2>
                        <p>MERN Based</p>
                    </div>
                </div>
                <div class='project'>
                    <img src={process.env.PUBLIC_URL + '/images/project_pages/redapt.png'} id='project-2' />
                    <div class='info'>
                        <h2>Redapt Social</h2>
                        <p>Pure JS + SpringBoot</p>
                    </div>
                </div>
                <div class='project' id='project-3'>
                    <img src={process.env.PUBLIC_URL + '/images/project_pages/flood_forecasting.png'} id='project-3' />
                    <div class='info'>
                        <h2>Flood Forecasting</h2>
                        <p>Python ML Based</p>
                    </div>
                </div>
                <div class='project' id='project-3'>
                    <img src={process.env.PUBLIC_URL + '/images/project_pages/cmd_shopping.png'} id='project-4' />
                    <div class='info'>
                        <h2>Terminal Based Shopping</h2>
                        <p>Algo DS C/C++</p>
                    </div>
                </div>
            </div>
            <div class='more-projects'>
                <a href={`https://github.com/gittyvarshney`} target="_blank" rel="noreferrer noopener"><img src={process.env.PUBLIC_URL + '/images/github.png'}/></a>
                <p> &amp; Many More.., Browse my GitHub </p>
            </div>
        </WrapperDiv>
        </>
    )
}

export default Projects;