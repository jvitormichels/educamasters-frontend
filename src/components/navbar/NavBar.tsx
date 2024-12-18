import { useState } from "react";

import NavBarContainer from "./NavBarContainer";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import MenuLinks from "./menu-links/";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks toggle={toggle} isOpen={isOpen} />
    </NavBarContainer>
  )
}

export default NavBar