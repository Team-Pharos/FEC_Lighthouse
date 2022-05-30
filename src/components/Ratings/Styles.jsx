import styled from 'styled-components';

//========General Use========

const RightText = styled.span`
  float: right;
  padding: 0 3px;
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
`;

//=======Rating Breakdowns=======

const BreakdownContainer = styled.div`
  top: 25px;
`;

const RatingStat = styled.span`
  float: right;
`;

const RatingValues = styled.div`
  border-bottom: 1px dotted black;
`;

const Stars = styled.span`
  color: #F26938;
`;

export {
  RightText,
  Thumbnail,
  TruncBody,
  Tile,
  BreakdownContainer,
  RatingStat,
  RatingValues,
  Stars
}