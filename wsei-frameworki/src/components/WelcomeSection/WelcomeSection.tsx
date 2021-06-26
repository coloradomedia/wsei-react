import { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';

const InnerWrapper = styled.div`
    min-width: 1000px;
    height: 400px;
    position: relative;
    top: 20px;
    box-shadow: 0 0 15px -5px rgba(0,0,0,0.15);

    /* display: flex; */
    /* justify-content: flex-end; */
`

const MainImg = styled.img`

`


export const WelcomeSection: FC = () => {

    return (
        <Wrapper>
            <InnerWrapper />
        </Wrapper>
    )
  }
  
  
  
  export default WelcomeSection;