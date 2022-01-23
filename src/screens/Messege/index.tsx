/* eslint-disable no-self-compare */
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
  const [messeger_to, setMessegerTo] = useState(false);
  const [messeger_digit, setMessegerDigit] = useState('');
  const [resultmesseger, setResultmesseger] = useState('');

  const [messeger, setMesseger] = useState([]);

  function handleEnviaMesseger() {
    const teste = messeger_digit;
    setResultmesseger(teste);
    setMessegerTo(true);
    console.log('oi', messeger);
  }

  async function handleMessegens() {
    await apiURL
      .get(
        '/messegens/one/dfd81ab9-729f-42b7-b4d9-552830d9455a/4a9c1ef6-cca6-4804-9396-590bbeb25738',
      )
      .then(response => setMesseger(response.data))
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    handleMessegens();
  }, []);

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
        <FlatList
          data={messeger?.messengens_me}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <>
              <WrapperMesserTo>
                <BoxMessageMe>
                  <Text>{item?.messeger}</Text>
                </BoxMessageMe>
              </WrapperMesserTo>

              <WrapperMesserMe>
                <BoxMessageHe>
                  <BoxMessageMeText>{item?.messeger}</BoxMessageMeText>
                </BoxMessageHe>
              </WrapperMesserMe>
            </>
          )}
        />
      </Content>

      <KeyboardAvoidingView enabled={Platform.OS === 'ios'}>
        <WrapperButtonSend>
          <WrapperInputMesseger>
            <MessegerInput
              placeholder="Mensagem"
              onChangeText={text => setMessegerDigit(text)}
            />
          </WrapperInputMesseger>

          <ButtonIcon onPress={() => handleEnviaMesseger()}>
            <Ionicons name="arrow-forward-sharp" size={28} color="#2FA8FF" />
          </ButtonIcon>
        </WrapperButtonSend>
      </KeyboardAvoidingView>
    </>
  );
}
