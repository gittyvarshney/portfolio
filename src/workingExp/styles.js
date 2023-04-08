import styled from 'styled-components';


export const WrapperDiv = styled.div`

    height: auto;
    .custom-shape{
            /* position: absolute;
            top: 0;
            left: 0; */
            background-color: rgb(244, 246, 255);
            width: 100%;
            fill: #D3DBF5;
            line-height: 0;

            svg {
            position: relative;
            display: block;
            width: 100%;
            height: 50px;
            }

        }

    .main-heading{
        color: rgb(46 67 88);
        text-align: center;
        font-size: clamp(1.4rem,2.4vw,2.4rem);
        font-family: 'MeriendaOne';
        background-color: rgb(244,246,255);
        margin:0;
        padding-bottom: 15px;
    }
`


export const InternDiv = styled.div`
    background-color: rgb(244, 246, 255);
    width: 100%;
    /* height: 70%; */
    position: relative;
    display: flex;
    align-items: center;
    padding-inline: 5%;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    padding-bottom: 30px;
    
    .intro-internship{
        /* margin-top: 5%; */
        align-self: center;
        margin-right: 5%;
        width: 45%;
        color: #6d6181;
        .heading{
            font-family: 'Courgette';
            font-size: clamp(1.2rem,2vw,2rem);
            p{
                font-size: clamp(1rem,1.6vw,1.8rem);
                margin-block: 10px;
            }
        }
        .body{
            margin-top: 12px;
            font-family: 'Charm';
            font-size: clamp(0.9rem,1.8vw,1.5rem);
            p{
                font-size: clamp(0.6rem,1.4vw,1.6rem);
                margin-block: 5px;
            }
        }
    }

    .image-div{
        z-index: 3;
        width: 40%;
        .working-man{
            position: relative;
            .js-page{
                cursor: pointer;
                position: absolute;
                display: inline-block;
                width: 20%;
                top: 60%;
                left: 10%;
                img{
                    width: 100%;
                }
                &:hover{
                    opacity: 0.8;
                }
            }
            img{
                width: 100%;
                height: 30%;
            }
        }
    }

    @media (max-width: 576px){
      justify-content: center;
      height: auto;
        .intro-internship{
          margin-top: 15px;
          margin-bottom: 15px;
          width: 80%;
        }
    }

`

export const FinvolvDiv = styled.div`
    background-color: #C9BFEC;
    width: 100%;
    height: 70%;
    position: relative;
    display: flex;
    align-items: center;
    padding-top: 30px;
    padding-inline: 5%;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: rgb(241, 243, 255);
    .image-div{
        z-index: 3;
        width: max(45%,280px);
        .working-man{
            position: relative;
            .finvolv-png{
                cursor: pointer;
                display: inline-block;
                position: absolute;
                width: 20%;
                top: -5%;
                left: 50%;
                transform: translate(-50%,-30%);
                img{
                    width: 100%;
                }
                &:hover{
                    opacity: 0.4;
                    border-radius: 100%;
                    background-color: #41afa5;
                }
            }
            img{
                width: 100%;
                height: 30%;
            }
        }
    }

    .intro-finvolv{
        /* margin-top: 5%; */
        align-self: center;
        /* margin-right: 5%; */
        width: 45%;
        color: #6d6181;
        .heading{
            font-family: 'Courgette';
            font-size: clamp(1.2rem,2vw,2rem);
            p{
                font-size: clamp(1rem,1.6vw,1.8rem);
                margin-block: 10px;
            }
        }
        .body{
            margin-top: 12px;
            font-family: 'Charm';
            font-size: clamp(0.9rem,1.8vw,1.5rem);
            p{
                font-size: clamp(0.6rem,1.4vw,1.6rem);
                margin-block: 5px;
            }
        }
    }

    @media (max-width: 576px){
      justify-content: center;
      height: auto;
      .image-div{
          margin-top: 10px;
        }
        .intro-finvolv{
          margin-top: 15px;
          margin-bottom: 15px;
          width: 80%;
        }
    }

`

export const MMTDiv = styled.div`
    width: 100%;
    height: 70%;
    position: relative;
    display: flex;
    align-items: center;
    padding-top: 30px;
    padding-inline: 5%;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    background-color: #edf0ff;
    .image-div{
        z-index: 3;
        width: max(45%,280px);
        .working-man{
            display: flex;
            justify-content: center;
            img{
                border-radius: 81% 19% 81% 19% / 20% 81% 19% 80%;
                width: 80%;
                height: 30%;
            }
        }
    }

    .intro-finvolv{
        align-self: center;
        width: 45%;
        color: #6d6181;
        .heading{
            font-family: 'Courgette';
            font-size: clamp(1.2rem,2vw,2rem);
            p{
                font-size: clamp(1rem,1.6vw,1.8rem);
                margin-block: 10px;
            }
        }
        .body{
            margin-top: 12px;
            font-family: 'Charm';
            font-size: clamp(0.9rem,1.8vw,1.5rem);
            p{
                font-size: clamp(0.6rem,1.4vw,1.6rem);
                margin-block: 5px;
            }
        }
    }

    @media (max-width: 576px){
      justify-content: center;
      height: auto;
      .image-div{
          margin-top: 10px;
        }
        .intro-finvolv{
          margin-top: 15px;
          margin-bottom: 15px;
          width: 80%;
        }
    }

`