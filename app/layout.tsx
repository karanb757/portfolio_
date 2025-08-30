import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider"
import Navbar from "./components/Navbar/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], 
});

export const metadata: Metadata = {
  title: "karan_757",
  description: "potfolio website",
  icons: {
    icon: "/my_favicon.ico",   
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem>
            <Navbar/>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
