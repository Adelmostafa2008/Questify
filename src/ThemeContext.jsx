import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

     const toggletheme = (newTheme) => setTheme(newTheme); 

    return (
        <ThemeContext.Provider value={{ theme, toggletheme }}>
            {children}
        </ThemeContext.Provider>
    )
}