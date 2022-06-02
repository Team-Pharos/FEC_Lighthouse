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
  max-height: 100%;
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
color: #ab4a27;
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
  max-height: 80%;
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
max-height: 80%;
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
  z-index: 11;
`;

const InnerModal = styled.div`
  width: 500px;
  background-color:#fff;
  border: 5px solid #ab4a27;
  border-radius: 5px;
`;

const Modal = styled.div`
  padding: 10px;
  margin: 0 auto;
  width: 95%;
`;

const TitleBackground = styled.div`
  height: 50px;
  background-color: #010a26;
  width: 100%;
`;

//----------- Inputs -----------//

const SearchBarInput = styled.input`
  width: 400px;
  max-width: 80%;
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

const QuestionTitle = styled.h3`
  color: #010a26;
  font-family: "Poppins", sans-serif;
  font-size:20px;
  font-weight:600;
  margin 0;
  display: inline-block;
`;

const AnswerTitle = styled.h3`
  color: #010a26;
  font-family: "Poppins", sans-serif;
  font-size:15px;
  font-weight:500;
  margin 0;

`;

const InputLabel = styled.h4`
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
  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  background-color: #68a69b;
  color: #010a26;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  border-radius: 5px;
  border: 2px solid #010a26;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;

//========General Use========

const RightText = styled.p`
font-family: "Poppins", sans-serif;
font-size: 10px;
font-weight: 400;
margin: 0;
float: right;
`;

//========Review Tile========

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  margin: 3px;
`;

const TruncBody = styled.div`
  height: 75px;
  overflow: auto;
`;

const Tile = styled.div`
  font-family: 'Poppins', sans-serif;
  border-bottom: 1px solid black;
  padding: 3px;
  margin-right: 50px;
`;

const RatingsSummary = styled.h3`
  color: #010a26;
  font-family: "Poppins", sans-serif;
  font-size:20px;
  font-weight:600;
  margin 10px;
  display: inline-block;
`;

//=======Rating Breakdowns=======

const BreakdownContainer = styled.div`
  top: 25px;
`;

const RatingStat = styled.span`
  float: right;
`;

const RatingValues = styled.div`
  border-bottom: 1px dotted #010a26;
`;

const Stars = styled.span`
  color: #ab4a27;
`;

//component styling
const Reviews = styled.div`
    margin: 50px auto;
    float: left;
    margin: 0;
    margin-left: 10px;
    width: 60%;
    `;

const Breakdown = styled.div`
    font-family: 'Poppins', sans-serif;
    float: left;
    margin: 5px;
    width: 30%;
  `;

const Container = styled.div`
    margin: 10px auto;
    padding: 3px;
    width: 80%;
    height: 500px;
    border-radius: 15px;
    overflow: auto;
  `;
const Header = styled.div`
    font-family: 'Poppins', sans-serif;
    width: 80%;
    position: absolute;
    padding: 1px 5px;
    color: #F2DAAC;
    background-color: #010A26;
    border-radius: 15px 15px 0 0;
  `;

const OpenAddReview = styled.button`
    width: 80px;
    margin: 5px auto;
    background-color: #F2DAAC;
    border: 1px solid #ab4a27;
    &:hover {
      border: 1px solid #6BA69B;
      cursor: pointer;
      color: #6BA69B;
    }
  `;

const ReviewsFooter = styled.div`
    box-sizing: border-box;
    width: 80%;
    height: 50px;
    padding: 3px 35%;
    margin: 0px auto 5px;
    background-color: #010A26;
  `;

const Category = styled.div`
  height: 40px;
  padding: 0 auto;
`;

const InnerCategory = styled.div`
  margin: 0 auto;
  height: auto;
`;

const ProductTitle = styled.h1`
  color: #68a69b;
  font-family: "Akshar", sans-serif;
  font-size: 100px;
  text-decoration: underline;
`;

export {
  ProductTitle,
  InnerCategory,
  Category,
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
  AnswerScrollBar,
  TitleBackground,
  RightText,
  Thumbnail,
  TruncBody,
  Tile,
  BreakdownContainer,
  RatingStat,
  RatingValues,
  Stars,
  ReviewsFooter,
  OpenAddReview,
  Header,
  Container,
  Breakdown,
  Reviews,
  RatingsSummary
};

