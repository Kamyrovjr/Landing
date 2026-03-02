import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section id="cta" className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 sm:p-14 text-center">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/30 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-cyan-400/25 blur-[120px]" />

          <h2 className="relative font-heading text-4xl sm:text-5xl text-white">
            Ready to scale with AI?
          </h2>
          <p className="relative mt-4 text-white/70 max-w-2xl mx-auto">
            Start using NeuroScale today and turn your data into clear
            decisions.
          </p>

          <div className="relative mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-5 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-medium hover:opacity-90 transition">
              Start Free Trial
            </button>
            <button className="px-8 py-5 rounded-full border border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
