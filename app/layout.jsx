import "./globals.css";

export const metadata = {
  title: "CampusPe — Connect 10X Faster",
  description: "One platform connecting students, colleges and employers — faster.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
