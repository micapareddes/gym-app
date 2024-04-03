import { HStack, Text, VStack } from "native-base";

type Props = {
    category: string
    name: string
    time: string
}

export function HistoryCard({category, name, time}: Props) {
    return(
        <HStack bg="gray.600" alignItems="center" px={5} py={4} mb={3} rounded={4}>
            <VStack flex={1}>
                <Text color="red.500" fontFamily="body" fontSize="sm" textTransform="capitalize">{category}</Text>
                <Text color="gray.100" fontFamily="bold" fontSize="lg" numberOfLines={1}>{name}</Text>
            </VStack>
            <Text color="gray.300" fontFamily="body" fontSize="sm">{time}</Text>
        </HStack>
    )
}