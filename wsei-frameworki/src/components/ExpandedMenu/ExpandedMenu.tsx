import { FC } from 'React';
import styled from 'styled-components';

const TopMenu = styled.ul`

`

const MenuLi = styled.li`

`

export const ExpandedMenu: FC = () => {
  return (
    <TopMenu>Menu
      <MenuLi>Home</MenuLi>
      <MenuLi>Publications</MenuLi>
      <MenuLi>People</MenuLi>
      <MenuLi>Entities</MenuLi>
      <MenuLi>Administration</MenuLi>
    </TopMenu>
  )
}

export default ExpandedMenu;