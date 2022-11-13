import styled from '@emotion/styled';

// export const LoadMoreButton = styled.button`
//   padding: 8px 16px;
//   margin: 0 auto;
//   border-radius: 2px;
//   background-color: #3f51b5;
//   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   text-align: center;
//   display: inline-block;
//   color: #fff;
//   border: 0;
//   text-decoration: none;
//   cursor: pointer;
//   font-family: inherit;
//   font-size: 18px;
//   line-height: 24px;
//   font-style: normal;
//   font-weight: 500;
//   max-width: 180px;
//   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
//     0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
// :hover,
// :focus {
//   background-color: #303f9f;
// `;

export const LoadMoreButton = styled.a`
  text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  margin: 10px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #fff;
  background: #3f51b5;
  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
  transition: .3s;
  margin:0 auto;

  &:hover {
  background: #00d4ff;
  box-shadow: 0 15px 20px rgba(46, 229, 157, .4);
  color: white;
  transform: translateY(-7px);
}
`