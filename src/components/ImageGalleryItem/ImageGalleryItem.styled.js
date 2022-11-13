import styled from '@emotion/styled';

export const Item = styled.li`
  border-radius: 6px;
  box-shadow: 8px 10px 6px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    overflow:hidden;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
      transform: scale(1.03);
      cursor: zoom-in;
    }
    
`;
export const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;