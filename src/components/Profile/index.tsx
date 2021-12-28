import React from 'react';
import {
  Container,
  Title,
  WrapperHeader,
  WrapperHeaderIcon,
  ButtonIconPencil,
  ButtonOnline,
} from './styles';
import ProfileSVG from '../../assets/images/profile.svg';
import LogautSVG from '../../assets/icon/logaut.svg';

export function Profile() {
  return (
    <Container>
      <WrapperHeader>
        <ProfileSVG width={56} height={56} />
        <Title>Dê seu Match</Title>
      </WrapperHeader>
      <ButtonOnline />

      <WrapperHeaderIcon>
        <ButtonIconPencil>
          <LogautSVG width={28} height={28} />
        </ButtonIconPencil>
      </WrapperHeaderIcon>
    </Container>
  );
}
