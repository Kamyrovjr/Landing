import "../styles/globals.css";
import { Space_Grotesk, Montserrat } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

export const metadata = {
  title: "NeuroScale AI — AI Powered Business Intelligence",
  description:
    "AI-powered platform that automates workflows, predicts growth and helps companies scale faster.",
  openGraph: {
    title: "NeuroScale AI",
    description: "AI platform for automation, analytics and business scaling.",
    url: "https://neuroscale.ai",
    siteName: "NeuroScale",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "NeuroScale AI platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
