/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, Title, ContainerMessege } from './styles';
import ProfileSVG from '../../assets/images/jovem2.svg';

export function CarMessegeMe() {
  return (
    <Container>
      <ContainerMessege>
        <Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis
        </Title>
      </ContainerMessege>
      <ProfileSVG width={34} height={34} />
    </Container>
  );
}
