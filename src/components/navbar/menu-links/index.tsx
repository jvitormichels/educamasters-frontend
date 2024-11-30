import { Box, Stack } from "@chakra-ui/react"
import MenuItem from "./MenuItem"

interface MenuLinksProps {
  isOpen: boolean;
  toggle: () => void;
}

const MenuLinks: React.FC<MenuLinksProps> = ({ isOpen, toggle }) => {
  return (
    <Box display={{ base: isOpen ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
      <Stack
        gap={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem toggle={toggle} to="/">Cursos</MenuItem>
        <MenuItem toggle={toggle} to="/about">Sobre</MenuItem>
        <MenuItem toggle={toggle} to="/contact">Contato</MenuItem>
      </Stack>
    </Box>
  )
}

export default MenuLinks