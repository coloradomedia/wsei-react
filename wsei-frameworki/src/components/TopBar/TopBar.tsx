import { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';

const TopBarWrapper = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0 0 15px -5px rgba(0,0,0,0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 10px; */
`

const InnerWrapper = styled.div`
  width: 1200px;
  background: ${Colors.white};
`
const Logo = styled.img`
  max-width: 30px;
  margin-left: 25px;
`

const ImgCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #e9e9e9;
  margin-left: 10px;
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  :nth-child(1){
    background: none;
  }
`

const Notify = styled.div`
  width: 17px;
  height: 13px;
  border-radius: 7px;
  background-color: #8792fa;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 10px;
  text-align: center;
  line-height: 13px;
  color: white;
  z-index: 1;
`

const CustomImg = styled.img`
  max-width: 30px;
  padding: 5px;
  z-index: 1;
`

const InputWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  // max-height: 20px;
  display: flex;
  align-items: center;
  position: relative;
`

const Input = styled.input`
  display: flex;
  align-items: center;
  width: 500px;
  border: none;
  height: 23px;
  text-align: center;
  margin: 1px;
  font-size: 15px;
`

const SearchBtn = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const SearchImg = styled.img`
  max-width: 30px;
  // margin-top: 4px;
  // margin: 0 5px;
  // position: relative;
  // top: 50%;
  padding: 3px;
`

const RightIcons = styled.div`
  margin-right: 30px;
  display: flex;
`

export const TopBar: FC = () => {
  return (
    <TopBarWrapper>
      <Logo src="./media/logo.png" />
      <ExpandedMenu />
      <InputWrapper>    
        <Input type="text" placeholder="Search Legalcluster" />
        <SearchBtn>
          <SearchImg src="./media/icons/search.png" />
        </SearchBtn>
      </InputWrapper> 
      
      <RightIcons>
        <ImgCircle>
          <CustomImg src="./media/icons/house.png" />
        </ImgCircle>
        <ImgCircle>
          <CustomImg src="./media/icons/comments.png" />
          <Notify>3</Notify>
        </ImgCircle>
        <ImgCircle>
          <CustomImg src="./media/icons/bell.png" />
          <Notify>3</Notify>
        </ImgCircle>
      </RightIcons>

    </TopBarWrapper>
  )
}



export default TopBar;