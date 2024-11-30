import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

interface MenuItemProps {
  children: React.ReactNode;
  to: string;
  toggle: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, to, toggle }) => {
  return (
    <Link to={to} onClick={toggle}>
      <Text display="block">
        {children}
      </Text>
    </Link>
  )
}

export default MenuItem