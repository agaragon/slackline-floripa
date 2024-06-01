import React from 'react';
import { Page } from '../../components/page';
import { Header, Content, WhatsLink, FirstSlackline } from './styles';

const LearnMore: React.FC = () => {
  
  return (
    <Page>
      <Header>Quando foi criado?</Header>
      <Content>
        O slackline foi criado na década de 1980 por escaladores em Yosemite Valley, Califórnia. Eles costumavam montar uma linha entre duas árvores e andar nela para relaxar e se divertir.
        Desde então, o esporte evoluiu e se tornou popular em todo o mundo.
        Hoje, você pode encontrar parques de slackline em muitas cidades e competições de slackline em diferentes países.
        <FirstSlackline src="https://www.youtube.com/embed/c6RYJFz1tqI?si=lcNbec7lLWrci-fH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></FirstSlackline>
      </Content>

      <Header>Como começar?</Header>
      <Content>
        Para começar a andar de slackline, você pode tentar encontrar uma comunidade de slackline na sua região.
        Dessa forma, você não precisará comprar nenhum equipamento e poderá aprender com slackliners experientes.
        Se você mora perto de Florianópolis, você pode até mesmo entrar em contato comigo!!! <WhatsLink target='blank' href='https://wa.me/5548988185545?text=Bora+andar+de+slackline+dread%3F'>Meu WhatsApp</WhatsLink>
      </Content>

      <Header>One eu posso comprar um slackline?</Header>
      <Content>
        Não é tão fácil encontrar slacklines como outros equipamentos esportivos, mas você pode comprá-los online ou em lojas de esportes ao ar livre.
        A Decathlon tem em algumas cidades, mas você também pode encontrar na Amazon, Mercado Livre e outras lojas online.
        Se você encontrar um na OLX, você também pode tentar comprar um usado, apenas certifique-se de que o equipamento está em boas condições. <br/>
        <a target='blank' href='https://produto.mercadolivre.com.br/MLB-4064092682-kit-slackline-jibline-gibbon-15m-novo-na-caixa-_JM?matt_tool=16125068&matt_word=&matt_source=google&matt_campaign_id=14302215009&matt_ad_group_id=126141902145&matt_match_type=&matt_network=g&matt_device=c&matt_creative=542969653818&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=524444600&matt_product_id=MLB4064092682&matt_product_partition_id=1801777307744&matt_target_id=aud-1966857867496:pla-1801777307744&cq_src=google_ads&cq_cmp=14302215009&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gclid=Cj0KCQjw6uWyBhD1ARIsAIMcADq6DDd3-C0OGqRBtHxIu11jBhaYQmrGAuyGr7iPIq3Xc7T3Bi8OLKYaAs5UEALw_wcB'>
          Gibon slackline
        </a> é uma boa marca para começar, mas é uma marca cara.
        O preço de um kit de slackline varia dependendo da marca, comprimento e qualidade do equipamento.
        Você pode encontrar um kit de slackline por cerca de R$50 a R$600, dependendo de quanto você está disposto a pagar.
      </Content>
    </Page>
  );
};

export default LearnMore;