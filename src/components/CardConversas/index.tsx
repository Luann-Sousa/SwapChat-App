/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
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

interface PropsConersas extends TouchableOpacityProps {
  name: string;
  messeger?: string;
}

export function CardConversas({ name, messeger, ...res }: PropsConersas) {
  return (
    <Container
      {...res}
      style={{ borderBottomWidth: 1, borderBottomColor: '#cdcdcd' }}
    >
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
