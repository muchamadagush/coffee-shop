import styled from "styled-components"

const Button = ({className, onClick, type, color, children, radius}) => {
    return (
        <Styles>
            <button
            type={type}
            className={`button ${color} ${radius} ${className}`} 
            onClick={onClick}
            >
                {children}
            </button>
        </Styles>
    )
}

export default Button
const Styles = styled.div`
.button{
    height: 100%;
    width: 100%;
    border-radius: 20px;
    box-sizing: border-box;
    outline: none;
    border: none;
    &.radius-10{
        border-radius: 10px;
    }
    &.radius-20{
        border-radius: 20px;
    }
    &.shine{
        background: #FFBA33;
        color: #6A4029;
    }
    &.shine:hover,
    &.shine-shadow:hover{
        background-color: #ffb11a;
    }
    &.shine-shadow{
        background: #FFBA33;
        color: #6A4029;
        box-shadow: 0px 6px 20px rgba(255, 186, 51, 0.4);
    }
    &.choco{
        background: #6A4029;
        color: #FFFFFF;
    }
    &.choco-shadow:hover,
    &.choco:hover{
        background-color: #5e3925;
    }
    &.choco-shadow{
        background: #6A4029;
        color: #FFFFFF;
        box-shadow: 0px 6px 20px rgba(106, 64, 41, 0.63);
    }
    &.white{
        background: #FFFFFF;
        box-shadow: 0px 6px 20px rgba(196, 196, 196, 0.67);
    }
    &.white-choco:hover,
    &.white:hover{
        background:#f9f9f9;
    }
    &.gray{
        background: rgba(186, 186, 186, 0.35);
        color: #4F5665;
    }
    &.gray:hover{
        background: #adadad;
    }
    &.white-choco{
        background: #FFFFFF;
        color: #6A4029;
        border: 1px solid #9F9F9F;
    }
    &.black{
        background: #0B132A;
        color: white;
    }
    &.black:hover{
        background: #061722;
    }
}


`