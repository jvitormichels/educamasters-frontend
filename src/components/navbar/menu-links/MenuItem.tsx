import { Link, Text } from "@chakra-ui/react"

interface MenuItemProps {
  children: React.ReactNode;
  to: string
}

const MenuItem: React.FC<MenuItemProps> = ({ children, to }) => {
  return (
    <Link href={to}>
      <Text display="block">
        {children}
      </Text>
    </Link>
  )
}

export default MenuItem