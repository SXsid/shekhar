"use client";
import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      {...props}
      defaultTheme="dark"
      enableSystem={false}
      attribute="class"
      storageKey="app-theme" // Add storage key
      disableTransitionOnChange={false} // Optional: smooth transitions
    >
      {children}
    </NextThemeProvider>
  );
}

