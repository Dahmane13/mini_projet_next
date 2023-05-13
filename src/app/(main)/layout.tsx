import NavBar from "../components/main/Navbar";
import "../globals.css";
import { Inter } from "next/font/google";
import Footer from "./(sections)/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="flex justify-center ">
      <body
        className={
          inter.className +
          " bg-background text-foreground w-[70rem] flex flex-col gap-4 py-4"
        }
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
