import styled, {keyframes} from 'styled-components'

const appear = keyframes`
 0% { opacity: 0}
 100% {opacity: 1}
`
const disappear = keyframes`
 0% { opacity: 1}
 100% {opacity: 0}
`
const slide = keyframes`
0% { opacity: 0; transform: translateX(100%)}
100% {opacity: 1; transform: translateX(0)}
`
const slideOut = keyframes`
0% { opacity: 1; transform: translateX(0)}
100% {opacity: 0; transform: translateX(100%)}
`

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 100000;
    top: 0;
    background-image: linear-gradient(to left, black, transparent);
    animation-name: ${appear};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    color: white;
    font-size: 3vw;
`
export const NegativeParentWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 100000;
    top: 0;
    background-image: linear-gradient(to left, black, transparent);
    animation-name: ${disappear};
    animation-duration: 1s;
    animation-iteration-count: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    color: white;
    font-size: 3vw;
    animation-fill-mode: forwards;
`

export const ItemWrapper = styled.div`
    padding: 1vw;
    padding-right: 2vw;
    animation-name: ${slide};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    translateX(100%);
    opacity: 0;
    animation-fill-mode: forwards;
    cursor: pointer;
    &:hover{
        transform: scale(1.1); 
    }
`

export const NegativeWrapper = styled.div`
    padding: 1vw;
    padding-right: 2vw;
    animation-name: ${slideOut};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    translateX(0);
    opacity: 1;
    animation-fill-mode: forwards;
    cursor: pointer;
    &:hover{
        transform: scale(1.1); 
    }
`