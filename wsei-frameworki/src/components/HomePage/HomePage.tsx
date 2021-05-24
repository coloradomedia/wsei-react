import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from "../TopBar/TopBar";
import { LeftMenu } from "../LeftMenu/LeftMenu";

const Content = styled.div`
  max-width: 1920px;
`

export const MainPage: FC = () => {
  return (
    <div>
      <TopBar />
      <Content>
        <LeftMenu />
        <div>page content</div>
      </Content>
    </div>
  )
}

export default MainPage;