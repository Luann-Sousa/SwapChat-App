import React from 'react';
import { ContainerMain, ContainerProfile, WrapperHeader, Title } from './styles';
import ProfileSVG from '../../assets/images/profile.svg';

export function Profile() {
  return (
    <ContainerMain>
      <WrapperHeader>
        <ContainerProfile>
          <ProfileSVG width={48} height={48} />
        </ContainerProfile>
        <Title>Dê um Match</Title>
      </WrapperHeader>
    </ContainerMain>
  );
}
