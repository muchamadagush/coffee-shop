import styled from 'styled-components';

const Button = ({ className, onClick, type, color, children, radius, disabled }) => {
  return (
    <Styles>
      <button type={type} className={`button ${color} ${radius} ${className}`} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </Styles>
  );
};

export default Button;
const Styles = styled.div`
  .button {
    height: 100%;
    width: 100%;
    border-radius: 20px;
    box-sizing: border-box;
    outline: none;
    border: none;
    &.radius-10 {
      border-radius: 10px;
    }
    &.radius-20 {
      border-radius: 20px;
    }
    &.shine {
      background: #ffba33;
      color: #6a4029;
    }
    &.shine:hover,
    &.shine-shadow:hover {
      background-color: #ffb11a;
    }
    &.shine-shadow {
      background: #ffba33;
      color: #6a4029;
      box-shadow: 0px 6px 20px rgba(255, 186, 51, 0.4);
    }
    &.choco {
      background: #6a4029;
      color: #ffffff;
    }
    &.choco-shadow:hover,
    &.choco:hover {
      background-color: #5e3925;
    }
    &.choco-shadow {
      background: #6a4029;
      color: #ffffff;
      box-shadow: 0px 6px 20px rgba(106, 64, 41, 0.63);
    }
    &.white {
      background: #ffffff;
      box-shadow: 0px 6px 20px rgba(196, 196, 196, 0.67);
    }
    &.white-choco:hover,
    &.white:hover {
      background: #f9f9f9;
    }
    &.gray {
      background: rgba(186, 186, 186, 0.35);
      color: #4f5665;
    }
    &.gray:hover {
      background: #adadad;
    }
    &.white-choco {
      background: #ffffff;
      color: #6a4029;
      border: 1px solid #9f9f9f;
    }
    &.black {
      background: #0b132a;
      color: white;
    }
    &.black:hover {
      background: #061722;
    }
    &.auth {
      height: 75px;
      margin-bottom: 25px;
      font-size: 20px;
      font-weight: 700;
      width: 90%;
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.google {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    &.forgot {
      height: 75px;
      font-size: 20px;
      font-weight: 700;
      width: 90%;
      margin: 30px auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
