import styled from 'styled-components';

const LeftCol = styled.div`
  float: left;
  margin: 0 1.5%;
  width: 15%;
`;

const RightCol = styled.div`
  float: left;
  margin: 0 1.5%;
  width: 75%;
`;


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
  height: 25px
`;

const BodyInput = styled.textarea`
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
  z-index: 5;
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
  font-family: "Poppins", sans-serif;
  font-size:20px;
  font-weight:600;
  margin 0;
  display: inline-block;
`;

const InputLabel = styled.h3`
 color: #010a26;
 font-family: "Akshar", sans-serif;
`;

const SectionTitle = styled.h2`
  color: #010a26;
  font-family: "Akshar", sans-serif;
  font-size: 40px;
  margin: 0;
  text-decoration: underline;
`;

const SubTitle = styled.h5`
font-family: "Poppins", sans-serif;
font-size: 15px;
font-weight: 500;
margin: 0 10px;
display: inline-block;
`;

const Description = styled.p`
font-family: "Poppins", sans-serif;
font-size: 10px;
font-weight: 400;
margin: 0;
`;

const PrimaryButton = styled.button`
  background: #010a26;
  color: #f2daac;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  border-radius: 5px;
  margin: 5px;
  display: inline-block;
`;

const Button = styled.button`
  background-color: #68a69b;
  color: #010a26;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  border-radius: 5px;
  margin: 5px;
  display: inline-block;
`;
export {
  Input,
  OuterModal,
  InnerModal,
  SearchBarInput,
  BodyInput,
  Modal,
  Span,
  SpanClicked,
  EntryTitle,
  InputLabel,
  SectionTitle,
  PrimaryButton,
  Button,
  SubTitle,
  Description,
  LeftCol,
  RightCol
 };

