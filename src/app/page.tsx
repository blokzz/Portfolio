import { facts, profile, projects, stack } from "@/data";

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
      <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-accent">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 text-sm">
          <a href="#top" className="font-mono text-foreground">
            {profile.handle}
          </a>
          <ul className="flex gap-6 text-muted">
            {["about", "projects", "stack", "contact"].map((id) => (
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
        <section className="py-24 sm:py-32">
          <p className="mb-4 font-mono text-sm text-accent">Hi, I&apos;m {profile.name}</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{profile.role}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>
          <div className="mt-10 flex gap-4 text-sm">
            <a
              href="#projects"
              className="rounded-md bg-accent px-5 py-2.5 font-medium text-background transition-opacity hover:opacity-90"
            >
              See projects
            </a>
            <a
              href={profile.github}
              className="rounded-md border border-border px-5 py-2.5 transition-colors hover:border-accent"
            >
              GitHub
            </a>
          </div>
        </section>

        <Section id="about" title="About">
          <dl className="grid gap-4">
            {facts.map((f) => (
              <div key={f.label} className="grid gap-1 sm:grid-cols-[8rem_1fr]">
                <dt className="text-muted">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="projects" title="Projects">
          <ul className="grid gap-4">
            {projects.map((p) => (
              <li
                key={p.name}
                className="rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-medium">{p.name}</h3>
                  <div className="flex gap-4 font-mono text-xs">
                    {p.live && (
                      <a href={p.live} className="text-accent hover:underline">
                        Live
                      </a>
                    )}
                    <a href={p.repo} className="text-accent hover:underline">
                      Code
                    </a>
                  </div>
                </div>
                <p className="mt-2 leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="stack" title="Stack">
          <div className="grid gap-6 sm:grid-cols-2">
            {stack.map((g) => (
              <div key={g.group}>
                <h3 className="mb-3 text-sm text-muted">{g.group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <li key={i}>
                      <Tag>{i}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-muted">
            The best way to reach me is through{" "}
            <a href={profile.github} className="text-accent hover:underline">
              GitHub
            </a>
            .
          </p>
        </Section>
      </main>

      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
