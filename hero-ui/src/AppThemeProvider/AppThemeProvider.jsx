"use client"
import { ThemeProvider } from "next-themes";

const AppThemeProvider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  )
}

export default AppThemeProvider