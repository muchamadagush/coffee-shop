import React from 'react'
import styled from 'styled-components'

const CardShadow = ({className, children}) => {
    return (
        <Styles className={className}>
            {children}
        </Styles>
    )
}

export default CardShadow
const Styles = styled.div`
border-radius: 20px;
background: #FFFFFF;
box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.34);
`