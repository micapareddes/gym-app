import { Fab, IFabProps } from 'native-base'
import PlusSvg from '@assets/Plus.svg'

type Props = IFabProps & {
}

export function FabButton({...rest}: Props) {
    return (
        <Fab 
            bg='red.500'
            rounded='full'
            width='52px'
            height='52px'
            icon={
                <PlusSvg 
                    width={32} 
                    height={32}
                />
            }
            {...rest}
        >
            
        </Fab>
    )
}