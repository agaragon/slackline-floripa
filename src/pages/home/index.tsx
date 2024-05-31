import React from 'react';
import useNavigationService from '../../services/navigate-service';
// import { useNavigate } from 'react-router-dom';
import { Button, Container, Content, Header, Image, Text, Title, ButtonsContainer } from './styles';

const Home: React.FC = () => {
  const { goToClasses, goToLearnMore } = useNavigationService();
  
  return (
    <Container>
      <Header>Welcome to Slackline World</Header>
      <Content>
        <Image src="https://cdn.midjourney.com/bf20295d-d27e-45a3-81ff-9be1bb17a558/0_3.png" alt="Slackline" />
          <Title>What is Slackline?</Title>
          <Text>
            Slacklining is a balance sport that uses a flat webbing tensioned between two anchors. 
            It’s a great way to improve your balance, focus, and core strength while having fun outdoors.
          </Text>
        <ButtonsContainer>
          <Button onClick={goToLearnMore}>Learn More!</Button>
          <Button onClick={goToClasses}>Get Classes!</Button>
        </ButtonsContainer>
      </Content>
    </Container>
  );
};

export default Home;