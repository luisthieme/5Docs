"use client";

import Navbar from "@/components/Navbar";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!overflow-y-scroll !p-0">
      <body className="">
        <NextUIProvider>
          <div>
            <Navbar />
            <div className="max-w-screen-2xl mx-auto pt-16">{children}</div>
            <div className="h-60 border-t border-gray-200 mt-20">
              <p className="w-fit h-fit mt-[7rem] mx-auto text-gray-500">
                Copyright © 2024 5Minds. All rights reserved
              </p>
            </div>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
