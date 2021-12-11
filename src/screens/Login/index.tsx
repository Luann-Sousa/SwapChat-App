/* eslint-disable global-require */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Buttonn } from '../../components/Button/index';
import LogoSVG from '../../assets/images/logo.svg';
import {
  Container,
  ImageHeader,
  Main,
  WrapperLogo,
  WrapperButtons,
  WrapperFotterButton,
  WrapperFooter,
  ImageFooter,
} from './styles';

export function LoginScreen() {
  const navigation = useNavigation();
  return (
    <Container>
      <ImageHeader source={require('../../assets/images/header.png')} />

      <Main>


        <WrapperLogo>
          <LogoSVG width={150} height={150}/>
        </WrapperLogo>

    <WrapperButtons>

    <WrapperFotterButton>
          <Buttonn title="Signin in" onPress={()=> navigation.navigate("Signin")}/>
        </WrapperFotterButton>

        <WrapperFotterButton>
          <Buttonn title="Signin up" />
        </WrapperFotterButton>
    </WrapperButtons>


      </Main>
      <WrapperFooter>
        <ImageFooter source={require('../../assets/images/footer.png')} />
      </WrapperFooter>
    </Container>
  );
}
