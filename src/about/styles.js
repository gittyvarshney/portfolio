import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
  0%{

  }25%{
    transform: rotate(-3deg);
  }50%{
    transform: rotate(0deg);
  }75%{
    transform: rotate(3deg);
  }100%{
    transform: rotate(0deg);
  }
`;

export const AboutDiv = styled.div`

display: flex;
/* height: 70%; */
width: 100%;
background: linear-gradient(to right, #d3dbf5, #b7c4e4, #9aaed4, #7c99c3, #5b85b3);
/* background-color: #D3DBF5; */
justify-content: space-between;
flex-wrap: wrap;
padding-bottom: 50px;
position: relative;

    .custom-shape{
        /* background-color: #D3DBF5; */
        width: 100%;
        fill: #F6F8FF;
        line-height: 0;

        svg {
          position: relative;
          display: block;
          width: 100%;
          height: 50px;
          }

          &.bottom{
            position: absolute;
            bottom: 0;
            fill: rgb(244, 246, 255);
            /* transform: translateY(100%); */
          }

    }

    .avatar{
        position: relative;
        margin-top: 18%;
        width: max(50%,300px);
        align-self: center;
        .white-circle{
            left: 50%;
            bottom: 4px;
            transform: translateX(-50%);
            border-top-left-radius: 100%;
            border-top-right-radius: 100%;
            border-bottom-left-radius: 30%;
            border-bottom-right-radius: 30%;
            position: absolute;
            width: 90%;
            height: 150%;
            background-color: #F6F8FF;
            box-shadow: 1px 0px 29px -2px rgba(59,71,88,1);
        }
        .avatar-body{
            position: relative;
            .avatar-head{
                position: absolute;
                transform-origin: bottom;
                transform: translateY(-90%);
                img{
                    transform-origin: bottom;
                    animation: ${rotate} 5s linear infinite;
                    width: 100%;
                }
            }

            img{
                width: 100%;
            }
        }
    }

    .intro-bio{
        /* margin-top: 5%; */
        align-self: center;
        margin-right: 5%;
        width: 40%;
        .heading{
          font-family: 'Courgette';
          font-size: clamp(1.2rem,2vw,2rem);
        }
        .body{
          color: rgb(41 40 73 / 88%);
          margin-top: 12px;
          font-family: 'Charm';
          font-size: clamp(0.9rem,1.8vw,1.8rem);
        }
    }

    @media (max-width: 576px){
      justify-content: center;
      height: auto;
        .intro-bio{
          margin-top: 15px;
          margin-bottom: 15px;
          width: 80%;
        }
    }

`