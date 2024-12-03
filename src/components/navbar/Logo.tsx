import { Box, Image, Text } from "@chakra-ui/react"
import logo from "../../assets/logo.png"

export default function Logo(props: any) {
  return (
    <Box width="fit-content" {...props}>
      <Text fontWeight="bold">
        <Image height="1em" src={logo} alt="logo"/>
      </Text>
    </Box>
  )
}