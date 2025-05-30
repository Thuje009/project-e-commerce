import "@/styles/global.css";
import { NextUIProvider } from "@nextui-org/react";
import Navtop from "@/components/shared/Navtop";
import Footer from "@/components/shared/Footer";
import { AuthProvider } from "../provider/authProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <NextUIProvider>
            {/* Layout UI */}
            <Navtop />
            <main className="min-h-[calc(100vh-435px)]">{children}</main>
            <Footer />
          </NextUIProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
