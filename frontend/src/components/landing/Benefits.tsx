import { CheckCircle2 } from "lucide-react";

export function Benefits() {
  return (
    <section className="py-24" id="product">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-12 leading-tight">
            Ship while others are still brainstorming.
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-[#adc6ff] shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Speed to Market</h4>
                <p className="text-muted-foreground text-sm">Compress months of planning into minutes. Focus 100% on building the unique value of your project.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-[#adc6ff] shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Quality Code</h4>
                <p className="text-muted-foreground text-sm">Generate standardized, production-ready boilerplates using the industry's best architectural patterns.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-[#adc6ff] shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Alignment</h4>
                <p className="text-muted-foreground text-sm">Ensure your designer, developer, and product owner are working from a single, AI-verified source of truth.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#adc6ff]/20 to-[#ddb7ff]/20 blur-3xl -z-10 rounded-full" />
          <div className="glass-panel p-2 rounded-2xl">
            <div className="bg-[#0a0a0a] rounded-xl overflow-hidden relative">
              <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/80 backdrop-blur border border-border p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#adc6ff] animate-pulse" />
                  <span className="font-mono text-xs font-bold text-foreground">AGENTS_READY: TRUE</span>
                </div>
                <span className="font-mono text-xs text-muted-foreground uppercase">SCR-882-BLUEPRINT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
