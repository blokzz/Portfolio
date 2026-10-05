export const profile = {
  name: "Kamil",
  handle: "blokzz",
  role: "AI & Cloud-focused developer",
  intro:
    "CS student building software at the intersection of AI engineering, cloud infrastructure and language-learning tools. Most comfortable with Python and LLM systems, happy across the stack.",
  about: [
    "I'm a Computer Science student at PJATK in Warsaw. I like projects where a hard problem sits behind a simple interface: a message broker written from raw sockets, a knowledge graph that answers questions about Japanese sentences, a flashcard app that schedules reviews with a real memory model.",
    "Most of what I build starts as a tool I want for myself. I'm learning Japanese (JLPT N3, aiming for N2), and that is what pulled me into NLP, retrieval and spaced repetition. I also practice algorithms on LeetCode.",
  ],
};

export const links = {
  github: "https://github.com/blokzz",
  leetcode: "https://leetcode.com/u/blokz/",
  linkedin: "https://www.linkedin.com/in/kamil-bobrzak-a60717338/",
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  repo: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "NihongoCards",
    tagline: "Desktop flashcards for Japanese",
    description:
      "A personal vocabulary trainer that schedules every card with FSRS, the modern successor to Anki's SM-2, so reviews land right before you forget. A card is more than front and back: furigana, on/kun readings, JLPT level, register, usage notes, example sentences and synonyms. Cards can be written by hand or generated with AI from a single word or a bulk file, with a full preview before saving.",
    highlights: [
      "Real spaced repetition with Again / Hard / Good / Easy and true intervals",
      "Works fully offline: SQLite on desktop, graceful fallback when the AI backend is down",
      "UI talks only to a Store interface, so the desktop and browser builds share all logic",
      "Tauri v2 installer of around 3 MB",
    ],
    tech: ["Tauri", "React", "TypeScript", "SQLite", "Zustand", "FSRS"],
    repo: "https://github.com/blokzz/NihongoCards",
  },
  {
    name: "JapaneseAnalyzer",
    tagline: "GraphRAG backend for learning Japanese",
    description:
      "An API that combines semantic search, LLM analysis and a knowledge graph of sentences, words and kanji. Neo4j stores the graph and the vector embeddings in one database, so a single Cypher query can mix meaning and structure, for example N3 sentences about food that contain the verb 食べる. It powers the AI features in NihongoCards.",
    highlights: [
      "Cross-lingual search: query in English or Polish, get Japanese sentences back",
      "Automatic JLPT grading (N5 to N1) with structured LLM output",
      "Morphological tokenization with lemmas, readings and POS via MeCab",
      "Idempotent ingest, 26k+ sentences imported from Tatoeba, one-command Docker Compose setup",
    ],
    tech: ["Python", "FastAPI", "Neo4j", "Docker", "Groq", "sentence-transformers"],
    repo: "https://github.com/blokzz/JapaneseAnalyzer",
  },
  {
    name: "PyBroker",
    tagline: "A TCP message broker from scratch",
    description:
      "A minimalist broker built on the standard library only. It skips HTTP and JSON entirely and speaks a custom binary protocol over raw TCP sockets, with messages persisted to an append-only log per topic. Consumers keep an offset into the stream, so they can resume reading from any point in the stream.",
    highlights: [
      "asyncio networking that handles many concurrent connections without blocking",
      "5-byte binary frame header packed with struct, topic-based routing",
      "Disk writes offloaded to a thread pool to keep the event loop free",
      "No third-party dependencies",
    ],
    tech: ["Python", "asyncio", "TCP", "Binary protocol"],
    repo: "https://github.com/blokzz/PyBroker",
  },
  {
    name: "Programdle",
    tagline: "Daily Wordle-style game for programming languages",
    description:
      "A daily guessing game in the style of Wordle and Loldle, where the answer is a programming language. You get a code snippet written in it and guess from a list of 37 languages; every guess is compared on release year, paradigm, typing and compiled vs. interpreted, and every miss unlocks another snippet. Results can be shared as an emoji grid, and stats are kept locally in the browser.",
    highlights: [
      "Daily puzzle picked deterministically from the date, so no database or accounts are needed",
      "Three progressive code hints and a guess table with higher/lower hints for the release year",
      "Stats with guess distribution, persisted in localStorage with Zustand, plus a countdown to the next puzzle",
      "Built with Next.js App Router, shadcn/ui and Tailwind, live on Vercel",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "Zustand", "shadcn/ui"],
    repo: "https://github.com/blokzz/Programdle",
    live: "https://programdle.vercel.app",
  },
  {
    name: "DSA Maze",
    tagline: "Maze generation and pathfinding visualizer",
    description:
      "An interactive visualizer for graph algorithms on a grid. It generates perfect mazes three different ways and solves them with state-dependent pathfinding: the solver has to collect four items before any exit opens, then take the nearest one. Built for a Data Structures and Algorithms course, with statistics to compare how much each search explores.",
    highlights: [
      "Generators: randomized DFS, Kruskal with a disjoint-set union, Prim",
      "Solvers: DFS, BFS and A* with a Manhattan heuristic, animated step by step",
      "Hand-written min-heap, tracking of visited nodes and path length",
    ],
    tech: ["Python", "Tkinter", "Graph algorithms"],
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
  { label: "Based in", value: "Warsaw, Poland" },
  { label: "Now", value: "Studying for JLPT N2, building NihongoCards" },
];
