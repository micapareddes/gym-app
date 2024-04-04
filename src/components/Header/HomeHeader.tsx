import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { ProfilePhoto } from "../ProfilePhoto";

import { MaterialIcons } from '@expo/vector-icons'

export function HomeHeader() {
    return(
        <HStack pt={16} pb={5} px={4} alignItems="center">
            <ProfilePhoto 
                source={{ uri: 'https://github.com/micapareddes.png' }}
                alt="foto do usuário"
                size={16}
                mr={4}
            />
            <VStack flex={1}>
                <Text 
                    color={'gray.100'}
                    fontFamily={"body"}
                    fontSize={"sm"}
                >Bem-vindo 👋</Text>

                <Heading 
                    color={'gray.100'} 
                    fontFamily={"bold"}
                    fontSize={"lg"}
                >Micaela</Heading>
            </VStack>
            <Icon 
                as={MaterialIcons}
                name="logout"
                color="gray.200"
                size={7}
            />
        </HStack>
    )
}