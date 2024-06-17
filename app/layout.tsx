import { Space_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const space = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Influencer Wizard Search</title>
        <meta name='description' content='Description' />
      </head>
      <body className={space.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
