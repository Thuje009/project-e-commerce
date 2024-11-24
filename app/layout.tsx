import "@/styles/global.css";
import { NextUIProvider } from "@nextui-org/react";
import Navtop from "@/components/shared/Navtop";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextUIProvider>
        <body>
          {/* Layout UI */}
          <Navtop />
          <main>{children}</main>
          <Footer />
        </body>
      </NextUIProvider>
    </html>
  );
}
