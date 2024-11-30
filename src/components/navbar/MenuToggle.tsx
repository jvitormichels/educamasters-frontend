import React from "react"
import { Box } from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons/Close"
import { TriangleDownIcon } from "@chakra-ui/icons/TriangleDown";

interface MenuToggleProps {
  toggle: () => void
  isOpen: boolean
}

const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <TriangleDownIcon />}
    </Box>
  )
}

export default MenuToggle