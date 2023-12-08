import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jose Acosta | Home",
  description: "Jose Acosta's portfolio",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} id="body">
        <Header />
        {props.children}
        {props.modal}
        <Footer />
      </body>
    </html>
  );
}
