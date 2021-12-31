import React from 'react';
import { Container, WrapperHeader, ButtonOnline, Box } from './styles';
import ProfileSVG from '../../assets/images/profile.svg';

export function Avatar() {
  return (
    <Container>
      <Box>
        <WrapperHeader>
          <ProfileSVG width={54} height={54} />
        </WrapperHeader>
      </Box>
      <ButtonOnline />
    </Container>
  );
}
