import Container from "@/components/ui/Container";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    text: "NeuroScale transformed our analytics workflow completely.",
  },
  {
    name: "Michael Lee",
    role: "Startup Founder",
    text: "Automation saved us dozens of hours every week.",
  },
  {
    name: "David Kim",
    role: "Tech Lead",
    text: "The predictive insights are incredibly accurate.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24" id="testimonials">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-5xl text-white">
            What our Clients Say
          </h2>
          <p className="mt-4 text-white/70">Trusted by companies worldwide</p>
        </div>
        <div className="grid mt-14 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur hover:border-white/20 transition"
            >
              <div className="text-yellow-400 text-lg">★★★★★</div>
              <p className="mt-4 text-white/80">{item.text}</p>
              <div className="mt-6">
                <p className="font-heading text-white">{item.name}</p>
                <p className="text-white/60 text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
