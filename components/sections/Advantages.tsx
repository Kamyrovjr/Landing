import Container from "@/components/ui/Container";

const items = [
  {
    title: "Real-time Analytics",
    text: "Track key metrics instantly with AI-powered dashboards.",
  },
  {
    title: "AI Automation",
    text: "Automate repetitive workflows and save hours every week.",
  },
  {
    title: "Predictive Insights",
    text: "Forecast growth and detect risks before they happen.",
  },
  {
    title: "Cloud Scalable",
    text: "Built to handle high-load systems without performance loss.",
  },
  {
    title: "Secure by Design",
    text: "Enterprise-grade security and privacy-first architecture.",
  },
  {
    title: "Easy Integration",
    text: "Connect to your tools via API in minutes, not weeks.",
  },
];

export default function Advantages() {
  return (
    <section className="py-24" id="features">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl text-white">
            Why NeuroScale AI?
          </h2>
          <p className="mt-4 text-white/70">
            Everything you need to scale faster: analytics, automation and
            reliable infrastructure.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur
                         hover:border-white/20 transition"
            >
              {/* glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 blur-2xl
                           group-hover:opacity-100 transition
                           bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20"
              />

              <h3 className="relative font-heading text-xl text-white">
                {item.title}
              </h3>
              <p className="relative mt-3 text-white/70 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
