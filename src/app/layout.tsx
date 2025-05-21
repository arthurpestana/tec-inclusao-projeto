import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.scss";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3º Tec Inclusão - Unitins",
  description: "Evento de Inclusão Digital",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
