import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "OblivionStack - Business Operating System",
  description: "Transform your service business with AI-powered automation"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en">
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    {children}
  </body>
</html>

  );
}
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="