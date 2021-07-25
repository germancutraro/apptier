import styled from 'styled-components';

export const TechItem = styled.div`
  user-select: none;
  width: 75px;
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: 'center';
  padding: 15px;
  margin: 3px;
  background: #242938;
`;

export const TechIconWrapper = styled.div`
  width: 50px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const TechTitle = styled.small`
  color: #fff;
  font-size: 11px;
  text-align: center;
  margin-top: 10px;
`;
