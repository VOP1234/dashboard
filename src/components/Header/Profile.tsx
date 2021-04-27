import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
      <Box
        mr='4'
        textAlign='right'
      >
        <Text>Vitor Pereira</Text>
        <Text
          color='gray.300'
          fontSize='small'
        >
          vop1234@hotmail.com
        </Text>
      </Box>

      <Avatar size='md' name='Vitor Pereira' src='' />

    </Flex>
  )
}