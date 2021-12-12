/* eslint-disable global-require */
import React from 'react';
import { Buttonn } from '../../components/Button/index';
import UploadSVG from '../../assets/icon/upload.svg';
import {
  Container,
  Title,
  ImageHeader,
  Main,
  WrapperMain,
  WrapperInput,
  Label,
  Input,
  ButtonUpload,
  WrapperFotterButton,
  WrapperFooter,
  ImageFooter,
} from './styles';

export function SignInUpScreen() {
  return (
    <Container>
      <ImageHeader source={require('../../assets/images/header.png')} />

      <Main>
        <WrapperMain>
          <Title>Cadastre-se</Title>
        </WrapperMain>

        <WrapperInput>
          <Label>Seu nome:</Label>
          <Input placeholder="Luan" />

          <Label>Seu nome de usuário:</Label>
          <Input placeholder="senha" />

          <Label>E-mail:</Label>
          <Input placeholder="@exemple.com" />

          <Label>Senha:</Label>
          <Input placeholder="*********" />

          <Label>Sua foto:</Label>
          <Input placeholder="selecione uma imagem" />
          <ButtonUpload>
            <UploadSVG width={23} height={24} />
          </ButtonUpload>

          <Label>Sobre min:</Label>
          <Input multiline placeholder="sou uma pessoa animada, gosto de sair as vezes ...." />

          <Label>Telefone(celular):</Label>
          <Input placeholder="(31) 9 8763-4462" />
        </WrapperInput>

        <WrapperFotterButton>
          <Buttonn title="CADASTRAR" />
        </WrapperFotterButton>
      </Main>
      <WrapperFooter>
        <ImageFooter source={require('../../assets/images/footer.png')} />
      </WrapperFooter>
    </Container>
  );
}
