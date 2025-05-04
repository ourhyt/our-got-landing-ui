import '../styles/globals.css'

export const metadata = {
  title: 'Ourhyt | Cultura Melodic & Peak Techno',
  description: 'Descubre la cultura techno con Ourhyt: eventos, sets, DJs y más en Colombia.',
  icons: {
    icon: '/images/favicon.ico',
  },
}

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
