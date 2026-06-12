import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl text-center glass-panel rounded-3xl p-12 md:p-20">
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-foreground mb-6">
          Ready to build your next winner?
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Start for free. No credit card required until you're ready to export.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-[#adc6ff] text-black hover:bg-[#adc6ff]/90 px-8 py-6 text-lg w-full sm:w-auto">
            Get Started Free
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg w-full sm:w-auto border-border hover:bg-white/5">
            View Examples
          </Button>
        </div>
      </div>
    </section>
  );
}
