import { FabButton } from "@components/Button/FabButton";
import { FitnessCard } from "@components/FitnessCard";
import { TitleHeader } from "@components/Header/TitleHeader";
import { Heading, SectionList, Text } from "native-base";
import { useState } from "react";

export function Workouts() {
    const [data, setData] = useState([
        {
            title: 'Treino Atual',
            data: ['Puxada Frontal', 'Remada curva'],
        },
        {
            title: 'Histórico',
            data: ['Puxada Frontal'],
        },
    ])
    return(
        <>
            <TitleHeader title="Treinos"/>
            <SectionList
                px={4}

                sections={data}
                keyExtractor={item => item}
                renderSectionHeader={({section}) => (
                    <Heading color="red.500" fontSize="sm" fontFamily="body" mt={4} mb={4}>{section.title}</Heading>
                )}

                renderItem={({item}) => (
                    <FitnessCard />
                )}

                contentContainerStyle={data.length === 0 && {flex: 1, justifyContent: 'center'}}
                ListEmptyComponent={() => (
                    <Text color="gray.100" textAlign="center">
                        Clique no + e cadastre um treino!
                    </Text>
                )}
            />
            <FabButton bottom={24}/>
        </>
    )
}