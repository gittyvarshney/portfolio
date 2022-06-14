import React from 'react';
import Typewriter from 'typewriter-effect';
import { MainDiv } from './styles';

const FrontImage = () => {
    return(
        <MainDiv>
            <div class='decorate-image'>
                <img src={process.env.PUBLIC_URL + '/images/web_dev_is_cool.png'} />
            </div>
           <div className="desktop-frame">
                <img src={process.env.PUBLIC_URL + '/images/mac_book.png'}/>
                
                {/* <div className="react-logo">
                    <img src={process.env.PUBLIC_URL + '/images/react-logo.png'}/>
                </div> */}
                <div className="desktop-type">
                    <Typewriter
                        options={{
                            delay: 75,
                            cursor: '',
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString(`<p style={{marginTop: 0, marginBottom: '8px' }}> Hey, How Are You </p>`)
                            .pauseFor(1000)
                            typewriter.typeString(`<p style={{marginTop: 0, marginBottom: '8px' }}> I'm Honoured to see You </p>`)
                            typewriter.typeString(`<p style={{marginTop: 0, marginBottom: '8px' }}> On my Portfolio Page </p>`)
                            .deleteAll()
                            .start();
                        }}
                    />
                </div>
           </div>
           <div class='decorate-image last'>
                    <img src={process.env.PUBLIC_URL + '/images/forward_slash.png'} />
            </div>
        </MainDiv>
    )
}

export default FrontImage;