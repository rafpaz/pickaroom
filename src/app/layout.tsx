import "./globals.css";

import { Poppins } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import CustomNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className="overflow-x-hidden antialiased">
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Header />
          {children}
          <CustomFooter />
          <PrismicPreview repositoryName={repositoryName} />
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

async function Header() {
  const client = createClient();
  const navigation = await client.getSingle("global_nav");

  return <CustomNavbar {...navigation} />;
}

async function CustomFooter() {
  const client = createClient();
  const footer = await client.getSingle("footer");

  return <Footer {...footer.data} />;
}
