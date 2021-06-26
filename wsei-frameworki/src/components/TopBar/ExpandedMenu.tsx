import { FC } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';


const MenuHeader = styled.div`
  width: 250px;
  height: 35px;
  border: 1px solid red;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    margin: 5px;
  }
`

const MenuLi = styled.li`
  position: relative;
  top: 250px;
  padding: 10px;
  list-style: none;
  text-align: left;
  display: flex;
  align-items: center;
  img{
    padding: 5px;
  }
`

export const ExpandedMenu: FC = () => {
	const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
	return (
		<div>
			<div ref={wrapperRef}>
                <MenuHeader onClick={toggleDropdown}>
                  <img src="./media/icons/house2.png"/>Home
                  <img src="./media/icons/arrow-down.png"/>
                </MenuHeader>
				{dropdownOpen &&
					<>
						
            <MenuLi><img src="./media/icons/house2.png"/>Home</MenuLi>
            <MenuLi><img src="./media/icons/publications.png"/>Publications</MenuLi>
            <MenuLi><img src="./media/icons/people.png"/>People</MenuLi>
            <MenuLi><img src="./media/icons/entities.png"/>Entities</MenuLi>
            <MenuLi><img src="./media/icons/administration.png"/>Administration</MenuLi>

            <MenuLi><img src="./media/icons/administration.png"/>Client contract</MenuLi>
            <MenuLi><img src="./media/icons/administration.png"/>Supplier contract</MenuLi>
            <MenuLi><img src="./media/icons/entities2.png"/>Corporate</MenuLi>
            <MenuLi><img src="./media/icons/entities2.png"/>Group Norms</MenuLi>
            <MenuLi><img src="./media/icons/administration.png"/>Real estate contracts</MenuLi>
            
					</> 
				}
			</div>
			{/* <div onClick={closeDropdown}>Close menu after this click</div> */}
		</div>
	)
}

export default ExpandedMenu;