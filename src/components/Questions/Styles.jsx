import styled from 'styled-components';

//----------- Positional Styles -----------//

const CenterDiv = styled.div`
width: 80%;
margin: 10px auto;
`;

const LeftCol = styled.div`
  float: left;
  margin: 0 1.5%;
`;

const RightCol = styled.div`
  float: left;
  margin: 0 1.5%;
`;

const InnerContent = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const ClearFloat = styled.div`
  display: block;
  clear: left;
  margin-bottom: 10px;
`;

const Span = styled.span`
color: #f26938;
text-decoration: underline;

&:hover {
  color: #68a69b;
  cursor: pointer;
}
`;

const SpanClicked = styled.span`
  color: #68a69b;
  text-decoration: underline;
`;

//----------- OverFlow Styles -----------//

const QuestionScrollBar = styled.div`
  height: 400px;
  max-height: 100%;
  width: auto;
  max-width: 100%;
  overflow: scroll;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #010a26;
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
  }
`;

const AnswerScrollBar = styled.div`
height: auto;
max-height: 100%;
width: auto;
max-width: 100%;
overflow: scroll;

&::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 5px;
}

&::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #68a69b;
  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
}
`;

//----------- Modals -----------//

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
  margin: 0 auto;
  width: 95%;
`;

//----------- Inputs -----------//

const SearchBarInput = styled.input`
  width: 400px;
  height: 25px
`;

const BodyInput = styled.textarea`
  width: 400px;
  height: 100px;
`;


const Input = styled.input`
  width: 300px;
`;

//----------- fonts -----------//

const TitleTile = styled.div`
  height: 50px;
  background-color: #010a26;
  width: 100%;
  border-radius: 15px 15px 0 0;
`;

const SectionTitle = styled.h2`
  color: #f2daac;
  font-family: "Akshar", sans-serif;
  font-size: 40px;
  margin: 0 auto;
  width: 95%;
`;

const QuestionTitle = styled.h4`
  color: #010a26;
  font-family: "Poppins", sans-serif;
  font-size:20px;
  font-weight:600;
  margin 0;
  display: inline-block;
`;

const AnswerTitle = styled.h4`
  color: #010a26;
  font-family: "Poppins", sans-serif;
  font-size:15px;
  font-weight:500;
  margin 0;
  display: inline-block;
`;

const InputLabel = styled.h3`
 color: #010a26;
 font-family: "Akshar", sans-serif;
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

//----------- buttons -----------//

const PrimaryButton = styled.button`
  background: #010a26;
  color: #f2daac;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  border-radius: 5px;
  margin: 5px;

`;

const Button = styled.button`
  background-color: #68a69b;
  color: #010a26;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  border-radius: 5px;
  margin: 5px;

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
  QuestionTitle,
  AnswerTitle,
  InputLabel,
  SectionTitle,
  PrimaryButton,
  Button,
  SubTitle,
  Description,
  LeftCol,
  RightCol,
  CenterDiv,
  ClearFloat,
  TitleTile,
  InnerContent,
  QuestionScrollBar,
  AnswerScrollBar
};

