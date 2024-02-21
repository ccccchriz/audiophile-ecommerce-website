import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

// interface MainLayoutProps {
//   children: React.ReactNode;
// }

export default function MainLayout(/*{ children }: MainLayoutProps*/) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <div className="min-h-dvh flex flex-col">
      <ScrollRestoration />
      <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <main
        className="font-primary grow grid place-items-center"
        {...{ inert: isExpanded ? "" : null }}
      >
        <h1 className="sr-only">Audiophile Store</h1>
        <Outlet />
      </main>
      <Footer isExpanded={isExpanded} />
    </div>
  );
}
