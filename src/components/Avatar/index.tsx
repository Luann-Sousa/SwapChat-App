import React from 'react';
import { Container, WrapperHeader, ButtonOnline } from './styles';
import ProfileSVG from '../../assets/images/profile.svg';

export function Avatar() {
  return (
    <Container>
      <WrapperHeader>
        <ProfileSVG width={56} height={56} />
      </WrapperHeader>
      <ButtonOnline />
    </Container>
  );
}
