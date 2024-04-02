import { IButtonProps, Button } from "native-base"
import { FlatList } from "react-native"
import { useRef, useState } from "react"

type Props = IButtonProps & {
    name: string
    isActive: boolean
}

const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']

function FilterPill({name, isActive, ...rest}: Props) {
    return(
        <Button 
            width={24}
            py={2}
            mr={3}
            backgroundColor="gray.600"
            rounded="full"
            _pressed={{
                backgroundColor: "red.500",
                _text: {
                    color: "white",
                    fontFamily: "bold"
                }
            }}
            _text={{
                color: "gray.200",
            }}
            isPressed={isActive}
            {...rest}
        >
            {name}
        </Button>
    )
}

export function DaysFilter() {
    const flatListRef = useRef<FlatList>(null)

    const [isSelected, setIsSelected] = useState(0)

    function handleIsSelected(dayIndex: number) {
        setIsSelected(dayIndex)
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({animated: true, index: dayIndex})
        }
    }

    return(
        <FlatList 
            ref={flatListRef}
            data={days}
            keyExtractor={item => item}
            renderItem={({item, index}) => (
                <FilterPill
                    name={item} 
                    isActive={index === isSelected}
                    onPress={() => handleIsSelected(index)}
                />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}

            style={{maxHeight: 35, paddingHorizontal: 16, marginTop: 16}}
        />
    )
}