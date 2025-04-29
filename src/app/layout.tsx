import type { Metadata } from "next";

import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Spin } from "antd";
import { JetBrains_Mono } from "next/font/google";
import { Suspense } from "react";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";
import { Navbar } from "../components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { StairTransition } from "@/components/StairTransition";
import ReactQueryProvider from "@/context/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Ighure Oghenetega | Frontend Developer",
  description:
    "A modern portfolio by Ighure Oghenetega showcasing projects in frontend development.",
  openGraph: {
    title: "Ighure Oghenetega | Frontend Developer",
    description:
      "Explore my portfolio featuring cutting-edge frontend projects.",
    url: "https://kuzan-portfolio.vercel.app/",
    siteName: "Ighure Oghenetega Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dqt6ttewe/image/upload/v1745963058/cke6zbfb3az6swr7yykq.png", // Ideal size: 1200x630
        width: 1200,
        height: 630,
        alt: "Ighure Oghenetega Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ighure Oghenetega | Frontend Developer",
    description:
      "My developer portfolio built with Next.js, showcasing frontend projects.",
    images: [
      "https://res.cloudinary.com/dqt6ttewe/image/upload/v1745963058/cke6zbfb3az6swr7yykq.png", // Ideal size: 1200x630
    ],
    creator: "@KuzanSenpaii",
  },
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spin size="large" />
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useClientInactivityLogout();
  return (
    <html lang="en">
      <body className={` ${jetbrainsMono.variable} `}>
        <AntdRegistry>
          <Suspense fallback={<Loading />}>
            <ReactQueryProvider>
              <NextTopLoader showSpinner={false} color="#00ff99" />
              <ToastContainer />
              <div className="flex flex-col min-h-screen">
                <Navbar />

                <StairTransition />
                <main className="flex-1 flex justify-center ">
                  <div className="w-full max-w-[1440px] px-4">
                    <PageTransition>{children}</PageTransition>
                  </div>
                </main>
              </div>
            </ReactQueryProvider>
          </Suspense>
        </AntdRegistry>
      </body>
    </html>
  );
}
