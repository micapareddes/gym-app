import { HStack, Image, Text, VStack } from "native-base";
import { FlatList, TouchableOpacity } from "react-native";

import { Anotation } from "@components/Anotation";
import { ExcerciseHeader } from "@components/Header/ExcerciseHeader";

import RoundedPlusSvg from "@assets/rounded-plus.svg"
import { useState } from "react";
import { Button } from "@components/Button/Button";

type Props = {

}

export function Excercise({}: Props) {
    const [notes, setNotes] = useState(['nota1', 'nota2', ])
    return(
        <>
        <ExcerciseHeader excerciseName="Puxada frontal"/>
        <VStack mx={4} >
            <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                alt="image"
                height={180}
                rounded="lg"
                resizeMode="cover"
            />
            <HStack
                    justifyContent="space-between" 
                    alignItems="center"
                    mb={3}
                    mt={12}
                >
                    <Text
                        color="gray.200"
                        fontFamily="body"
                        fontSize="sm"
                    >
                        Notas
                    </Text>
                    <TouchableOpacity style={{height: 18}} activeOpacity={0.6}>
                        <RoundedPlusSvg height={18} width={18}/>
                    </TouchableOpacity>
                    <Button>Marcar como concluido</Button>
            </HStack>
            <FlatList 
                data={notes}
                keyExtractor={item => item}
                renderItem={() => (
                    <Anotation />
                )}
            />
        </VStack>
        </>
    )
}