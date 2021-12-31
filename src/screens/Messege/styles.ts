import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30px;
  width: 100%;
  height: 80px;

  /* border: 1px solid red; */

  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;
`;
export const Title = styled.Text`
  color: #000;
`;

export const WrapperMesserTo = styled.View`
  margin-bottom: 20px;
`;

export const WrapperMesserMe = styled.View`
  margin-bottom: 20px;
`;
export const Main = styled.View`
  width: 100%;
  margin-top: 60px;
`;

export const WrapperButtonSend = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 6px;
`;

export const WrapperContent = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
export const WrapperInputMesseger = styled.View`
  width: 100%;

  flex: 1;

  padding: 12px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  margin-bottom: 0px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    marginBottom: 50,
  },
  showsVerticalScrollIndicator: false,
})``;
