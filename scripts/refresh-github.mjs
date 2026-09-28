/**
 * Optional metadata refresh. Does not replace src/data/projects.ts.
 * Usage: node scripts/refresh-github.mjs
 */
const FS = await import("node:fs/promises");
const PATH = await import("node:path");

const USER = "shahdtarraf";
const response = await fetch(
  `https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`,
  { headers: { "User-Agent": "shahd-tarraf-portfolio-refresh" } },
);

if (!response.ok) {
  throw new Error(`GitHub API ${response.status}: ${await response.text()}`);
}

const repos = await response.json();
const summary = repos.map((repo) => ({
  name: repo.name,
  url: repo.html_url,
  description: repo.description,
  language: repo.language,
  updatedAt: repo.updated_at,
  homepage: repo.homepage,
  archived: repo.archived,
  topics: repo.topics,
  fork: repo.fork,
}));

const out = PATH.join(process.cwd(), "src", "data", "github-meta.json");
await FS.writeFile(
  out,
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      username: USER,
      publicRepoCount: summary.length,
      repos: summary,
    },
    null,
    2,
  ),
);

console.log(`Wrote ${summary.length} repositories to ${out}`);
console.log("Review github-meta.json, then update src/data/projects.ts manually. Do not invent fields.");
