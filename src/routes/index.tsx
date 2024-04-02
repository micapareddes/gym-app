import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AuthRoutes } from '@routes/auth.routes'
import { AppRoutes } from '@routes/app.routes'

import { useTheme } from 'native-base';

export function Routes() {
    const { colors } = useTheme()
    const theme = DefaultTheme;
    theme.colors.background = colors.gray[700]
    return(
        <NavigationContainer theme={theme}>
            <AppRoutes/>
        </NavigationContainer>
    )
}