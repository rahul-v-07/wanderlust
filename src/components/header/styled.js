import styled, {keyframes} from 'styled-components'

const fadeAnimation = keyframes`
 0% { opacity: 0}
 30% { opacity: 1}
 70% {opacity: 1}
 100% { opacity: 0}
`

export const Container = styled.div`
    width: 100%;
    padding: 20px;
    text-align: center;
    color: #04396b;
    font-weight: bold;
    font-size: min(5vw, 51px);
    align-items: center;
    display: flex;
    flex-direction: row;
    align-items: end;
    position: fixed;
    top: 0;
    z-index: 100;
    background: #e5e5e5;
`

export const Latter = styled.div`
    font-size: min(3vw, 31px);
    font-style: italic;
    font-weight: 100;
    animation-name: ${fadeAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
`