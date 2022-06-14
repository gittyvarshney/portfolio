import styled from 'styled-components';

const backgroundColor = 'rgba(102,119,188,0.7)';

export const MenuIcon = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
    width: 80px;
    height: 80px;
    padding: 10px;
    z-index: 10;

    label{
        cursor: pointer;
        position: absolute;
        inset: 0;
        margin: auto;
        display: inline-block;
        width: 37.5px;
        height: 5px;
        background-color: white;
        border-radius: 2px;
        transition: all 0.5s cubic-bezier(1,0,0,1);
        &::before,&::after{
            background-color: white;
            border-radius: 2px;
            position: absolute;
            content: '';
            left: 0;
            width: 37.5px;
            height: 5px;
            transition: all 0.6s cubic-bezier(1,0,0,1);
        }
        &::before{
            top: -12px;
            transform-origin: top left;
        }
        &::after{
            bottom: -12px;
            transform-origin: bottom left;
        }

        .toggle-background{
            position: absolute;
            top: 50%;
            left: 50%;
            width: 70px;
            height: 70px;
            background-color: ${(props) => props.isVisible ? 'transparent' : backgroundColor };
            transform: translate(-50%,-50%);
            border-radius: 100%;
            z-index: -1;
        }
    }

    #toggle:checked{
        &~label::before{
            left: 6px;
            background-color: red;
            transform: rotate(41deg);
        }
        &~label::after{
            left: 6px;
            background-color: red;
            transform: rotate(-41deg);
        }
        &~label{
            background-color: transparent;
        }
    }

`

export const Modal = styled.div`
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px;
    border-bottom-right-radius: 100%;
    background-color: ${backgroundColor};
    visibility: hidden;
    opacity: 0;
    transition: all .5s ease-in-out;
    width: 0px;
    height: 0px;
    box-shadow: 9px 6px 30px -4px rgba(121,128,156,0.74);
    backdrop-filter: blur( 0.5px );
    .menu-list{
        font-size: 1.5rem;
        padding-left: 30px;
        list-style-type: none;
        margin-top: 80px;
        li a{ 

            font-size: clamp(1.4rem,2.0vw,2.0rem);
            text-decoration: none;
            color: white;
            letter-spacing: 2px;
            font-family: 'Justmore';
            width: max-content;
            cursor: pointer;
            display: inline-block;
            margin-bottom: 10px;
        }
    }

    &.visible{
        visibility: visible;
        opacity: 1;
        width: 380px;
        height: 380px;
    }

    @media (max-width: 576px){

        &.visible{
            width: 300px;
            height: 300px;
        }

        .menu-list{
            li{
                a{
                    margin-bottom: 5px;
                }
            }
        }

        }

`