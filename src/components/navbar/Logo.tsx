import { Box, Image, Text } from "@chakra-ui/react"

import logo from "../../assets/logo.svg"

export default function Logo(props: any) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        <Image src={logo} alt="logo"/>
      </Text>
    </Box>
  )
}