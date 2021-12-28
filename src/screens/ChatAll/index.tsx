import React from 'react';
import { Container, Title } from './styles';

import { HeaderProfile } from '../../components/HeaderProfile';
import { SearchInput } from '../../components/SearchInput';

export function ChatAll() {
  return (
    <Container>
      <HeaderProfile />
      <SearchInput />
    </Container>
  );
}
