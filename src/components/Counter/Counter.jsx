import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'

export default function Counter({ title, number }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        },10)

        if(count === number){
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [count])
    return (
        <Col>
            <p>+{count}</p>
            <span>{title}</span>
        </Col>
    )
}
