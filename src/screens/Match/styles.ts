import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const ContainerImageMacth = styled.View`
  width: 100%;
  border-radius: 10px;
`;
export const ImageMacth = styled.Image`
  width: 390px;
  border-radius: 10px;
  height: 530px;
  margin-top: 20px;
`;

export const ContainerOption = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 28px;
`;
export const Reload = styled.TouchableOpacity`
  border: 1px solid #cdcdcd;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const ReloadMatch = styled.TouchableOpacity`
  border: 1px solid #cdcdcd;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Title = styled.Text``;
