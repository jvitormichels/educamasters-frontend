import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

interface MenuItemProps {
  children: React.ReactNode;
  to: string
}

const MenuItem: React.FC<MenuItemProps> = ({ children, to }) => {
  return (
    <Link to={to}>
      <Text display="block">
        {children}
      </Text>
    </Link>
  )
}

export default MenuItem