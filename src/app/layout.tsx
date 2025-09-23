// app/layout.tsx
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pick what you need
  variable: "--font-montserrat",       // optional: use as CSS variable
});

export const metadata = {
  title: "My App",
  description: "Next.js with Montserrat",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="h-full ">{children}</body>
    </html>
  );
}
