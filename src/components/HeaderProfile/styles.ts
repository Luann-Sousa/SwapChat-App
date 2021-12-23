import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30px;
  width: 100%;
  height: 80px;

  /* border: 1px solid red; */

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const WrapperHeader = styled.View`
  margin-top: 10px;
  width: 250px;
  height: 60px;
  /* border: 1px solid blue; */
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  margin-right: 10px;
`;

export const WrapperHeaderIcon = styled.View`
  margin-top: 10px;
  width: 100px;
  height: 60px;
  /* border: 1px solid blue; */
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled.Text`
  font-family: 'Roboto';

  font-weight: 900;
  font-size: 24px;
  color: #403d3d;
  margin-left: 20px;
`;
