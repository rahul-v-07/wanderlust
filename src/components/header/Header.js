import React, { useEffect, useState } from 'react'
import {
    Container,
    Latter,
} from './styled'
const colors = ['#995cb4', '#f79420', '#001628', '#04ab11', '#b22420', '#0645ad']
const getColor = () => colors[Math.floor(Math.random() * colors.length)];

const Header = () => {
    const list = [
        'Manali',
        'Jodhpur',
        'Pondicherry',
        'Bangalore',
    ]
    const [index, updateIndex] = useState(0)
    let length = list.length;
    useEffect(() => {
        const timer = setInterval(() => {
            updateIndex((index) => {
                return index == length - 1 ? 0 : index + 1;
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [])
    return (
        <Container>
            <div>
                WANDERLUST
            </div>
            <Latter
                style={{ color: getColor()}}
            >
                {list[index]}
            </Latter>
        </Container>
    )
}

export default Header
