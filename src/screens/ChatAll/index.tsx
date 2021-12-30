/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';
import {
  Container,
  ContainerMain,
  WrapperSearchInput,
  WrapperCardUsers,
  WrapperCardConversas,
  FlatListCard,
} from './styles';

import { HeaderProfile } from '../../components/HeaderProfile';
import { SearchInput } from '../../components/SearchInput';
import { CardUsers } from '../../components/CardUsers';
import { CardConversas } from '../../components/CardConversas';

export function ChatAll() {
  const conversas = [
    {
      user: 1,
      nome: 'Luann Sousa',
      mensagem: 'Oi, tudo bem ? 17 de ago',
    },
    {
      user: 2,
      nome: 'Maria Aparecida de Je...',
      mensagem: 'Oi, tudo bem ? 17 de ago',
    },
    {
      user: 3,
      nome: 'Carlos Henrrique',
      mensagem: 'eai cara como está ? 31 de out',
    },
    {
      user: 4,
      nome: 'Amelia de Barros',
      mensagem: 'passa aqui depois, tudo bem ? 2 de jan',
    },
    {
      user: 5,
      nome: 'Pedro Rocha Li...',
      mensagem: 'Colé mano, tudo bem ? 12 de jun',
    },
    {
      user: 6,
      nome: 'Pedro Rocha Li...',
      mensagem: 'Colé mano, tudo bem ? 12 de jun',
    },
  ];
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
        {conversas.map(item => (
          <CardConversas
            key={item.user}
            name={item.nome}
            messeger={item.mensagem}
          />
        ))}
      </WrapperCardConversas>
    </Container>
  );
}
