/* eslint-disable global-require */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Buttonn } from '../../components/Button/index';
import LogoSVG from '../../assets/images/logo.svg';
import {
  Container,
  ImageHeader,
  Main,
  WrapperLogo,
  WrapperFotterButton,
  WrapperFooter,
  ImageFooter,
} from './styles';

export function LoginScreen() {
  return (
    <Container>
      <ImageHeader source={require('../../assets/images/header.png')} />

      <Main>


        <WrapperLogo>
          <LogoSVG width={150} height={150}/>
        </WrapperLogo>


        <WrapperFotterButton>
          <Buttonn title="Signin in" />
        </WrapperFotterButton>


      </Main>
      <WrapperFooter>
        <ImageFooter source={require('../../assets/images/footer.png')} />
      </WrapperFooter>
    </Container>
  );
}
