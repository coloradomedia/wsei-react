import { FC } from 'React';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { ExpandedMenu } from '../ExpandedMenu/ExpandedMenu';

const TopBarWrapper = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0 0 20px -5px rgba(0,0,0,0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 10px; */
`

const InnerWrapper = styled.div`
  width: 1200px;
  background: ${Colors.white};
`

const CustomImg = styled.img`
  max-width: 30px;
  /* padding: 5px; */
  margin-left: 15px;
`

const InputWrapper = styled.div`

`

const Input = styled.input`
  /* display: flex; */
  /* justify-content: center; */
  width: 500px;
`

const RightIcons = styled.div`
  margin-right: 20px;
`

export const TopBar: FC = () => {
  return (
    <TopBarWrapper>
      <CustomImg src="./media/logo.png" />
      <ExpandedMenu />
      <InputWrapper>    
        <Input type="text" placeholder="Search" />
        <CustomImg src="./media/icons/search.png" />
      </InputWrapper> 
      
      <RightIcons>
        <CustomImg src="./media/icons/house.png" />
        <CustomImg src="./media/icons/comments.png" />
        <CustomImg src="./media/icons/bell.png" />
      </RightIcons>

    </TopBarWrapper>
  )
}



export default TopBar;