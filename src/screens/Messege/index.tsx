/* eslint-disable prettier/prettier */
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import {
  Container,
  Title,
  WrapperMesserTo,
  WrapperMesserMe,
  WrapperInputMesseger,
  WrapperButtonSend,
  ButtonIcon,
  Content,
  WrapperContent,
  Main,
} from './styles';
import ProfileSVG from '../../assets/images/profile.svg';
import LogautSVG from '../../assets/icon/logaut.svg';
import { HeaderMesseger } from '../../components/HeaderMesseger';
import { CarMessegeTo } from '../../components/CarMessegerTo';
import PencilSVG from '../../assets/icon/pencil.svg';
import { CarMessegeMe } from '../../components/CarMessegerMe';
import { SearchInput } from '../../components/SearchInput';
import { MessegerInput } from '../../components/MessegerInput';

interface PropsProfile {
  title: string;
}
export function Messege({ title }: PropsProfile) {
  return (
    <>
      <Container>
        <HeaderMesseger
          icon={ProfileSVG}
          title="Pedro Sousa"
          subtitle="online agora"
        />
      </Container>
      <View
        style={{ borderTopWidth: 1, borderColor: '#cdcdcd', marginTop: 20 }}
      />
      <Content>
        <WrapperContent>
          <WrapperMesserTo>
            <CarMessegeTo />
          </WrapperMesserTo>

          <WrapperMesserMe>
            <CarMessegeMe />
          </WrapperMesserMe>

          <WrapperMesserTo>
            <CarMessegeTo />
          </WrapperMesserTo>

          <WrapperMesserMe>
            <CarMessegeMe />
          </WrapperMesserMe>

          <WrapperMesserMe>
            <CarMessegeMe />
          </WrapperMesserMe>
        </WrapperContent>
      </Content>

      <WrapperButtonSend>
        <WrapperInputMesseger>
          <MessegerInput />
        </WrapperInputMesseger>

        <ButtonIcon>
          <Ionicons name="arrow-forward-sharp" size={28} color="#2FA8FF" />
        </ButtonIcon>
      </WrapperButtonSend>
    </>
  );
}
