import React from 'react';
import {
  Container,
  WrapperAvatar,
  WrapperConversa,
  Name,
  Messeger,
} from './styles';
import ProfileSVG from '../../assets/images/profile.svg';
import LogautSVG from '../../assets/icon/logaut.svg';
import { Avatar } from '../Avatar';

export function CardConversas() {
  return (
    <Container>
      <WrapperAvatar>
        <Avatar />
      </WrapperAvatar>

      <WrapperConversa>
        <Name>Fabiana Pereira Sou...</Name>
        <Messeger>Oie, tudo bem ? 17 de ago</Messeger>
      </WrapperConversa>
    </Container>
  );
}
