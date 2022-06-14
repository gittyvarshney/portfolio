import styled from 'styled-components';

const backgroundColor = 'linear-gradient(to bottom, #d8f0ff, #a9d1f1, #80b1e4, #5e90d5, #466fc4)'

export const WrapperDiv = styled.div`

background-color: rgb(67,24,98);
width: 100%;

background: ${backgroundColor};

.custom-shape{
    background-color: ${backgroundColor};
    width: 100%;
    fill: #466fc4;
    line-height: 0;

    svg {
    position: relative;
    display: block;
    width: 100%;
    height: 100px;
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

.contact{
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    align-items: center;
    padding-inline: 40px;
    padding-bottom: 20px;
    width: 100%;
    .info-container{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        min-width: 200px;
        width: 40%;
        .info{
            display: flex;
            gap: 20px;
            align-items: center;
            &>img{
                min-width: 50px;
                width: 20%;
                
            }
            p{
                margin:0;
                font-size: clamp(1.0rem,2.0vw,2.0rem);
                font-family: 'Bellota';
            }
            a{
                cursor: pointer;
                display: inline-block;
                width: 20%;
                img{
                    width: 100%;
                }
                &:hover{
                    opacity: 0.8;
                }

            }
        }

        &.image{
            width: 50%;
        }
    }
}

@media (max-width: 576px){
      .contact{
        .info-container{
            &.image{
                width: 100%;
            }
        }
      }
    }

`