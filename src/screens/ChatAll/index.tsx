import React from 'react';
import {
  Container,
  ContainerMain,
  WrapperSearchInput,
  WrapperCardUsers,
  WrapperCardConversas,
} from './styles';

import { HeaderProfile } from '../../components/HeaderProfile';
import { SearchInput } from '../../components/SearchInput';
import { CardUsers } from '../../components/CardUsers';
import { CardConversas } from '../../components/CardConversas';

export function ChatAll() {
  return (
    <Container>
      <ContainerMain>
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
      </ContainerMain>
      <WrapperCardConversas>
        <CardConversas />
      </WrapperCardConversas>
    </Container>
  );
}
