import styled from 'styled-components';

const backgroundColor = 'linear-gradient(to bottom, #f1f3ff, #cad0f1, #a2aee2, #788ed3, #466fc4)'

export const WrapperDiv = styled.div`

    background: ${backgroundColor};
    /* height: 100%; */
    /* background-color: ${backgroundColor}; */
    padding-bottom: 20px;

    .custom-shape{
        background-color: #536aae;
        width: 100%;
        fill: #eaedfc;
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
        background-color: ${backgroundColor};
        margin:0;
        padding-bottom: 15px;
    }

    .cards-layout{
        display: flex;
        flex-wrap: wrap;
        gap: 5%;
        justify-content: center;
        align-items: center;
        margin: 0 20px 0 20px;
    }

    .card{
        margin-top: 25px;
        width: 25%;
        min-width: 250px;
    }

    .card-content{
        text-align: center;
        box-shadow: 0 5px 8px 0 rgba(0,0,0,0.25);
        position: relative;
        border-radius: 10px;
        transition: transform 3s;
        height: 350px;
        transform-style: preserve-3d;
        img{
            height: 100%;
            width: 100%;
            border-radius: 10px;
            object-fit: cover;
        }
    }

    .card-content:before{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        content: '';
        opacity: .3;
        background-color: #000;
        border-radius: 10px;
    }

    .card:hover .card-content{
        transform: rotateY(0.5turn);
    }

    .card:hover .card-content{
        &.clockwise{
            transform: rotateY(-0.5turn);
        }
    }

    .card-front,
    .card-back{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .card-title{
        margin-block: 0.4em;
        color: rgb(226 228 237);
        font-family: 'MeriendaOne';
        font-size: clamp(1.2rem,2.5vw,2.8rem);
        transform: translateZ(30px);
    }

    .card-subtitle{
        color: rgb(193 193 196);
        transform: translateZ(20px);
        font-family: 'Arial';
        font-size: clamp(1.0rem,2.0vw,2.2rem);
    }

    .card-subtitle::before{
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        content: '';
        right: 0;
        left: 0;
        top: -50%;
        height: 2px;
        width: 25%;
        background-color: white;
    }

    .card-back{
        border-radius: 10px;
        box-shadow: 0 5px 8px 0 rgba(0,0,0,0.25);
        transform: rotateY(0.5turn);
        background: #42275a;  
        background: -webkit-linear-gradient(to right, #734b6d, #42275a); 
        background: linear-gradient(to right, #734b6d, #42275a);
    }

    .card-body{
        font-family: 'Rubik';
        font-size: clamp(1.0rem,1.4vw,1.4rem);
        color: rgb(195 198 226);
        padding-inline: 15px;
        transform: translateZ(30px);
        a{
            transform: translateZ(20px);
            cursor: pointer;
            z-index: 10;
            display: inline-block;
            width: 50px;
            height: 50px;
            img{
                width: 100%;
                height: 100%;
            }
            &:hover{
                opacity: 0.8;
            }
        }
    }

    @media (max-width: 576px){
      justify-content: center;
      height: auto;

      .card{
        min-width: 200px;
            .card-content{
            height: 300px;
            }
        }
    }


`