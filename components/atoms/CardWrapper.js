import styled from 'styled-components';

const CardWrapper = ({ className, children }) => {
  return <Styles className={className}>{children}</Styles>;
};

export default CardWrapper;
const Styles = styled.div`
  border-radius: 20px;
  background: #ffffff;
`;
