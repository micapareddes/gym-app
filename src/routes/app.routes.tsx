import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { Excercise } from '@screens/Excercise'
import { History } from '@screens/History'
import { Home } from '@screens/Home'
import { Profile } from '@screens/Profile'
import { Workouts } from '@screens/Workouts'
import { NewWorkout } from '@screens/NewWorkout'

import { Text, View, useTheme } from 'native-base'

import HomeSvg from '@assets/home.svg'
import WorkoutsSvg from '@assets/barbell.svg'
import HistorySvg from '@assets/clock.svg'
import ProfileSvg from '@assets/profile.svg'

type AppRoutes = {
    home: undefined
    workout: undefined
    history: undefined
    profile: undefined
    excercise: undefined
    newWorkout: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen} = createBottomTabNavigator<AppRoutes>()


export function AppRoutes() {
const { sizes, colors } = useTheme()
const iconSize = sizes[8]
    
    return(
        <Navigator 
            screenOptions={{  
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.red[500],
            tabBarInactiveTintColor: colors.gray[300],
            tabBarStyle: {
                position: 'absolute',
                height: 56,
                left: 10,
                right: 10,
                bottom: 30,
                backgroundColor: colors.gray[700],
                borderWidth: 1,
                borderTopWidth: 1,
                borderStyle: 'solid',
                borderColor: colors.gray[500],
                borderTopColor: colors.gray[500],
                borderRadius: 9999,
                paddingBottom: 0,
            },
            }}
        >
            <Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <HomeSvg 
                            fill={color}
                            width={iconSize}
                            height={iconSize}
                        />
                    )
                }}
            />
            <Screen
                name='workout'
                component={Workouts}
                options={{
                    tabBarIcon: ({color}) => (
                        <WorkoutsSvg 
                            fill={color}
                            width={iconSize}
                            height={iconSize}
                        />
                    )
                }}
            />
            <Screen
                name='history'
                component={History}
                options={{
                    tabBarIcon: ({color}) => (
                        <HistorySvg 
                            fill={color}
                            width={iconSize}
                            height={iconSize}
                        />
                    )
                }}
            />
            <Screen
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: ({color}) => (
                        <ProfileSvg 
                            fill={color}
                            width={iconSize}
                            height={iconSize}
                        />
                    )
                }}
            />
            <Screen
                name='excercise'
                component={Excercise}
                options={{tabBarButton: () => null}}
            />
            <Screen
                name='newWorkout'
                component={NewWorkout}
                options={{tabBarButton: () => null}}
            />

        </Navigator>
    )
}