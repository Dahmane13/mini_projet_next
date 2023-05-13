import SideBar from "@/app/components/dashboard/SideBar";
import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-background flex text-foreground max-h-screen overflow-hidden"
        }
      >
        <SideBar />
        {children}
      </body>
    </html>
  );
}
