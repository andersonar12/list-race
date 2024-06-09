import type { Metadata } from "next";
import "./globals.css";
import { Head } from "../../components/Head";
import { Scripts } from "../../components/Scripts";

export const metadata: Metadata = {
  title: "Directory Landing Page",
  description:
    "List Race - Best Place to Find and Explore that all you need. Find Best Place, Restaurant, Hotel, Real State and many more think in just One click.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body>{children}</body>
      <Scripts />
    </html>
  );
}
