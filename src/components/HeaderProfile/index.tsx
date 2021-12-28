import React from 'react';
import {
  Container,
  Title,
  WrapperHeader,
  WrapperHeaderIcon,
  ButtonIconPhoto,
  ButtonIconPencil,
  ButtonOnline,
} from './styles';
import ProfileSVG from '../../assets/images/profile.svg';
import PhotoSVG from '../../assets/icon/photo.svg';
import PencilSVG from '../../assets/icon/pencil.svg';

export function HeaderProfile() {
  return (
    <Container>
      <WrapperHeader>
        <ProfileSVG width={56} height={56} />
        <Title>Bate-papo</Title>
      </WrapperHeader>
      <ButtonOnline />

      <WrapperHeaderIcon>
        <ButtonIconPhoto>
          <PhotoSVG width={24} height={24} />
        </ButtonIconPhoto>

        <ButtonIconPencil>
          <PencilSVG width={24} height={24} />
        </ButtonIconPencil>
      </WrapperHeaderIcon>
    </Container>
  );
}
