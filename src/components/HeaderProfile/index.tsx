import React from 'react';
import { Container, Title, WrapperHeader } from './styles';
import ProfileSVG from '../../assets/images/profile.svg';

export function HeaderProfile() {
  return (
    <Container>
      <WrapperHeader>
        <ProfileSVG width={48} height={48} />
        <Title>Olá, Programador !</Title>
      </WrapperHeader>
    </Container>
  );
}
