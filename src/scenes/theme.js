import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// Colour design tokens: 
export const tokens = (mode) => ({
    ...(mode === 'light'
        ? {
            primary: {
                100: "#f9d1d7",
                200: "#f4a3af",
                300: "#ee7587",
                400: "#e9475f",
                500: "#e31937",
                600: "#b6142c",
                700: "#880f21",
                800: "#5b0a16",
                900: "#2d050b"
            },
            purpleAccent: {
                100: "#dcd7ee",
                200: "#baafdd",
                300: "#9786cd",
                400: "#755ebc",
                500: "#5236ab",
                600: "#422b89",
                700: "#312067",
                800: "#211644",
                900: "#100b22"
            },
            white: {
                100: "#ffffff",
                200: "#ffffff",
                300: "#ffffff",
                400: "#ffffff",
                500: "#ffffff",
                600: "#cccccc",
                700: "#999999",
                800: "#666666",
                900: "#333333"
            },
            grey: {
                100: "#fafafc",
                200: "#f6f5fa",
                300: "#f1eff7",
                400: "#edeaf5",
                500: "#e8e5f2",
                600: "#bab7c2",
                700: "#8b8991",
                800: "#5d5c61",
                900: "#2e2e30"
            }
        } : {
            primary: {
                100: "#2d050b",
                200: "#5b0a16",
                300: "#880f21",
                400: "#b6142c",
                500: "#e31937",
                600: "#e9475f",
                700: "#ee7587",
                800: "#f4a3af",
                900: "#f9d1d7"
            },
            purpleAccent: {
                100: "#100b22",
                200: "#211644",
                300: "#312067",
                400: "#422b89",
                500: "#5236ab",
                600: "#755ebc",
                700: "#9786cd",
                800: "#baafdd",
                900: "#dcd7ee"
            },
            white: {
                100: "#333333",
                200: "#666666",
                300: "#999999",
                400: "#cccccc",
                500: "#ffffff",
                600: "#ffffff",
                700: "#ffffff",
                800: "#ffffff",
                900: "#ffffff"
            },
            grey: {
                100: "#2e2e30",
                200: "#5d5c61",
                300: "#8b8991",
                400: "#bab7c2",
                500: "#e8e5f2",
                600: "#edeaf5",
                700: "#f1eff7",
                800: "#f6f5fa",
                900: "#fafafc"
            }
        })
}); 


// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.purpleAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.white[500],
                    }
                } : {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.purpleAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.white[500],
                    }
                })
        },
        typography: {
            fontFamily: ["Source Sans 3", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 14
            },
        },
    };
};


export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => 
                setMode((prev) => (prev === "light" ? "dark" : "light")), // If colour mode is changed, Will look at what the previous mode it was in and do the opposite once pressed.
        }),
        []
    ); 
    
    // Create colour modes as a theme so it becomes an object
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};




