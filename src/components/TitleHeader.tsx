import { Button, HStack, Icon, Text } from "native-base";
import ArrowLeft from "@assets/arrow-left.svg"
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

type Props = {
    title: string
    goBack?: boolean
}

export function TitleHeader({title, goBack=false}: Props) {
    const navigation = useNavigation()

    function handleGoBack() {
        navigation.goBack()
    }

    return(
        <HStack pt={16} pb={5} px={3} alignItems="center" justifyContent="center">
            {
                goBack && (
                    <TouchableOpacity 
                        onPress={handleGoBack}
                    >
                        <ArrowLeft width={24} height={24} />
                    </TouchableOpacity>
                )
            }
            <Text 
                color="gray.100"
                fontFamily="bold"
                fontSize="xl"
                flex={1}
                textAlign="center"
            >{title}</Text>
        </HStack>
    )
}