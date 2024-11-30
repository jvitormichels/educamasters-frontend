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
      <Logo w="100px" color={["white", "white", "primary.500", "primary.500"]} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}

export default NavBar