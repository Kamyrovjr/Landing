import Container from "@/components/ui/Container";

const solutions = [
  {
    title: "For Startups",
    text: "Launch faster with AI analytics, ready-made dashboards and automation.",
    points: ["Quick setup", "Growth insights", "Workflow automation"],
  },
  {
    title: "For E-commerce",
    text: "Increase conversion by predicting demand, personalizing offers and reducing churn.",
    points: ["Demand prediction", "Customer segments", "Smart recommendations"],
  },
  {
    title: "For Enterprises",
    text: "Scale securely with reliable infrastructure, access control and integrations.",
    points: ["Role-based access", "Audit logs", "API integrations"],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl text-white">
            Solutions for every team
          </h2>
          <p className="mt-4 text-white/70">
            Choose a setup that fits your workflow — from early-stage teams to
            large companies.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur hover:border-white/20 transition"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 blur-2xl group-hover:opacity-100 transition bg-gradient-to-r from-fuchsia-500/10 to-cyan-400/10" />

              <h3 className="font-heading text-xl text-white">{s.title}</h3>
              <p className="mt-3 text-white/70 leading-relaxed">{s.text}</p>

              <ul className="mt-6 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="text-white/80 flex gap-2">
                    <span className="text-cyan-300">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full rounded-full border border-white/15 py-3 text-white/90 hover:border-white/30 hover:text-white transition">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
