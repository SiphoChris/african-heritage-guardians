import { Geist, Geist_Mono } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { Metadata } from "next";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "African Heritage Guardians",
  description: "African Heritage Guardians is a pioneering cultural tech organization dedicated to preserving, promoting, and digitalizing Africa's indigenous languages, cultures, and heritage. We believe that our stories, our voices, and our histories deserve a place in the digital world — not just for documentation, but for meaningful innovation and cultural pride."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme radius="small" appearance="light" accentColor="amber" grayColor="gray" panelBackground="translucent">
          {children}
        </Theme>
      </body>
    </html>
  );
}
