import Portfolio from "../portfolio"
import { ThemeProvider } from "@/components/theme-provider"

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Portfolio />
    </ThemeProvider>
  )
}
