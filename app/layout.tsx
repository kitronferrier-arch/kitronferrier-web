import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://kitronferrier.com"),
  title: { default: "Kitron Ferrier", template: "%s | Kitron Ferrier" },
  description:
    "Faith driven builder focused on structured transformation through discipline, behavioral psychology, and systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kitron Ferrier",
    description:
      "Faith driven builder focused on structured transformation through discipline, behavioral psychology, and systems.",
    url: "https://kitronferrier.com",
    siteName: "Kitron Ferrier",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-text-primary antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
