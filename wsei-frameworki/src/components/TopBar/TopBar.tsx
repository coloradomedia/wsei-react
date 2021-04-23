import { FC } from 'React';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';

const Wrapper2 = styled(Wrapper)`
  padding: 10px;
`

const InnerWrapper = styled.div`
  width: 1200px;
  background: ${Colors.white};
`

const CustomImg = styled.img``;

export const TopBar: FC = () => {
  return (
    <Wrapper2>
      <CustomImg src="./media/logo.png" />
      <div>TopBar</div>
    </Wrapper2>
  )
}



export default TopBar;