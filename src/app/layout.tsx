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
    "Dedicated Front End Developer with extensive expertise in React.js and React Native development. Solid Knowledge of JavaScript and TypeScript, with a passion for simple, maintainable, and readable code. Experienced in optimizing responsive designs for diverse platforms. Familiar with CI/CD pipelines, Git version control, and a proven track record of creating intuitive user interfaces tailored for optimal performance.",
  openGraph: {
    title: "Jose Acosta",
    description: "Front End Developer | React.js | React Native | Next.js",
    images: [
      {
        url: "/portfolio-logo.png",
        width: 600,
        height: 600,
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
