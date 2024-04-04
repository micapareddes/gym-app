import { HStack, Text, VStack } from "native-base";
import { useState } from "react";

import { TitleHeader } from "@components/Header/TitleHeader";
import { Input } from "@components/Input";
import { TouchableOpacity } from "react-native";
import { Checkbox } from "@components/Checkbox";

export function NewWorkout() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return(
        <>
            <TitleHeader title="Treino" goBack/>
            <VStack px={4}>
                <Text color="gray.200" fontFamily="body" fontSize="sm" mb={4}>
                    Nome do treino
                </Text>
                <Input placeholder="Nome" mb={8}/>
                <Text color="gray.200" fontFamily="body" fontSize="sm" mb={4}>
                    Dias da semana
                </Text>
                <Input placeholder="Nome" mb={8}/>
                <Text color="gray.200" fontFamily="body" fontSize="sm" mb={4}>
                    Excercícios
                </Text>
                <Input placeholder="Nome" mb={8}/>
                <HStack>
                    <Text color="gray.200" fontFamily="body" fontSize="sm">
                        Marcar como treino atual
                    </Text>
                    <Checkbox />
                </HStack>
            </VStack>
        </>
    )
}