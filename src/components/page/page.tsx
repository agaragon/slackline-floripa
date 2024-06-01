import React, { ReactNode } from 'react';
import { Header } from '../header';
import { Page, Content } from './styles';

interface PageComponentProps {
  children: ReactNode;
}

const PageComponent: React.FC<PageComponentProps> = ({ children }) => {
  return (
    <Page>
      <Header/>
      <Content>
        {children}
      </Content>
    </Page>
  );
};

export { PageComponent };
