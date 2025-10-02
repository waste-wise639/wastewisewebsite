import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import type { ReactNode, FC } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const initialSystemTheme: Theme = systemPrefersDark ? "dark" : "light";

  const [theme, setThemeState] = useState<Theme>(initialSystemTheme);

  const applyThemeClass = useCallback((newTheme: Theme) => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(
      newTheme === "light" ? "light-theme" : "dark-theme"
    );
  }, []);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      applyThemeClass(newTheme);
      localStorage.setItem("theme", newTheme);
    },
    [applyThemeClass]
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      applyThemeClass(initialSystemTheme);
    }
  }, [setTheme, initialSystemTheme, applyThemeClass]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
      setTheme,
    }),
    [theme, toggleTheme, setTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
