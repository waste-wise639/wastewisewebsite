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
    /** Sets the theme and saves the preference to localStorage */
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
  
  // Helper function to get the current system preference
  const getSystemTheme = (): Theme => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };
  
  export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    // 1. Initialize state with a default value (will be overwritten in useEffect)
    const [theme, setThemeState] = useState<Theme>("light"); 
  
    // Function to apply class to body
    const applyThemeClass = useCallback((newTheme: Theme) => {
      document.body.classList.remove("light-theme", "dark-theme");
      document.body.classList.add(
        newTheme === "light" ? "light-theme" : "dark-theme"
      );
    }, []);
  
    // Setter function that updates state, class, and local storage (user action)
    const setTheme = useCallback(
      (newTheme: Theme) => {
        setThemeState(newTheme);
        applyThemeClass(newTheme);
        localStorage.setItem("theme", newTheme); // User action saves preference
      },
      [applyThemeClass]
    );
    
    // Internal function to set theme WITHOUT saving to local storage (for system sync)
    const setInternalTheme = useCallback(
      (newTheme: Theme) => {
        setThemeState(newTheme);
        applyThemeClass(newTheme);
      },
      [applyThemeClass]
    );
  
    useEffect(() => {
      // --- Initial Load Logic ---
      const savedTheme = localStorage.getItem("theme") as Theme;
      const initialSystemTheme = getSystemTheme();
  
      if (savedTheme) {
        // If user saved a preference, use it
        setInternalTheme(savedTheme); 
      } else {
        // Otherwise, use the current system theme (without saving it)
        setInternalTheme(initialSystemTheme); 
      }
  
      // --- System Setting Listener: The fix for automatic updates ---
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      
      // Handler function that fires on system theme change
      const handler = (e: MediaQueryListEvent) => {
        // Check if the user has a theme saved in local storage
        const hasSavedPreference = localStorage.getItem("theme");
        
        // ONLY change the theme if the user has NOT set a manual preference
        if (!hasSavedPreference) {
          const newSystemTheme: Theme = e.matches ? "dark" : "light";
          setInternalTheme(newSystemTheme);
        }
        // If a preference exists, we ignore the system change
      };
  
      // Attach the listener
      mediaQuery.addEventListener("change", handler);
      
      // Cleanup: Remove the listener when the component unmounts
      return () => mediaQuery.removeEventListener("change", handler);
    }, [setInternalTheme]); // Dependency ensures the effect can call the internal setter
  
    // Toggle function uses the public setter (which saves to local storage)
    const toggleTheme = useCallback(() => {
      setTheme(theme === "light" ? "dark" : "light");
    }, [theme, setTheme]);
  
    const contextValue = useMemo(
      () => ({
        theme,
        toggleTheme,
        setTheme, // Public setter is used for user interaction
      }),
      [theme, toggleTheme, setTheme]
    );
  
    return (
      <ThemeContext.Provider value={contextValue}>
        {children}
      </ThemeContext.Provider>
    );
  };