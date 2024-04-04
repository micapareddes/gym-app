import { HStack, Text, VStack } from "native-base";

type Props = {

}

export function Anotation({}: Props) {
    return(
        <HStack
            bg="gray.600"
            rounded="xl"
            alignItems="center"
            justifyContent="space-between"
            px={5}
            py={4}
            mb={3}
        >
            <Text
                color="gray.100"
                fontFamily="medium"
                fontSize="md"
                mr={5}
                flex={1}
            >
                08 10 10 20kg
            </Text>
            <Text
                color="gray.200"
                fontFamily="body"
                fontSize="xs" 
            >
                26 de Março
            </Text>
        </HStack>
    )
}