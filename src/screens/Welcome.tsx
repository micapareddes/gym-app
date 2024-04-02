import { Center, Heading, Image, Text, VStack, ScrollView, View, Link } from "native-base";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import BackgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'
import { Button } from "@components/Button";
import { LinkButton } from "@components/LinkButton";


export function Welcome() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleCreateAccount() {
        navigation.navigate('signin')
    }
    
    function handleLogin() {
        navigation.navigate('login')
    }

    return(
        <View flex={1} bg='gray.700'>
            <Image 
                source={BackgroundImg}
                defaultSource={BackgroundImg}
                alt="Imagens de academia em branco e preto"
                position='absolute'
            />

            <View 
                flex={1} 
                mt='110px'
                mb={8}
                mx={3}
                alignItems='center'
            >
                <View flex={1}>
                <Logo />
                </View>
                
                
                <Center mb={8} alignItems='start'>
                    <Heading
                        color='white'
                        fontFamily='heading'
                        fontSize='xxl'
                        mb={2}
                    >
                        Frase de impacto para te motivar!
                    </Heading>
                    <Text
                        color='gray.100'
                        fontFamily='body'
                        fontSize='sm'                
                    >
                        Mantenha seu treino organizado e facilmente acessível. Basta abrir sua conta e começar a treinar!
                    </Text>
                </Center>
                <Button 
                    mb={4}
                    onPress={handleLogin}
                >
                    Fazer login
                </Button>

                <View flexDirection={"row"}>
                    <Text 
                        color='gray.100'
                        fontFamily='body'
                        fontSize='sm'
                    >
                        Primeira vez?
                    </Text>
                    <LinkButton 
                        onPress={handleCreateAccount}
                    > 
                        Crie uma conta
                    </LinkButton>
                </View>
                
            </View>
        </View>
    )
} 