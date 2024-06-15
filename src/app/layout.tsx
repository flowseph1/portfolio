import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jose Acosta",
  description:
    "Welcome to Jose Acosta's portfolio. Explore my code creations, discover the technologies I use, and learn more about my professional profile.",
  openGraph: {
    title: "Jose Acosta",
    url: "https://www.joseacosta.dev/",
    description:
      "Welcome to Jose Acosta's portfolio. Explore my code creations, discover the technologies I use, and learn more about my professional profile.",
    siteName: "Jose Acosta Portfolio",
    images: [
      {
        url: "https://github.com/flowseph1/portfolio/blob/master/public/portoflio-og-image.png?raw=true",
        width: 631,
        height: 663,
        alt: "Jose Acosta Portfolio Logo",
      },
    ],
  },

  twitter: {
    title: "Jose Acosta",
    description:
      "Welcome to Jose Acosta's portfolio. Explore my code creations, discover the technologies I use, and learn more about my professional profile.",
    card: "summary_large_image",
    images: [
      {
        url: "https://github.com/flowseph1/portfolio/blob/master/public/portoflio-og-image.png?raw=true",
        width: 631,
        height: 663,
        alt: "Jose Acosta Portfolio Logo",
      },
    ],
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} id="body">
        <Header />
        {props.children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
