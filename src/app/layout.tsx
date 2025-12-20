import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import '@/core/styles/globals.css';
// Import all available fonts for AI usage
import '@/core/utils/fonts';
import { ToastContainer } from 'react-toastify';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ateliê Inteligente - Plataforma para Ceramistas',
  description:
    'Crie, compartilhe e venda suas peças de cerâmica com inteligência artificial',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>{/* <Script src="/lasy-bridge.js" strategy="beforeInteractive" /> */}</head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
