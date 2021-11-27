/* eslint-disable global-require */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import React from 'react';

import {
  Container,
  Title,
  ImageHeader,
  WrapperMain,
  WrapperLogo,
  ImageLogo,
} from './styles';

export function SiginInScreen() {
  return (
    <Container>
      <ImageHeader source={require('../../assets/images/header.png')} />

      <WrapperMain>
        <Title>Conecte-se com seus{'\n'} Com seus amigos(a)</Title>
      </WrapperMain>

      <WrapperLogo>
        <ImageLogo source={require('../../assets/images/logo.png')} />
      </WrapperLogo>
    </Container>
  );
}
