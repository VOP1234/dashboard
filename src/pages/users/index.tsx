import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg="gray.800" p='8'>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size='lg' fontWeight='normal'>Usuários</Heading>

            <Button
              as='a'
              size='sm'
              fontSize='sm'
              colorScheme="blue"
              leftIcon={<Icon as={RiAddLine} fontSize='20' />}
            >
              Criar Novo
            </Button>
          </Flex>


          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' width='8'>
                  <Checkbox colorScheme="blue" />
                </Th>
                <Th>Usuários</Th>
                <Th>Data de Cadastro</Th>
                <Th width='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px='6'> <Checkbox colorScheme="blue" /></Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vitor Pereira</Text>
                    <Text fontSize='sm' color='gray.300'> vop1234@hotmail.com </Text>
                  </Box>
                </Td>
                <Td>
                  27 de abril, 2021
                </Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme="blue"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                    </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px='6'> <Checkbox colorScheme="blue" /></Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vitor Pereira</Text>
                    <Text fontSize='sm' color='gray.300'> vop1234@hotmail.com </Text>
                  </Box>
                </Td>
                <Td>
                  27 de abril, 2021
                </Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme="blue"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                    </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px='6'> <Checkbox colorScheme="blue" /></Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vitor Pereira</Text>
                    <Text fontSize='sm' color='gray.300'> vop1234@hotmail.com </Text>
                  </Box>
                </Td>
                <Td>
                  27 de abril, 2021
                </Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme="blue"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                    </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />

        </Box>
      </Flex>


    </Box>
  )
}