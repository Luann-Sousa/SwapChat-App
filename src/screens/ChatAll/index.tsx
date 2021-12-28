import React from 'react';
import { Container, WrapperSearchInput, WrapperCardUsers } from './styles';

import { HeaderProfile } from '../../components/HeaderProfile';
import { SearchInput } from '../../components/SearchInput';
import { CardUsers } from '../../components/CardUsers';

export function ChatAll() {
  return (
    <Container>
      <HeaderProfile />
      <WrapperSearchInput>
        <SearchInput />
      </WrapperSearchInput>

      <WrapperCardUsers>
        <CardUsers name="Maria Clara Gomes" />
        <CardUsers name="Fernanda Santos" />
        <CardUsers name="Bernade Da Silva" />
        <CardUsers name="Maria Isabe Kiterino" />
      </WrapperCardUsers>
    </Container>
  );
}
