import { HStack, Heading, Text, View } from "native-base";

type Props = {
    excerciseName: string

}

export function ExcerciseHeader({ excerciseName }: Props) {
    return(
        <HStack pt={16} pb={5} px={4} alignItems="center" justifyContent="space-between">
            <Heading
                color="gray.100"
                fontFamily="bold"
                fontSize="xl"
            >
                { excerciseName }
            </Heading>
            <View
                px={3}
                py={1}
                rounded="full"
                borderWidth={1}
                borderColor="red.500"
            >
                <Text
                    color="red.500"
                    fontFamily="body"
                    fontSize="xs"
                >
                    Costas
                </Text>
            </View>
        </HStack>
    )
}