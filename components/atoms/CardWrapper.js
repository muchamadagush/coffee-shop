
import styled from 'styled-components'
import PropTypes from 'prop-types';

const CardWrapper = ({className, children, onClick}) => {
    return (
        <Styles className={className} onClick={onClick}>
            {children}
        </Styles>
    )
}
CardWrapper.propTypes = {
    children : PropTypes.element.isRequired,
    className: PropTypes.string
}
export default CardWrapper

const Styles = styled.div`
  border-radius: 20px;
  background: #ffffff;
  cursor: pointer;
`;
