import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from "../TopBar/TopBar";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import WelcomeSection from '../WelcomeSection/WelcomeSection';

const Content = styled.div`
  max-width: 1400px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`

export const MainPage: FC = () => {
  return (
    <div>
      <TopBar />
      <Content>
        <LeftMenu />
        <WelcomeSection />
      </Content>
    </div>
  )
}

export default MainPage;