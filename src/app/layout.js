import { Inter } from "next/font/google";
import "./globals.css";
import PagesTransitionLayout from "@/components/pageTransitionLayout";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jiwan Humagain",
  // icons: {
  //   icon:'/favicon.ico'
  // }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PagesTransitionLayout>{children}</PagesTransitionLayout>
      </body>
    </html>
  );
}
