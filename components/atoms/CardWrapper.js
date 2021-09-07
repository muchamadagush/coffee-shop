import styled from 'styled-components'
import PropTypes from 'prop-types';

const CardWrapper = ({className, children}) => {
    return (
        <Styles className={className}>
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
background: #FFFFFF;
`