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
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
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
