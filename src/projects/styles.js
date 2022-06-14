import styled from 'styled-components'


const backgroundColor = 'linear-gradient(to bottom, #91bbe4, #8fb8e0, #8cb5dd, #8ab3d9, #88b0d6, #81aad2, #7aa3ce, #749dca, #6990c4, #6084bd, #5877b6, #536aae)'

export const WrapperDiv = styled.div`
    /* height: 100%; */
    background: ${backgroundColor};
    /* background-color: ${backgroundColor}; */

    .custom-shape{
        width: 100%;
        fill: rgb(241,243,255);
        line-height: 0;

        svg {
        position: relative;
        display: block;
        width: 100%;
        height: 150px;
        }

    }
    
    .main-heading{
        color: rgb(27 43 59);
        text-align: center;
        font-size: clamp(1.4rem,2.4vw,2.4rem);
        font-family: 'MeriendaOne';
        margin:0;
        padding-bottom: 15px;
    }

    .project-tiles{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        .project{
            width: 50%;
            text-align: center;
            padding-block: 15px;
            img{
                cursor: pointer;
                width: 50%;
                &:hover{
                    opacity: 0.8;
                }
            }
            .info{
                text-align: center;
                font-size: clamp(0.8rem,1.5vw,1.5rem);
                h2{
                    margin: 0.5em 0 0.5em 0;
                    color: rgb(48 72 99);
                    font-family: 'Lily';
                }
                p{
                    margin: 0.5em 0 0.5em 0;
                    font-family: 'McLaren';
                    color: rgb(73 74 109);
                }
            }
        }

    }

    .more-projects{
        text-align:  center;

        a{
            display: inline-block;
            width: 5%;
            min-width: 40px; 
            img{
                width: 100%;
            }

            &:hover{
                border-radius: 100%;
                box-shadow: 0px 0px 24px 4px rgba(0,0,0,0.75);
            }
        }
        p{
            margin: 0.5em 0 0 0;
            font-size: clamp(0.8rem,1.8vw,1.8rem);
            font-family: 'McLaren';
            color: rgb(20 13 56 / 93%);
        }
    }
`

export const Modal = styled.div`
            z-index: 11;
            position: fixed;
            top: 0;
            left: 0;
            width: ${ props => props.isVisible ? '100%' : 0};
            height: ${ props => props.isVisible ? '100%' : 0};
            background-color: rgba(0,0,0,0.4);

            .modal-container{
                position: fixed;
                top: 50%;
                left: 50%;
                width: 70%;
                height: 60%;
                /* background-color: #F6F8FF; */
                /* border-radius: 20px; */
                padding: 20px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                gap: 3%;
                background: rgb(28 32 45 / 60%);
                box-shadow: 0 8px 32px 0 rgb(28 32 45 / 60%);
                backdrop-filter: blur( 2px );
                border-radius: 15px;
                border-top-right-radius: 0;
                border: 1px solid rgba( 255, 255, 255, 0.18 );
                visibility: hidden;
                transform: translate(-50%,-50%) scale(0); 
                opacity: 0; 
                transition: all .5s ease-in-out;
                .close{
                    cursor: pointer;
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    width: 40px;
                    height: 40px;
                    background-color: rgb(92 59 59);
                    border-bottom-left-radius: 100%;
                }

                .image{
                    width: 60%;
                    min-width: 230px;
                    margin-inline: auto;
                    img{
                        box-shadow: -3px 2px 21px 6px rgba(213,210,216,1);
                        border-radius: 20px;
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                    }
                }

                .info{
                    margin-inline: auto;
                    width: 37%;
                    min-width: 200px;
                    /* text-align: center; */
                    h1{
                        color: rgb(229 229 229 / 78%);
                        font-family: 'Paprika';
                        font-size: clamp(1rem,2.0vw,2.0rem);
                    }
                    h2{
                        color: rgb(198 197 208 / 71%);
                        font-family: 'Buda';
                        font-size: clamp(0.8rem,1.8vw,1.8rem);
                    }
                    p{
                        color: rgb(255 255 255 / 68%);
                        font-family: 'Delius';
                        font-size: clamp(0.7rem,1.4vw,1.5rem);
                    }
                    button{
                        box-shadow: -3px 5px 29px 7px rgb(138,145,154);
                        width: 60%;
                        display: flex;
                        padding: 5px;
                        align-items: center;
                        justify-content: center;
                        border-radius: 5px;
                        border-width: 0px;
                        background-color: rgb(138 145 154 / 82%);
                        cursor: pointer;
                        img{
                            width: 25px;
                        }
                        p{
                            font-family: 'McLaren';
                            font-size: clamp(0.6rem,1.4vw,1.4rem);
                            padding-left: 5px;
                            margin: 0;
                        }
                    }
                }
                
            }
            .modal-container.visible{
                visibility: visible; //
                opacity: 1;
                transform: translate(-50%,-50%) scale(1);
            }

`