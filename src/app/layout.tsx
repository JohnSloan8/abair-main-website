import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/sections";

export const metadata: Metadata = {
  title: "ABAIR",
  description: "Irish Speech and Language Technologies",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-grey-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
