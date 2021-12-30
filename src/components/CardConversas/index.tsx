/* eslint-disable prettier/prettier */
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

interface PropsConersas {
  name: string;
  messeger?: string;
}

export function CardConversas({ name, messeger }: PropsConersas) {
  return (
    <Container style={{ borderBottomWidth: 1, borderBottomColor: '#cdcdcd' }}>
      <WrapperAvatar>
        <Avatar />
      </WrapperAvatar>

      <WrapperConversa>
        <Name>{name}</Name>
        <Messeger>{messeger}</Messeger>
      </WrapperConversa>
    </Container>
  );
}
