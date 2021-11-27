/* eslint-disable global-require */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import React from 'react';

import { Container, Title, ImageHeader, WrapperMain } from './styles';

export function SiginInScreen() {
  return (
    <Container>
      <ImageHeader source={require('../../assets/images/header.png')} />

      <WrapperMain>
        <Title>Conecte-se com seus{'\n'} Com seus amigos(a)</Title>
      </WrapperMain>
    </Container>
  );
}
