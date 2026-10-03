import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import { site } from "@/data/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.fancyengineering.in"),
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
  keywords: [
    "Fancy Engineering and Fabrication",
    "automatic gates Hyderabad",
    "steel fabrication Hyderabad",
    "industrial shed fabrication Hyderabad",
    "warehouse sheds fabrication Hyderabad",
    "railings and spiral staircases Hyderabad",
    "barricading metal panels Hyderabad",
    "structural steel work Hyderabad",
    "roofing sheds Hyderabad",
    "PEB structures Hyderabad",
    "function hall sheds Hyderabad",
    "brass railings Hyderabad",
    "metal fabricators in Hyderabad",
    "welding services Hyderabad",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    url: "https://www.fancyengineering.in",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: `${site.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: ["/brand/logo.png"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": site.name,
    "description": site.description,
    "url": `https://${site.website}`,
    "telephone": `+91 ${site.phones[0]}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${site.address.line1}, ${site.address.line2}`,
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500005",
      "addressCountry": "IN"
    },
    "sameAs": Object.values(site.social)
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18432740692" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-18432740692');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
