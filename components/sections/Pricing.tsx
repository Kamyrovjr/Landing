import Container from "@/components/ui/Container";

const plans = [
  {
    name: "Starter",
    price: "$19",
    desc: "For individuals and small teams.",
    features: ["Basic analytics", "Up to 3 projects", "Email support"],
    cta: "Choose Starter",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    desc: "Best for growing businesses.",
    features: [
      "Advanced analytics",
      "Unlimited projects",
      "Priority support",
      "Automation",
    ],
    cta: "Choose Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large-scale operations.",
    features: ["SLA & security", "Custom integrations", "Dedicated manager"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl text-white">
            Simple pricing
          </h2>
          <p className="mt-4 text-white/70">
            Start small, upgrade anytime. No hidden fees.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={[
                "rounded-3xl border bg-white/5 p-8 backdrop-blur transition",
                plan.highlighted
                  ? "border-white/25 bg-gradient-to-b from-white/10 to-white/5"
                  : "border-white/10 hover:border-white/20",
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl text-white">{plan.name}</h3>
                {plan.highlighted && (
                  <span className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/80">
                    Popular
                  </span>
                )}
              </div>

              <div className="mt-6">
                <div className="text-4xl font-heading text-white">
                  {plan.price}
                </div>
                <p className="mt-2 text-white/70">{plan.desc}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-white/80 flex gap-2">
                    <span className="text-fuchsia-300">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={[
                  "mt-8 w-full rounded-full py-4 font-medium transition",
                  plan.highlighted
                    ? "bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black hover:opacity-90"
                    : "border border-white/15 text-white hover:border-white/30 hover:bg-white/5",
                ].join(" ")}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
