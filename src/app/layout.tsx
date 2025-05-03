import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ourhyt",
  description: "EDM label",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
