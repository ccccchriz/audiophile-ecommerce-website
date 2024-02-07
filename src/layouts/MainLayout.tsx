import Footer from "../components/Footer";
import Header from "../components/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="font-primary grow">
        <h1 className="sr-only">Audiophile Store</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
}
