import { Input as NativeBaseInput, IInputProps } from 'native-base'

export function Input({ ...rest }: IInputProps) {
    return(
        <NativeBaseInput 
            p={4}
            mb={4}
            rounded="full"
            bg="gray.500"
            placeholderTextColor="gray.300"
            borderColor="gray.500"
            fontFamily="body"
            fontSize="md"
            color="white"
            _focus={{
                bg: "gray.700",
                borderColor: "red.500"
            }}
            {...rest}
        />
    )
}