import "./globals.css";

import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import { Bounded } from "@/components/Bounded";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import CustomNavbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden antialiased">
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Header />
          {children}
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

  return (
    // <Bounded as="header" yPadding="sm">
    // <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none">
    <CustomNavbar {...navigation} />
    // </div>
    // </Bounded>
  );
}
