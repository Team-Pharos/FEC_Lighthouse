import styled from 'styled-components';
// import FontStyles from '../../fonts/fonts.js';

const Input = styled.input`
  width: 300px;
`;

const SearchBarInput = styled.input`
  width: 400px;
`;

const BodyInput = styled.input`
  width: 400px;
  height: 100px;
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
  border: 5px solid #F26938;
  border-radius: 5px;
`;

const Modal = styled.div`
  padding: 10px;
  margin: auto;
`;

const ModalTitle = styled.h2`
  // font-family: "Water Brush", sans-serif;
  color: blue;
`;

export { Input, OuterModal, InnerModal, ModalTitle, SearchBarInput, BodyInput, Modal };

