import { Users, Workflow, Download } from "lucide-react";

export function Features() {
  return (
    <section className="py-24 bg-[#0a0a0a]" id="features">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="w-12 h-12 bg-black border border-border rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Real-time Collaboration</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Invite your team to tweak the blueprint. Every change propagates across all AI outputs instantly.
            </p>
          </div>
          
          <div>
            <div className="w-12 h-12 bg-black border border-border rounded-lg flex items-center justify-center mb-6">
              <Workflow className="w-6 h-6 text-[#ddb7ff]" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Multi-Agent Orchestration</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our proprietary protocol allows agents to debate and refine each other's work for higher accuracy.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 bg-black border border-border rounded-lg flex items-center justify-center mb-6">
              <Download className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Instant Export</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Download a complete project scaffold. Ready to git commit and start coding immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
