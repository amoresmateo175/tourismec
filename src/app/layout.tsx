import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TourismEC | Ecuador Travel Packages",
  description: "Discover Ecuador with TourismEC. Beaches, culture, and adventure in one place.",
  keywords: ["Ecuador travel", "Machalilla", "Quito tours", "tour packages Ecuador"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}