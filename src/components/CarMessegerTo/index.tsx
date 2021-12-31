/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, Title, ContainerMessege } from './styles';
import ProfileSVG from '../../assets/images/profile.svg';

export function CarMessegeTo() {
  return (
    <Container>
      <ProfileSVG width={34} height={34} />
      <ContainerMessege>
        <Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis
        </Title>
      </ContainerMessege>
    </Container>
  );
}
