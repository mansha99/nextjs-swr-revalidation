import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Hello Next",
  description: "Hello Next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-black text-white  p-5">
            <div className="flex flex-row">
              <h1 className=" pr-4 text-white-100">Hello NextJS SWR</h1>
             

                      </div>
          </header>
          <div className="flex justify-center">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
