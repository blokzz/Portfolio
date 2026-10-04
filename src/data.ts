export const profile = {
  name: "Kamil",
  handle: "blokzz",
  role: "AI & Cloud-focused developer",
  intro:
    "CS student building software at the intersection of AI engineering, cloud infrastructure and language-learning tools. Most comfortable with Python and LLM systems, happy across the stack.",
  github: "https://github.com/blokzz",
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  repo: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "NihongoCards",
    description:
      "Desktop flashcard app for Japanese with real spaced repetition (FSRS) and optional AI card generation from single words or bulk files.",
    tech: ["Tauri", "React", "TypeScript", "SQLite"],
    repo: "https://github.com/blokzz/NihongoCards",
  },
  {
    name: "JapaneseAnalyzer",
    description:
      "GraphRAG backend: cross-lingual sentence search, LLM JLPT grading and flashcard generation over a graph of sentences, words and kanji.",
    tech: ["Python", "FastAPI", "Neo4j", "Docker"],
    repo: "https://github.com/blokzz/JapaneseAnalyzer",
  },
  {
    name: "PyBroker",
    description:
      "Message broker on raw TCP sockets with a custom binary protocol and async pub/sub. No dependencies.",
    tech: ["Python", "asyncio"],
    repo: "https://github.com/blokzz/PyBroker",
  },
  {
    name: "Programdle",
    description: "Wordle clone for programming languages.",
    tech: ["Next.js", "Prisma", "TypeScript", "Tailwind"],
    repo: "https://github.com/blokzz/Programdle",
    live: "https://programdle.vercel.app",
  },
  {
    name: "DSA Maze",
    description:
      "Maze generators (DFS, Kruskal, Prim) and solvers (DFS, BFS, A*) that must collect four items before reaching the exit.",
    tech: ["Python", "Tkinter"],
    repo: "https://github.com/blokzz/DSA-maze",
  },
];

export const stack: { group: string; items: string[] }[] = [
  { group: "AI / ML", items: ["Python", "PyTorch", "FastAPI", "sentence-transformers"] },
  { group: "Web", items: ["TypeScript", "React", "Next.js", "Tailwind"] },
  { group: "Data", items: ["PostgreSQL", "Prisma", "Neo4j", "SQLite"] },
  { group: "Cloud & Infra", items: ["AWS", "Docker", "Terraform"] },
];

export const facts = [
  { label: "Education", value: "B.Sc. Computer Science, PJATK (2024–2028)" },
  { label: "Languages", value: "Polish native · English C1 · Japanese N3" },
  { label: "Now", value: "Studying for JLPT N2, building NihongoCards" },
];
