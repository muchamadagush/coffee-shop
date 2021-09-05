import React, { children } from 'react'
import styled from 'styled-components'

const CardwFooter = ({className, children}) => {
    return (
        <Styles className={className}>
            {children}
            <div className="footer"></div>
        </Styles>
    )
}

export default CardwFooter
const Styles = styled.div`
height: 100%;
width: 100%;
background: #FFFFFF;
box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.22);
border-radius: 10px;
position: relative; 
    .footer{
        background: #6A4029;
        box-shadow: 0px 6px 20px rgba(106, 64, 41, 0.7);
        border-radius: 0px 0px 10px 10px;
        height: 12px;
        position: absolute;
        width: 100%;
        bottom: 0;

    }

`