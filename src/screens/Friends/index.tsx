import React from 'react';
import { StatusBar } from 'react-native';
import { BoxButton } from '../../components/BoxButton';
import { CardConversas } from '../../components/CardConversas';
import { Profile } from '../../components/Profile';
import {
  Container,
  ContainerMain,
  Title,
  WrapperButtons,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  WrapperCardFriends,
} from './styles';

export function FriendsScreen() {
  const friends = [
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
      <StatusBar barStyle="dark-content" />
      <ContainerMain>
        <Profile title="Amigos(a)" />

        <WrapperButtons>
          <BoxButton title="OLINE(65)" />
          <BoxButton title="OFILINE(263)" />
        </WrapperButtons>
      </ContainerMain>

      <WrapperCardFriends>
        {friends.map(item => (
          <CardConversas key={item.user} name={item.nome} />
        ))}
      </WrapperCardFriends>

      {/* <Title>Welcome is Screen Friends !</Title> */}
    </Container>
  );
}
