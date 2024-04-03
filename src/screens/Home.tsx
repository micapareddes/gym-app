import { Center, FlatList, HStack, Heading, ScrollView, Text, VStack } from "native-base";

import { DaysFilter } from "@components/DaysFilter";
import { ExcerciceCard } from "@components/ExcerciceCard";
import { HomeHeader } from "@components/HomeHeader";

import { useState } from "react";

export function Home() {
    const [excercises, setExcercices] = useState(['Puxada Frontal', 'Remada Curva',])

    return(
        <VStack flex={1}>
            <HomeHeader />
            <DaysFilter />
            <VStack flex={1} px={4}>
                <HStack 
                    mt={12} 
                    mb={3}
                    justifyContent="space-between" 
                >
                    <Heading
                        color="gray.200"
                        fontFamily="bold"
                        fontSize="md"
                    >
                        Bíceps + Costas
                    </Heading>
                    <Text
                        color="gray.200"
                        fontFamily="body"
                        fontSize="sm"
                    >
                        {excercises.length}
                    </Text>
                </HStack>
                <FlatList 
                    data={ excercises }
                    keyExtractor={ item => item }
                    renderItem={ () => <ExcerciceCard /> }
                    showsHorizontalScrollIndicator={ false }
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />
            </VStack>
        </VStack>
    )
}