import React from "react";
import { WrapperDiv } from "./styles";

const Contact = () => {

    return(
        <WrapperDiv id='section-5'>
            <div class="custom-shape">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class='main-heading'>
                Contact
            </div>
            <div class='contact'>
                <div class='info-container'>
                    <div class='info'>
                        <img src={process.env.PUBLIC_URL + '/images/gmail.png'}  />
                        <p> pv66645@gmail.com </p>
                    </div>
                    <div class='info'>
                        <img src={process.env.PUBLIC_URL + '/images/phone.png'}  />
                        <p> 9870757891 </p>
                    </div>
                    <div class='info'>
                        <a href={`https://www.linkedin.com/in/pranjul-v-9578b885/`} target="_blank" rel="noreferrer noopener"><img src={process.env.PUBLIC_URL + '/images/linkedin.png'}  /></a>
                        <p> pranjul-v-9578b885 </p>
                    </div>
                </div>
                <div class='info-container image'>
                    <img src={process.env.PUBLIC_URL + '/images/contact_me.png'} />
                </div>
            </div>
        </WrapperDiv>
    )
}

export default Contact;