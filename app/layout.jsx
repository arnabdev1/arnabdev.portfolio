import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import StairTransition from "../components/StairTransition";
import ContextWrapper from "../app/context/ContextWrapper";
import { ImageProvider } from "../app/context/imageContext";
import { Providers } from "./providers";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Arnab Dev",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={JetBrainsMono.variable}>
        <Providers>
          <ContextWrapper>
            <ImageProvider>
              <Header />
              <StairTransition />
              <PageTransition>
                <div className="mt-20">{children}</div>
              </PageTransition>
            </ImageProvider>
          </ContextWrapper>
        </Providers>
      </body>
    </html>
  );
}
