import React from 'react'
import styled from 'styled-components'

const BrownCard = ({className, children}) => {
        return (
            <Styles className={`BrownCard ${className}`}>
                {children}
            </Styles>
        )
    }

export default BrownCard
const Styles = styled.div`
border-radius: 20px;
background: #6A4029;
.listCard{
    padding: 50px;
}
`