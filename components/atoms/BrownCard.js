import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const BrownCard = ({className, children}) => {
        return (
            <Styles className={`BrownCard ${className}`}>
                {children}
            </Styles>
        )
    }
BrownCard.propTypes = {
    children : PropTypes.element.isRequired,
    className: PropTypes.string
}
export default BrownCard
const Styles = styled.div`
border-radius: 20px;
background: #6A4029;
.listCard{
    padding: 50px;
}
`