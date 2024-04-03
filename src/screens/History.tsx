import { HistoryCard } from "@components/HistoryCard";
import { TitleHeader } from "@components/TitleHeader";
import { Heading, Text, VStack } from "native-base";
import { useState } from "react";
import { SectionList } from "react-native";

export function History() {
    const [data, setData] = useState([
        {
            title: '26 de Março',
            data: ['Puxada Frontal', 'Remada curva'],
        },
        {
            title: '25 de Março',
            data: ['Puxada Frontal'],
        },
    ])

    return(
        <VStack flex={1} px={4}>
            <TitleHeader title="Histórico de Excercícios"/>
            <SectionList
                sections={data}
                keyExtractor={item => item}
                renderSectionHeader={({section}) => (
                    <Heading color="gray.200" fontSize="sm" fontFamily="body" mt={4} mb={4}>{section.title}</Heading>
                )}
                renderItem={({item}) => (
                    <HistoryCard category="costas" name="remada baixa" time="08:13"/>
                )}
                contentContainerStyle={data.length === 0 && {flex: 1, justifyContent: 'center'}}
                ListEmptyComponent={() => (
                    <Text color="gray.100" textAlign="center">
                        Você não fez nenhum excercício ainda :( {'\n'}
                        Bora treinar hoje?
                    </Text>
                )}
            />
        </VStack>
    )
}