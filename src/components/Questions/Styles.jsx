import styled from 'styled-components';


const Span = styled.span`
color: #f26938;
text-decoration: underline;

&:hover {
  color: #68a69b;
}
`;

const SpanClicked = styled.span`
  color: #68a69b;
  text-decoration: underline;
`;

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

const EntryTitle = styled.h4`
color: #010a26;
`;

// const ModalTitle = styled.h2`
//   font-family: Akshar, sans-serif;
//   color: blue;
// `;

export { Input, OuterModal, InnerModal, SearchBarInput, BodyInput, Modal, Span, SpanClicked, EntryTitle };

