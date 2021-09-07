import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const CardShadow = ({className, children}) => {
    return (
        <Styles className={className}>
            {children}
        </Styles>
    )
}
CardShadow.propTypes = {
    children : PropTypes.element.isRequired,
    className: PropTypes.string
}
export default CardShadow
const Styles = styled.div`
border-radius: 20px;
background: #FFFFFF;
box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.34);
`