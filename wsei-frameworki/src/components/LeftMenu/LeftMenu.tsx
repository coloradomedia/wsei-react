import { FC } from 'react';
import styled from 'styled-components';
import Profile from './Profile';

const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  min-height: 100vh;
  /* box-shadow: 0 0 20px -5px rgba(0,0,0,0.5); */
  /* position: relative; */
`

export const LeftMenu: FC = () => {
  return (
    <LeftWrapper>
      <Profile/>
      {/* <div>LeftMenu</div> */}
    </LeftWrapper>
  )
}

export default LeftMenu;