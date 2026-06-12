import Link from "next/link";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-12">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <Link href="/" className="font-sans font-bold text-xl tracking-tight text-foreground">
            Orchestra
          </Link>
          <p className="text-sm text-muted-foreground">
            © 2024 Multi-Agent Hackathon Builder. All rights reserved.
          </p>
        </div>
        
        <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#product" className="transition-colors hover:text-foreground">Product</Link>
          <Link href="#features" className="transition-colors hover:text-foreground">Features</Link>
          <Link href="#pricing" className="transition-colors hover:text-foreground">Pricing</Link>
          <Link href="#privacy" className="transition-colors hover:text-foreground">Privacy</Link>
          <Link href="#terms" className="transition-colors hover:text-foreground">Terms</Link>
        </nav>
        
        <div className="flex items-center gap-4 text-muted-foreground">
          <Link href="#" className="hover:text-foreground transition-colors"><Globe className="w-5 h-5" /></Link>
        </div>
      </div>
    </footer>
  );
}
