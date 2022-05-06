import { createTheme, useTheme } from '@rneui/themed';

// const { theme } = useTheme();

export const themeProvider = createTheme({
    // ...theme,
    myColors: {
        PRIMARY: "#028174",
        SECONDARY: "#0AB68B",
        TERTIARY: "#92DE8B",

        BACKGROUND: "#FFE3B3",
    }
});
