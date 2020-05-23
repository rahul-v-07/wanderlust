import React, {useRef, useEffect, useState} from 'react'
import {
    Wrapper,
    ItemWrapper,
    NegativeWrapper,
    NegativeParentWrapper,
} from './Styles'

const list = [{
    name: 'Bangalore',
    link: '/bangalore',
}, {
    name: 'Manali',
    link: '/manali',
}, {
    name: 'Jodhpur',
    link: '/jodhpur',
}, {
    name: 'Pondicherry',
    link: '/pondicherry',
}]

const SideMenu = ({ closeCallback, show: initialShow }) => {
    const [ show, toggleShow] = useState(1)
    const refList = list.map(() => null)
    const RenderedList = list.map(({ name }, index) => {
        const decay = show == -1
        const Wrapper = decay ? NegativeWrapper : ItemWrapper
        return (
            <Wrapper
                style={{
                    animationDelay: `${index * 0.1}s`,
                }}
                ref={ref => refList[index] = ref}
            >
                {name}
            </Wrapper>
        )
    })
    const toggle = (toggle) => {
        const state = toggle ? 1 : -1
        toggleShow(state)
        if(toggle == false) {
            setTimeout(() => {
                toggleShow(() => 0)
                closeCallback()
            }, 1000)
        }
    }
    useEffect(() => {
        const checkClick = (event) => {
            toggle(false)
            // const clickedOutside = refList.every((ref) => ref.current && !ref.current.contains(event.target))
            // if (clickedOutside) {
            //     console.log("psfhsdjkfdfk")
            // }
        }
        document.addEventListener('click', checkClick);
        return () => document.removeEventListener('click', checkClick)
    })
    if(show == 0) {
        return null
    }
    const ParentWrapper = show == -1 ? NegativeParentWrapper: Wrapper;
    return(
        <ParentWrapper>
            {RenderedList}
        </ParentWrapper>
    )
}

export default SideMenu