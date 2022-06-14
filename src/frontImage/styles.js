import styled, {keyframes} from 'styled-components';


export const MainDiv = styled.div`
padding-top: 20px;
height: 50%;
background-color: #F6F8FF ;
/* justify-content: space-between; */
display: flex;
flex-wrap: wrap;
justify-content: space-between;

.desktop-frame{
    position: relative;
    z-index: 3;
    flex-shrink: 0;
    padding-top: 50px;
    min-width: 200px;
    width: 30%;
    img{
        display: inline-block;
        width: 100%;
    }
    
    .desktop-type{
      color: #444655;
      font-family: 'Rubik';
      text-align: center;
      font-size: max(1.8vw,14px);
      position: absolute;
      width: 90%;
      top: 15%;
      left: 4%;
    }

    @media (max-width: 576px){
      .desktop-type{
        top: 16%;
      }
    }
}

.decorate-image{
  /* padding-inline: 20px; */
  width: 30%;
  align-self: center;
      img{
        transform: rotate(-25deg);
        width: 80%;
      }
    &.last{
      align-self: flex-start;
    }
    }

    @media (max-width: 576px){
      justify-content: space-around;
      height: 40%;
      .desktop-frame{
        padding-bottom: 10px;
        .desktop-type{
          top: 20%;
        }
      }
      .decorate-image{
        display: none;
      }
    }
`;