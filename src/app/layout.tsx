"use client";

import Navbar from "@/components/Navbar";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!overflow-y-scroll !p-0">
      <body className="">
        <Providers>
          <NextUIProvider>
            <div>
              <Navbar />
              <div className="max-w-screen-2xl mx-auto pt-16">{children}</div>
            </div>
          </NextUIProvider>
        </Providers>
      </body>
    </html>
  );
}
