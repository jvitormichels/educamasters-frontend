import { Box, Stack } from "@chakra-ui/react"
import MenuItem from "./MenuItem"

interface MenuLinksProps {
  isOpen: boolean;
}

const MenuLinks: React.FC<MenuLinksProps> = ({ isOpen }) => {
  return (
    <Box display={{ base: isOpen ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
      <Stack
        gap={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Cursos</MenuItem>
        <MenuItem to="/about">Sobre</MenuItem>
        <MenuItem to="/contact">Contato</MenuItem>
      </Stack>
    </Box>
  )
}

export default MenuLinks