import { HStack, Text } from "native-base";

type Props = {
    title: string
}

export function TitleHeader({title}: Props) {
    return(
        <HStack pt={16} pb={5} px={4} alignItems="center" justifyContent="center">
            <Text 
                color="gray.100"
                fontFamily="bold"
                fontSize="xl"
            >{title}</Text>
        </HStack>
    )
}