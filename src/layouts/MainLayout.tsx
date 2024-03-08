import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";

// interface MainLayoutProps {
//   children: React.ReactNode;
// }

export default function MainLayout(/*{ children }: MainLayoutProps*/) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setIsExpanded((_) => false);
  }, [location]);
  return (
    <div className="min-h-dvh flex flex-col">
      <ScrollRestoration />
      <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <main
        className="font-primary grow grid place-items-center bg-light-gray"
        {...{ inert: isExpanded ? "" : null }}
      >
        <h1 className="sr-only">Audiophile Store</h1>
        <Outlet />
      </main>
      <Footer isExpanded={isExpanded} />
    </div>
  );
}
