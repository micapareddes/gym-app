import {Button as NativeBaseButton, IButtonProps} from 'native-base'

type Props = IButtonProps & {
    variant?: 'default' | 'outline' 
    size?: 'sm' | 'lg'
}

export function Button({variant='default', size='lg', ...rest}: Props) {
    return(
        <NativeBaseButton 
            width={size === 'lg' ? 'full' : 'container'}
            py={size === 'lg' ? '10px' : '6px'}
            px={size === 'lg' ? '24' : '18px'}
            bg={variant === "outline" ? "transparent" : "red.500"}
            borderWidth={1}
            borderColor={variant === "outline" ? "red.500" : "transparent"}
            rounded="full"
            _pressed={{
                bg: variant === "outline" ? "red.500" : "red.700",
                _text: {
                    color: "white"
                }
            }}
            _text={{
                color: variant === "outline" ? "red.500" : "white", 
                fontFamily: "bold",
                fontSize: "md",
                width: 'full',
            }}
            {...rest}
        />
    )
}