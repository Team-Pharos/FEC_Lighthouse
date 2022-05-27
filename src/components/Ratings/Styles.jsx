import styled from 'styled-components';

const RightText = styled.span`
  float: right;
  padding: 0 3px;
`;

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
  border-bottom: 1px solid black;
  padding: 3px;
`;

export {
  RightText,
  Thumbnail,
  TruncBody,
  Tile,
}