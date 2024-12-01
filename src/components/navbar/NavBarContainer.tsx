import { Flex } from "@chakra-ui/react"

interface NavBarContainerProps {
  children: React.ReactNode
}

const NavBarContainer: React.FC<NavBarContainerProps> = ({ children }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
    >
      {children}
    </Flex>
  )
}

export default NavBarContainer