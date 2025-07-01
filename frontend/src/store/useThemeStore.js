import { create } from "zustand";

export const useThemeStore = create((set) => {
  // Get stored theme or default to "coffee"
  const storedTheme = localStorage.getItem("streamify-theme") || "coffee";
  
  // Apply the theme to the HTML element
  if (typeof document !== "undefined") { // Check for SSR (Next.js/Remix)
    document.documentElement.setAttribute("data-theme", storedTheme);
  }

  return {
    theme: storedTheme,
    setTheme: (theme) => {
      localStorage.setItem("streamify-theme", theme);
      document.documentElement.setAttribute("data-theme", theme); // Apply theme
      set({ theme });
    },
  };
});