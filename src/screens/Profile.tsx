import { Button } from "@components/Button/Button";
import { Input } from "@components/Input";
import { ProfilePhoto } from "@components/ProfilePhoto";
import { TitleHeader } from "@components/Header/TitleHeader";
import { Center, ScrollView, Skeleton, Text, VStack, View } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const PHOTO_SIZE = 33

export function Profile() {
    const [photoIsLoading, setPhotoIsLoading] = useState(false)
    return(
        <VStack mb={32}>
            <TitleHeader title="Perfil" goBack/>
        <ScrollView>
            <Center px={4}>
                {
                    photoIsLoading ? 
                        <Skeleton
                            w={PHOTO_SIZE} 
                            h={PHOTO_SIZE}
                            rounded="full"
                            startColor="gray.300"
                            endColor="gray.500"
                        />
                    : 
                        <ProfilePhoto 
                            source={{ uri: 'https://github.com/micapareddes.png' }} 
                            alt="Foto de perfil do usuário" 
                            size={PHOTO_SIZE}
                        />
                }

                <TouchableOpacity>
                    <Text color="red.500" fontFamily="bold" fontSize="md" mt={3} mb={8}>
                        Alterar foto
                    </Text>
                </TouchableOpacity>

                <Input placeholder="Nome"/>
                <Input 
                    placeholder="E-mail"
                    value="micaela@gmail.com" 
                    isDisabled
                />
            </Center>
            <VStack px={7} mt={12} mb={20}>
                <Text fontFamily="bold" fontSize="md" color="gray.200" mb={4}>
                    Alterar senha
                </Text>
                <Input
                    placeholder="Senha antiga"
                    secureTextEntry
                />
                <Input
                    placeholder="Nova Senha"
                    secureTextEntry
                />
                <Input
                    placeholder="Confirmar nova Senha"
                    secureTextEntry
                />
                <Button>Salvar</Button>
            </VStack>
        </ScrollView>
        </VStack>
    )
}