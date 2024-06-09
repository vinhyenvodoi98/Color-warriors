import Header from "./components/Header";
import Providers from "./components/Provider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Providers>
          <div className="relative">
            <div className=" absolute top-0">
              <Header />
            </div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
