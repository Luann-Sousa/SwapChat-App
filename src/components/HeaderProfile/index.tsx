import React from 'react';
import { Container, Title, WrapperHeader, WrapperHeaderIcon } from './styles';
import ProfileSVG from '../../assets/images/profile.svg';
import PhotoSVG from '../../assets/icon/photo.svg';
import PencilSVG from '../../assets/icon/pencil.svg';

export function HeaderProfile() {
  return (
    <Container>
      <WrapperHeader>
        <ProfileSVG width={52} height={52} />
        <Title>Bate-papo</Title>
      </WrapperHeader>

      <WrapperHeaderIcon>
        <PhotoSVG width={24} height={24} />
        <PencilSVG width={24} height={24} />
      </WrapperHeaderIcon>
    </Container>
  );
}
