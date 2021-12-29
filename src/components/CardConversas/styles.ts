import styled from 'styled-components/native';

export const Container = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.header};
  height: 89px;

  padding: 14px;

  flex-direction: row;
  align-items: center;
`;

export const WrapperAvatar = styled.View`
  /* background-color: #fff; */
  width: 80px;
`;

export const WrapperConversa = styled.View`
  /* background-color: red; */
  width: 100%;
`;

export const Name = styled.Text``;
export const Messeger = styled.Text``;
