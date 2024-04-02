import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Welcome } from '@screens/Welcome'
import { Signin } from '@screens/Signin'
import { Login } from '@screens/Login'

type AuthRoutes = {
    welcome: undefined
    login: undefined
    signin: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AuthRoutes() {
    return(
        <Navigator 
            initialRouteName='welcome'
            screenOptions={{ headerShown: false }}
        >
            <Screen 
                name='welcome'
                component={Welcome}
            />

            <Screen 
                name='login'
                component={Login}
            />

            <Screen 
                name='signin'
                component={Signin}
            />
        </Navigator>
    )
}