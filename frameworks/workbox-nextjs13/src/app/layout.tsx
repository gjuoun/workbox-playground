import { ServiceWorker } from "./sw";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
      <ServiceWorker />
    </html>
  );
}
