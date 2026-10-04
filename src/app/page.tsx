import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import { facts, links, profile, projects, stack } from "@/data";

const sections = ["about", "projects", "stack", "contact"];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-16">
      <Reveal>
        <h2 className="mb-8 flex items-center gap-4 font-mono text-sm uppercase tracking-widest text-accent">
          {title}
          <span className="h-px flex-1 bg-border" />
        </h2>
      </Reveal>
      {children}
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-foreground">
      {children}
    </span>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-arrow inline-flex items-center gap-1 text-accent hover:underline"
    >
      {children}
      <span aria-hidden>↗</span>
    </a>
  );
}

export default function Home() {
  const contacts = [
    { label: "GitHub", href: links.github, handle: "@blokzz" },
    { label: "LeetCode", href: links.leetcode, handle: "blokz" },
    ...(links.linkedin ? [{ label: "LinkedIn", href: links.linkedin, handle: "Kamil" }] : []),
  ];

  return (
    <>
      <ScrollProgress />
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 text-sm">
          <a href="#top" className="font-mono text-foreground">
            {profile.handle}
          </a>
          <ul className="flex gap-4 text-muted sm:gap-6">
            {sections.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="capitalize transition-colors hover:text-foreground">
                  {id}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-3xl flex-1 px-6">
        <section className="relative py-24 sm:py-36">
          <div
            aria-hidden
            className="glow pointer-events-none absolute -left-24 top-0 -z-10 h-96 w-96 rounded-full blur-3xl"
          />
          <p className="fade-up mb-4 font-mono text-sm text-accent">Hi, I&apos;m {profile.name}</p>
          <h1
            className="fade-up text-4xl font-semibold tracking-tight sm:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            <span className="cursor">{profile.role}</span>
          </h1>
          <p
            className="fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: "260ms" }}
          >
            {profile.intro}
          </p>
          <div className="fade-up mt-10 flex gap-4 text-sm" style={{ animationDelay: "400ms" }}>
            <a
              href="#projects"
              className="rounded-md bg-accent px-5 py-2.5 font-medium text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              See projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border px-5 py-2.5 transition-all hover:-translate-y-0.5 hover:border-accent"
            >
              Get in touch
            </a>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr]">
            <Reveal className="space-y-4 leading-relaxed text-muted">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
            <Reveal delay={120}>
              <dl className="grid gap-5">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                      {f.label}
                    </dt>
                    <dd className="mt-1">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <ul className="grid gap-6">
            {projects.map((p, i) => (
              <li key={p.name}>
                <Reveal delay={(i % 2) * 80}>
                  <article className="card rounded-lg border border-border bg-surface p-6 hover:border-accent sm:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <div>
                        <h3 className="text-xl font-medium">{p.name}</h3>
                        <p className="text-sm text-muted">{p.tagline}</p>
                      </div>
                      <div className="flex gap-4 font-mono text-xs">
                        {p.live && <ExternalLink href={p.live}>Live</ExternalLink>}
                        <ExternalLink href={p.repo}>Code</ExternalLink>
                      </div>
                    </div>
                    <p className="mt-4 leading-relaxed text-muted">{p.description}</p>
                    <ul className="mt-4 grid gap-2 text-sm">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-3">
                          <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <li key={t}>
                          <Tag>{t}</Tag>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="stack" title="Stack">
          <div className="grid gap-8 sm:grid-cols-2">
            {stack.map((g, i) => (
              <Reveal key={g.group} delay={i * 80}>
                <h3 className="mb-3 text-sm text-muted">{g.group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li key={item}>
                      <Tag>{item}</Tag>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <Reveal>
            <p className="max-w-xl leading-relaxed text-muted">
              You can find me here:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card block rounded-lg border border-border bg-surface p-4 hover:border-accent"
                  >
                    <span className="block text-sm text-muted">{c.label}</span>
                    <span className="mt-1 block font-mono text-sm">{c.handle} ↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
