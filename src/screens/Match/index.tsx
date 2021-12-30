import React from 'react';
import {
  Wrapper,
  Container,
  Title,
  SubTitle,
  WrapperLegend,
  ContainerImageMacth,
  ImageMacth,
  ContainerOption,
  Reload,
  ReloadMatch,
} from './styles';
import { Profile } from '../../components/Profile';
import JovenProfileSVG from '../../assets/images/joven1.png';
import ReloadSVG from '../../assets/images/reload.svg';
import CancelSVG from '../../assets/images/cancel.svg';
import MatchlSVG from '../../assets/images/match.svg';
import StarSVG from '../../assets/images/star.svg';

export function MatchScreen() {
  return (
    <>
      <Wrapper>
        <Profile title="Dê seu Match" />
        <Container showsVerticalScrollIndicator={false}>
          <ContainerImageMacth>
            <ImageMacth source={JovenProfileSVG} />

            <WrapperLegend>
              <Title>Priscilla, 24</Title>
              <SubTitle>Consultora em atendimento Veterinario.</SubTitle>
            </WrapperLegend>
          </ContainerImageMacth>

          <ContainerOption>
            <Reload>
              <ReloadSVG width={24} height={24} />
            </Reload>

            <Reload>
              <CancelSVG width={18} height={18} />
            </Reload>

            <ReloadMatch>
              <MatchlSVG width={30} height={30} />
            </ReloadMatch>

            <Reload>
              <StarSVG width={24} height={24} />
            </Reload>

            <Reload>
              <ReloadSVG width={24} height={24} />
            </Reload>
          </ContainerOption>
        </Container>
      </Wrapper>
    </>
  );
}
