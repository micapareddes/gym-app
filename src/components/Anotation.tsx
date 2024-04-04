import { HStack, Text, VStack } from "native-base";

type Props = {

}

export function Anotation({}: Props) {
    return(
        <VStack
            bg="gray.600"
            rounded="xl"
            alignItems="center"
            px={5}
            py={4}
            mb={3}
        >
            <Text
                color="gray.100"
                fontFamily="medium"
                fontSize="md"
                numberOfLines={1}
                alignSelf="flex-start"
            >
                10 10 8 20kg
            </Text>
            <Text
                color="gray.200"
                fontFamily="body"
                fontSize="xs" 
                alignSelf="flex-end"  
            >
                26 de Março
            </Text>
        </VStack>
    )
}