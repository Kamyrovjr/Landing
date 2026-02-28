import Container from "../ui/Container";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen text-center pt-28 lg:pt-40">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-medium leading-[100%] text-[42px] sm:text-[60px] lg:text-[80px] text-gradient">
            Scale Your Business
          </h1>
          <h2 className="font-heading font-medium leading-[100%] text-[42px] sm:text-[60px] lg:text-[80px] text-gradient">
            With AI Intelligence.
          </h2>

          <p className="mt-6 text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
            AI-powered platform that automates workflows, predicts growth, and
            helps companies scale faster than ever.
          </p>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button className="px-8 py-5 rounded-full border border-gradient bg-transparent text-white font-medium">
              Get Started
            </button>

            <button className="px-8 py-5 rounded-full border border-white/30 bg-transparent text-white font-medium hover:border-white/60 transition">
              Learn More
            </button>
          </div>
        </div>
      </Container>

      <div className="mt-16 flex justify-center">
        <Image
          src="/images/hero.webp"
          alt="AI illustration"
          width={1605}
          height={619}
          priority
          className="w-full max-w-[1600px] h-auto"
        />
      </div>
    </section>
  );
}
