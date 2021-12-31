import React from 'react';
import { FontAwesome, Entypo } from '@expo/vector-icons';

import { Container, Search } from './styles';

export function MessegerInput() {
  return (
    <Container>
      {/* <Title>Olá, programador Luann</Title> */}
      <Search placeholder="Mensagem" />
      <FontAwesome
        name="camera"
        size={18}
        color="#2FA8FF"
        style={{ position: 'absolute', marginTop: 10, marginLeft: 300 }}
      />
      <Entypo
        name="attachment"
        size={18}
        color="#2FA8FF"
        style={{ position: 'absolute', marginTop: 10, marginLeft: 270 }}
      />
    </Container>
  );
}
