/* eslint-disable no-var */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import groupBy from 'lodash/groupBy';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SectionList,
} from 'react-native';
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
  LineMessageMe,
  BoxMessageMeText,
  BoxMessageMe,
  BoxImage,
  LineMessageHe,
  BoxMessageHe,
  BoxMessageHeText,
} from './styles';
import ProfileSVG from '../../assets/images/profile.svg';
import LogautSVG from '../../assets/icon/logaut.svg';
import { HeaderMesseger } from '../../components/HeaderMesseger';
import { CarMessegeTo } from '../../components/CarMessegerTo';
import PencilSVG from '../../assets/icon/pencil.svg';
import { CarMessegeMe } from '../../components/CarMessegerMe';
import { SearchInput } from '../../components/SearchInput';
import { IMessegerProps } from '../../DTOS/messeger';
import { MessegerInput } from '../../components/MessegerInput';
import { apiURL } from '../../services/api';
import { messageList } from '../../services/fakeapimesseger';

interface PropsProfile {
  title: string;
}

export function Messege({ title }: PropsProfile) {
  // const route = useRoute();
  // const = route.params as IMessegerProps;
  const [listMSG, setListMSG] = useState([]);
  const [messeger, setMesseger] = useState({});

  useEffect(() => {
    const groupedList = Object.values(
      groupBy(messageList, function (n) {
        return n.createdAt.substring(0, 10);
      }),
    );

    var data = [];
    groupedList.map(dia => {
      var section = {
        title: new Date(dia[0].createdAt),
        data: [...dia],
      };

      data.push(section);
    });
    setListMSG(data);
  }, []);

  function renderMSG(item) {
    return <Text>{item.messege}</Text>;
  }

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
        <Title>kk</Title>
        <SectionList
          sections={listMSG}
          keyExtractor={({ item }) => String(item?.id)}
          renderItem={({ item }) => renderMSG(item)}
          renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
        />
      </Content>

      <KeyboardAvoidingView enabled={Platform.OS === 'ios'}>
        <WrapperButtonSend>
          <WrapperInputMesseger>
            <MessegerInput placeholder="Mensagem" />
          </WrapperInputMesseger>

          <ButtonIcon>
            <Ionicons name="arrow-forward-sharp" size={28} color="#2FA8FF" />
          </ButtonIcon>
        </WrapperButtonSend>
      </KeyboardAvoidingView>
    </>
  );
}
