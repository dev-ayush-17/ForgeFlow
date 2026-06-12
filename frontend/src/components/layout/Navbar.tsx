import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-6xl flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-sans font-bold text-xl tracking-tight text-foreground">
            Orchestra
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
          <Link href="#product" className="transition-colors hover:text-foreground">
            Product
          </Link>
          <Link href="#features" className="transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#pricing" className="transition-colors hover:text-foreground">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="secondary" className="bg-[#adc6ff] text-black hover:bg-[#adc6ff]/90">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
