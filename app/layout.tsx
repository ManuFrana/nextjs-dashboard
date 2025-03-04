import { roboto } from "./ui/fonts/fonts";
import "./ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto} antialised`}>{children}</body>
    </html>
  );
}
