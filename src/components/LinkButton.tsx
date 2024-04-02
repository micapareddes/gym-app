import {Button as NativeBaseButton, IButtonProps, Text} from 'native-base'

type Props = IButtonProps & {
}

export function LinkButton({...rest}: Props) {
    return (
        <NativeBaseButton 
            variant="link"
            p={0}
            _text={{
                color: "red.500",
                fontFamily: "bold",
                fontSize: "sm"
            }}
            {...rest}
        />
    )
}