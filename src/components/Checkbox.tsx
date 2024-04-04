import { TouchableOpacity } from "react-native";

import { useTheme } from "native-base"

import { MaterialIcons } from '@expo/vector-icons'

export function Checkbox() {
    const { colors } = useTheme()
    
    const bgColor = ''

    function handleOnPress() {}

    return(
        <>
        <TouchableOpacity
            style={{
                height: 15,
                width: 15,
                borderWidth: 1,
                borderColor: colors.red[500],
                borderRadius: 2,
                backgroundColor: bgColor
            }}
            
        >
            <MaterialIcons name="check" color={colors.gray[700]}/>
        </TouchableOpacity>
        </>
    )
}