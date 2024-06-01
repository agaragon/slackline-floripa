import React from 'react';
import useNavigationService from '../../services/navigate-service';
import { Button, Content, Header, Image, Text, Title, ButtonsContainer } from './styles';
import { Page } from '../../components/page';

const Home: React.FC = () => {
  const { goToClasses, goToLearnMore } = useNavigationService();
  
  return (
    <Page>
      <Header>Bem vindo a Slackline Floripa!</Header>
      <Content>
        <Image src="https://cdn.midjourney.com/bf20295d-d27e-45a3-81ff-9be1bb17a558/0_3.png" alt="Slackline" />
          <Title>O que é slackline?</Title>
          <Text>
            Slackline é um esporte de equilíbrio que envolve andar ou balançar em uma fita esticada entre dois pontos fixos. 
            É semelhante ao slack rope walking e ao tightrope walking. 
            A fita é tensionada entre dois pontos fixos, geralmente árvores ou postes, mas também pode ser esticada entre dois pontos fixos no chão.
          </Text>
        <ButtonsContainer>
          <Button onClick={goToLearnMore}>Saiba Mais!</Button>
          <Button onClick={goToClasses}>Tenha aulas!</Button>
        </ButtonsContainer>
      </Content>
    </Page>
  );
};

export default Home;