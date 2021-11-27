import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ImageHeader = styled.Image`
  width: 420px;
  height: 179px;
`;
export const WrapperMain = styled.View`
  padding: 24px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_robot_bold};
  color: ${({ theme }) => theme.colors.title};
  font-size: 24px;

  margin-bottom: 32px;
`;

export const WrapperLogo = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;
`;
export const ImageLogo = styled.Image`
  width: 150px;
  height: 150px;
`;
