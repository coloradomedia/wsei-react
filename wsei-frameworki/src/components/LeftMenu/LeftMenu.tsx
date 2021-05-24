import { FC } from 'React';
import styled from 'styled-components';

const LeftWrapper = styled.div`
  display: flex;
  justify-content: left;
  width: 300px;
  height: 100vh;
  box-shadow: 0 0 20px -5px rgba(0,0,0,0.5);
  position: absolute;
`

export const LeftMenu: FC = () => {
  return (
    <LeftWrapper>
      <div>LeftMenu</div>
    </LeftWrapper>
  )
}

export default LeftMenu;