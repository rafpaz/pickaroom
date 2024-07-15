import "./globals.css";

import { Inter, Poppins } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import { Bounded } from "@/components/Bounded";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import CustomNavbar from "@/components/Navbar";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
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

  return <CustomNavbar {...navigation} />;
}
