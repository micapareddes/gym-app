import { Image, VStack } from "native-base";

import BackgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'

export function SignIn() {
    return(
        <VStack flex={1} bg="gray.700">
            <Image
                source={BackgroundImg}
                alt="Imagem de pessoas treinando na bicicleta dentro de uma academia"
                resizeMode="contain"
                position="absolute"
            />
            
            <Logo />
            
        </VStack>
    )
} 