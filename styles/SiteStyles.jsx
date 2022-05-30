import styled from 'styled-components';

const CompanyHeading = styled.div`
  background: #010a26;
  background: rgba(1,10,38,1);
  background: -moz-linear-gradient(left, rgba(1,10,38,1) 0%, rgba(107,166,155,1) 38%, rgba(242,217,172,1) 79%, rgba(242,217,172,1) 100%);
  background: -webkit-linear-gradient(left, rgba(1,10,38,1) 0%, rgba(107,166,155,1) 38%, rgba(242,217,172,1) 79%, rgba(242,217,172,1) 100%);
  background: -ms-linear-gradient(left, rgba(1,10,38,1) 0%, rgba(107,166,155,1) 38%, rgba(242,217,172,1) 79%, rgba(242,217,172,1) 100%);
  background: linear-gradient(to right, rgba(1,10,38,1) 0%, rgba(107,166,155,1) 38%, rgba(242,217,172,1) 79%, rgba(242,217,172,1) 100%);
  width: 100%;
  border-radius: 0 0 15px 15px;
  display: block;
  height: 120px;
  margin: 0;
`;

const InnerDiv = styled.div`
  width: 90%;
  display: block;
  height: 100%;
  margin: auto;
`;

const CompanyTitle = styled.h1`
  font-family: "Kaushan Script", script;
  color: #f2daac;
  font-size: 80px;
  height: 99%;
  float: left;
  margin: 5px auto;
`;

const CompanyLogo = styled.img`
  padding: 5px;
  height: 100%;
  vertical-align: center;
  float: left;
`;

export {
  CompanyHeading,
  InnerDiv,
  CompanyTitle,
  CompanyLogo
}