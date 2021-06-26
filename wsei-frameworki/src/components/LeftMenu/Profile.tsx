import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 320px;
  position: relative;
  top: 20px;
  border-radius: 5px;
  box-shadow: 0 0 15px -5px rgba(0,0,0,0.15);

`

export const Profile: FC = () => {
  return (
    <Wrapper>
      
    </Wrapper>
  )
}

export default Profile;