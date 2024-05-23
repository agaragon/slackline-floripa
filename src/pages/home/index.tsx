import React from 'react';
import { Button, Container, Content, Header, Image, Text } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>Welcome to Slackline World</Header>
      <Content>
        <Image src="https://cdn.midjourney.com/bf20295d-d27e-45a3-81ff-9be1bb17a558/0_3.png" alt="Slackline" />
          <Text>
            Slacklining is a balance sport that uses a flat webbing tensioned between two anchors. 
            It’s a great way to improve your balance, focus, and core strength while having fun outdoors.
          </Text>
        <Button>Learn More</Button>
        <Button>Classes</Button>
      </Content>
    </Container>
  );
};

export default Home;