import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Webcultstudio",
  description: "Разработка сайтов, веб-приложений, сервисов",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-[#1E2327] font-text text-white transition-all">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
