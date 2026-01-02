import type { ReactNode } from "react";

export const metadata = {
  title: "TR Productions",
  description: "Music production, mixing & mastering, beats and studio sessions in Trier, Germany.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          backgroundColor: "#0B0B0D",
          color: "#E8E8E8",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
