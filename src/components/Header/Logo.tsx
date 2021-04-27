import { Text } from "@chakra-ui/layout";

export default function Logo() {
  return (
    <Text
      fontSize='3xl'
      fontWeight='bold'
      letterSpacing="tight"
      w='64'
    >
      dashboard
      <Text
        as='span'
        ml='1'
        color="blue.500"
      >
        .
    </Text>
    </Text>
  )
}