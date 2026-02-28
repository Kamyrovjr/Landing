import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: ["Features", "Solutions", "Pricing", "Roadmap"],
  Company: ["About", "Careers", "Blog", "Press"],
  Resources: ["Docs", "Help Center", "Privacy Policy", "Terms"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16" id="contact">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="font-heading text-xl text-white">NeuroScale</div>
            <p className="mt-4 text-white/70 max-w-sm">
              AI-powered platform that helps teams automate workflows, predict
              growth and scale faster.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <Link
                href="#"
                aria-label="GitHub"
                className="opacity-80 hover:opacity-100 transition"
              >
                <Image
                  src="/icons/github.svg"
                  alt="GitHub"
                  width={18}
                  height={18}
                />
              </Link>

              <Link
                href="#"
                aria-label="Discord"
                className="opacity-80 hover:opacity-100 transition"
              >
                <Image
                  src="/icons/discord.svg"
                  alt="Discord"
                  width={18}
                  height={18}
                />
              </Link>

              <Link
                href="#"
                aria-label="Twitter"
                className="opacity-80 hover:opacity-100 transition"
              >
                <Image
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  width={18}
                  height={18}
                />
              </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <div className="text-white font-heading">{title}</div>
              <ul className="mt-4 space-y-3">
                {links.map((label) => (
                  <li key={label}>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="text-white font-heading">Contact</div>
            <ul className="mt-4 space-y-3 text-white/70">
              <li>
                <span className="text-white/60">Email:</span>{" "}
                <a
                  className="hover:text-white transition"
                  href="mailto:hello@neuroscale.ai"
                >
                  hello@neuroscale.ai
                </a>
              </li>
              <li>
                <span className="text-white/60">Location:</span> Almaty, KZ
              </li>
              <li>
                <span className="text-white/60">Hours:</span> Mon–Fri,
                9:00–18:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} NeuroScale. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Built with Next.js + Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
