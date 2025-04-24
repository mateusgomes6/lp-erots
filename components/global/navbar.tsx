import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/60 max-w-[1440px] mx-auto">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Erots Logo" width={120} height={40} />
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Recursos
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Planos
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Depoimentos
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sobre
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#login"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Login
          </Link>
          <Button className="bg-black hover:bg-gray-800">Começar Grátis</Button>
        </div>
      </div>
    </header>
  );
};
