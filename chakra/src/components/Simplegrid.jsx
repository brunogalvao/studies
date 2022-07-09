import {
    Box,
    Image,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    ListItem,
    UnorderedList,
    List,
    ListIcon,
    Icon,
    Spacer
} from "@chakra-ui/react";

export default function Simplegrid(props) {
    return (
        <SimpleGrid
            columns={1}
            spacing={2}>
            <Box
                bgGradient='linear(to-r, teal.100, green.100)'
                shadow={'md'}>
                <Text
                    py={4}
                    fontSize={{
                        base: '4xl',
                        md: '5xl',
                        xl: '6xl'
                    }}
                    fontWeight='bold'
                    textAlign={'center'}
                    color={'gray.500'}
                >

                    {props.titulo}

                </Text>
            </Box>

            <Flex>
                <Flex
                    alignItems='center'
                    my={4}
                    mx={6}>
                    <Text
                        mr='4'>{props.autor}</Text>
                    <Image
                        src={props.img}
                        borderRadius="50%"
                        border="4px"
                        borderColor="orange.500"
                        boxSize="60px"
                        objectFit="cover"></Image>
                </Flex>

                <Spacer />

                <Flex
                    alignItems='center'
                    mr={4}>
                    <List>
                        <ListItem>
                            GitHub
                        </ListItem>
                        <ListItem>LinkDin</ListItem>
                        <ListItem>Twitter</ListItem>
                    </List>
                </Flex>

            </Flex>

            <Flex
                bgGradient='linear(to-r, gray.50, gray.100)'>
                <Text
                    mx={6}
                    py={4}> {props.content} </Text>
            </Flex>

        </SimpleGrid>
    )
}