import { extendTheme } from "native-base";

export const THEME = extendTheme({
    colors: {
        red: {
            700: '#BD2D20',
            500: '#E23728',
        },
        gray: {
            700: '#121214',
            600: '#202024',
            500: '#29292E',
            400: '#323238',
            300: '#7C7C8A',
            200: '#C4C4CC',
            100: '#E1E1E6',
        },
        white: '#FFF',
    },
    fonts: {
        heading: 'Poppins_700Bold',
        bold: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
        xxl: 28,
    },
    sizes: {
        14: 56,
        25: 110,
        33: 148,
    }
})