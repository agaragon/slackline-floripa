import React from 'react';
import { Page } from '../../components/page';
import { Header, Content, WhatsLink, FirstSlackline } from './styles';

const LearnMore: React.FC = () => {
  
  return (
    <Page>
      <Header>When was it created?</Header>
      <Content>
        Slackline was created in the 1980s by rock climbers in Yosemite Valley, California. They used to set up a line between two trees and walk on it to relax and have fun. 
        Since then, the sport has evolved and become popular worldwide. 
        Today, you can find slackline parks in many cities and slackline competitions in different countries.
        <FirstSlackline src="https://www.youtube.com/embed/c6RYJFz1tqI?si=lcNbec7lLWrci-fH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></FirstSlackline>
      </Content>

      <Header>How to get started?</Header>
      <Content>
        To get started with slacklining, you could try to find a slackline community in your area.
        This way you won't need to buy any equipment and you can learn from experienced slackliners.
        If you live near Florianópolis, you can even contact me!!! <WhatsLink target='blank' href='https://wa.me/5548988185545?text=Bora+andar+de+slackline+dread%3F'>My WhatsApp</WhatsLink>
      </Content>

      <Header>Where can I by a slackline?</Header>
      <Content>
        Slacklines aren't as easy to find as other sports equipment, but you can buy them online or at outdoor sports stores.
        Decathlon has it in a few cities, but you can also find it on Amazon, Mercado Livre, and other online stores.
        If you can find one in OLX, you can also try to buy a used one, just be sure that the equipment is in good condition. <br/>
        <a target='blank' href='https://produto.mercadolivre.com.br/MLB-4064092682-kit-slackline-jibline-gibbon-15m-novo-na-caixa-_JM?matt_tool=16125068&matt_word=&matt_source=google&matt_campaign_id=14302215009&matt_ad_group_id=126141902145&matt_match_type=&matt_network=g&matt_device=c&matt_creative=542969653818&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=524444600&matt_product_id=MLB4064092682&matt_product_partition_id=1801777307744&matt_target_id=aud-1966857867496:pla-1801777307744&cq_src=google_ads&cq_cmp=14302215009&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gclid=Cj0KCQjw6uWyBhD1ARIsAIMcADq6DDd3-C0OGqRBtHxIu11jBhaYQmrGAuyGr7iPIq3Xc7T3Bi8OLKYaAs5UEALw_wcB'>
          Gibon slackline
        </a> is a good brand to start with, but it is a expensive one.
        The price of a slackline kit varies depending on the brand, length, and quality of the equipment. 
        You can find a slackline kit for around R$50 to R$600, depending on how much you are willing to pay.
      </Content>
    </Page>
  );
};

export default LearnMore;