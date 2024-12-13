
import Header from "@/components/header";
import PageTransition from "@/components/pageTransition";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div data-theme="dark" className="dark-theme-wrapper">
      <PageTransition>
      <header className="sticky top-0 z-50"><Header/></header>
      <main>{children}</main>
      </PageTransition>
    </div>
  );
}