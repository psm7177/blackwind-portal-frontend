import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HPJS Portal",
  description: "HPJS Portal Login"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} font-pretendard-regular`}
        style={{ letterSpacing: "-0.03em" }}
      >
        {children}
      </body>
    </html>
  );
}
