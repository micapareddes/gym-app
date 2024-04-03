import { HistoryCard } from "@components/HistoryCard";
import { TitleHeader } from "@components/TitleHeader";
import { Text, VStack } from "native-base";

export function History() {
    return(
        <VStack flex={1} px={4}>
            <TitleHeader title="Histórico de Excercícios"/>
            <HistoryCard category="costas" name="remada baixa" time="08:13"/>
            <HistoryCard category="costas" name="remada baixa" time="08:13"/>
        </VStack>
    )
}