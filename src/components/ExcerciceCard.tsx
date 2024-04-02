import { HStack, Heading, Icon, Image, Text, VStack } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {

}

export function ExcerciceCard({...rest}: Props) {
    return(
        <TouchableOpacity {...rest}>
            <HStack
                backgroundColor="gray.500"
                borderRadius={4}
                p={2}
                pr={4}
                mb={3}
                alignItems="center"
            > 
                <Image 
                    source={{ uri: 'https://github.com/micapareddes.png' }}
                    alt="foto do usuário"
                    w={16}
                    h={16}
                    mr={4}
                    rounded="md"
                    resizeMode="center"
                />
                <VStack flex={1}>
                    <Heading
                        fontFamily="bold"
                        fontSize="lg"
                        color="white"
                        mb={1}
                    >
                        Puxada Frontal
                    </Heading>
                    <Text
                        fontFamily="body"
                        fontSize="sm"
                        color="gray.200"                
                    >
                        Costas
                    </Text>
                </VStack>
                <Icon 
                    as={Entypo}
                    name="chevron-thin-right"
                    color="gray.300"
                />
            </HStack>
        </TouchableOpacity>
    )
}