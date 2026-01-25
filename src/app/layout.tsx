import type { Metadata } from "next";
import "./globals.css";
import{Header} from "./components/header/Header.tsx";

export const metadata: Metadata = {
  title: "Project 3",
  description: "Xây dựng giao diện website tuyển dụng IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
