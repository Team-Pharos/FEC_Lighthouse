import styled from 'styled-components';

const Input = styled.input`
  width: 200px;
`;

const OuterModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #68a69b88;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerModal = styled.div`
  width: 500px;
  background-color:#fff;
`;

export { Input, OuterModal, InnerModal }