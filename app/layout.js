

import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingChat from "@/components/floating-chat";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider 
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#e5e5e5",
          colorBackground: "#323131",
          colorInputBackground: "#3c3838",
          colorInputText: "#f9f9f9",
          colorText: "#f9f9f9",
          colorTextSecondary: "#bfbfbf",
          borderRadius: "0.625rem",
        },
        elements: {
          formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground",
          card: "bg-card border-border",
          headerTitle: "text-foreground",
          headerSubtitle: "text-muted-foreground",
          socialButtonsBlockButton: "bg-background border-border hover:bg-muted",
          socialButtonsBlockButtonText: "text-foreground",
          formFieldInput: "bg-input border-border text-foreground",
          footerActionLink: "text-primary hover:text-primary/80",
          identityPreviewText: "text-muted-foreground",
          formResendCodeLink: "text-primary hover:text-primary/80",
        }
      }}
    >
    
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        {/* <body className={`${inter.className}`}> */}
        <body className={`${inter.className}`} suppressHydrationWarning={true}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <FloatingChat />
            <Toaster richColors />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
