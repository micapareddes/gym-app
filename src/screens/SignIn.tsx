import { Center, Heading, Image, Text, View, ScrollView } from "native-base";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import Logo from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'

import { Button } from "@components/Button/Button";
import { LinkButton } from "@components/Button/LinkButton";
import { Input } from "@components/Input";


export function Signin() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleCreateAccount() {
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

            <ScrollView 
                contentContainerStyle={{
                    flexGrow: 1,
                    marginTop: 110, 
                    marginBottom: 32,
                    marginHorizontal: 12,
                    alignItems: 'center'
                }} 
                showsVerticalScrollIndicator={false}
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
                        Crie uma conta!
                    </Heading>
                    <Input 
                        placeholder="Nome"
                    />
                    
                    <Input 
                        placeholder="E-mail"
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                    <Input 
                        placeholder="Senha"
                        secureTextEntry
                    />
                    
                    <Input 
                        placeholder="Confirmar s senha"
                        secureTextEntry
                    />
                </Center>
                <Button mb={4}>Criar conta</Button>

                <View flexDirection={"row"}>
                    <Text 
                        color='gray.100'
                        fontFamily='body'
                        fontSize='sm'
                    >
                        Já tem uma conta?
                    </Text>
                    <LinkButton
                        onPress={handleLogin}
                    >
                         Faça login
                    </LinkButton>
                </View>
                
            </ScrollView>
        </View>
    )
} 