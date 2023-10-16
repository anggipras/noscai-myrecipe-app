import "./globals.css";
import type { Metadata } from "next";
import { HeaderBar, Footer } from "@/app/components";

export const metadata: Metadata = {
  title: "MyRecipes",
  description: "Discover and get free recipes in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <HeaderBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
