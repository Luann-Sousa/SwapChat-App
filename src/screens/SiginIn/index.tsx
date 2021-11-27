/* eslint-disable global-require */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import React from 'react';

import {
  Container,
  Title,
  ImageHeader,
  Main,
  WrapperMain,
  WrapperLogo,
  ImageLogo,
  WrapperInput,
  Input,
} from './styles';

export function SiginInScreen() {
  return (
    <Container>
      <ImageHeader source={require('../../assets/images/header.png')} />

      <Main>
        <WrapperMain>
          <Title>Conecte-se com seus{'\n'} Com seus amigos(a)</Title>
        </WrapperMain>

        <WrapperLogo>
          <ImageLogo source={require('../../assets/images/logo.png')} />
        </WrapperLogo>

        <WrapperInput>
          <Input placeholder="username ou e-mail" />
          <Input placeholder="senha" />
        </WrapperInput>
      </Main>
    </Container>
  );
}
