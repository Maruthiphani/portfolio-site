import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, Calendar, AlertCircle, Loader2, Code2, Lock, Mail, RefreshCw } from 'lucide-react';

const GITHUB_USERNAME = 'Maruthiphani';
const CACHE_KEY = `gh-repos:${GITHUB_USERNAME}`;
const CACHE_TTL_MS = 10 * 60 * 1000;

interface FeaturedProject {
  name: string;
  description: string;
  tech: string[];
  updated?: string;
  link?: { href: string; label: string; icon?: 'external' | 'mail' };
}

// Curated projects (private repos, case studies, etc.). Rendered above the live GitHub list.
const featuredProjects: FeaturedProject[] = [
  {
    name: 'Waffy – AI WhatsApp Business Assistant',
    description:
      'Built an AI-powered WhatsApp assistant for small businesses to automate customer conversations, manage leads, and integrate CRM workflows through WhatsApp.',
    tech: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'Meta WhatsApp API', 'HubSpot'],
    updated: 'Nov 2026',
  },
];

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  topics?: string[];
}

const languageColor: Record<string, string> = {
  Python: 'text-yellow-700 border-yellow-500/30 bg-yellow-500/10',
  JavaScript: 'text-amber-700 border-amber-500/30 bg-amber-500/10',
  TypeScript: 'text-sky-700 border-sky-500/30 bg-sky-500/10',
  Java: 'text-orange-700 border-orange-500/30 bg-orange-500/10',
  'Jupyter Notebook': 'text-orange-800 border-orange-500/30 bg-orange-500/10',
  HTML: 'text-rose-700 border-rose-500/30 bg-rose-500/10',
  CSS: 'text-blue-700 border-blue-500/30 bg-blue-500/10',
  Go: 'text-cyan-700 border-cyan-500/30 bg-cyan-500/10',
  Rust: 'text-orange-700 border-orange-500/30 bg-orange-500/10',
  'C++': 'text-pink-700 border-pink-500/30 bg-pink-500/10',
  C: 'text-stone-700 border-zinc-500/30 bg-zinc-500/10',
  Shell: 'text-taupe-700 border-taupe-500/30 bg-taupe-500/10',
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

interface CachedRepos {
  ts: number;
  repos: GitHubRepo[];
}

const readCache = (): CachedRepos | null => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CachedRepos;
  } catch {
    return null;
  }
};

const writeCache = (repos: GitHubRepo[]) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), repos }));
  } catch {
    // storage full / unavailable — ignore
  }
};

const INITIAL_VISIBLE_REPOS = 6;

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const fetchRepos = useCallback(async (force: boolean, signal?: AbortSignal) => {
    const cached = readCache();
    const fresh = cached && Date.now() - cached.ts < CACHE_TTL_MS;

    if (cached && !force) {
      setRepos(cached.repos);
      setLoading(false);
    }
    if (fresh && !force) return;

    try {
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?type=public&sort=updated&per_page=100`,
        { signal, headers: { Accept: 'application/vnd.github+json' } },
      );
      if (res.status === 403 || res.status === 429) {
        if (!cached || force) setError('GitHub rate limit reached. Try again in a bit.');
        return;
      }
      if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
      const data: GitHubRepo[] = await res.json();
      const visible = data
        .filter((r) => !r.fork && !r.archived)
        .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
      setRepos(visible);
      setError(null);
      writeCache(visible);
    } catch (e) {
      if ((e as Error).name === 'AbortError') return;
      if (!cached || force) setError((e as Error).message || 'Failed to load repositories');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchRepos(false, controller.signal);
    return () => controller.abort();
  }, [fetchRepos]);

  const handleRefresh = async () => {
    if (refreshing) return;
    setRefreshing(true);
    try {
      localStorage.removeItem(CACHE_KEY);
    } catch {
      // ignore
    }
    await fetchRepos(true);
    setRefreshing(false);
  };

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-number mb-5">03 / Projects</div>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
                Code in the <span className="serif-italic text-stone-700">open</span>
              </h2>
              <p className="mt-3 text-stone-600 max-w-2xl">
                Live from my GitHub. Updates here automatically when I push new work.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleRefresh}
                disabled={refreshing}
                aria-label="Refresh projects from GitHub"
                title="Refresh from GitHub"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-stone-300 bg-white/70 text-sm text-stone-700 hover:border-taupe-500/50 hover:text-charcoal hover:bg-taupe-500/10 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin text-taupe-700' : ''}`} />
                <span className="font-mono text-xs">{refreshing ? 'refreshing' : 'refresh'}</span>
              </button>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-300 bg-white/70 text-sm text-stone-800 hover:border-taupe-500/50 hover:text-charcoal hover:bg-taupe-500/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                @{GITHUB_USERNAME}
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </motion.div>

        {loading && (
          <div className="flex items-center gap-3 text-stone-600 font-mono text-sm">
            <Loader2 className="w-4 h-4 animate-spin text-taupe-700" />
            fetching repositories…
          </div>
        )}

        {error && !loading && (
          <div className="glass rounded-2xl p-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-700 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-charcoal">Couldn't load repositories</div>
              <div className="text-xs text-stone-600 mt-1 font-mono">{error}</div>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-taupe-700 hover:text-taupe-800 mt-3"
              >
                View on GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {!loading && !error && repos.length === 0 && featuredProjects.length === 0 && (
          <div className="glass rounded-2xl p-6 text-sm text-stone-600">No public repositories yet.</div>
        )}

        {(featuredProjects.length > 0 || (!loading && !error && repos.length > 0)) && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((p, index) => {
              const LinkIcon = p.link?.icon === 'mail' ? Mail : ExternalLink;
              const Wrapper: React.ElementType = p.link ? motion.a : motion.div;
              const wrapperProps = p.link
                ? { href: p.link.href, target: '_blank', rel: 'noopener noreferrer' }
                : {};
              return (
                <Wrapper
                  key={`featured-${p.name}`}
                  {...wrapperProps}
                  className="group glass rounded-2xl p-5 flex flex-col hover:border-violet-500/40 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <Lock className="w-4 h-4 text-violet-700 flex-shrink-0" />
                      <h3 className="text-base font-semibold text-charcoal truncate group-hover:text-violet-800 transition-colors">
                        {p.name}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-violet-700 bg-violet-500/10 border border-violet-500/30 px-2 py-0.5 rounded-full flex-shrink-0">
                      private
                    </span>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed line-clamp-3 min-h-[3.75rem]">
                    {p.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md border border-stone-200 bg-white/80 text-[10px] text-stone-600 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex items-center justify-between gap-2 text-xs">
                    {p.link ? (
                      <span className="inline-flex items-center gap-1.5 text-violet-700 group-hover:text-violet-800 font-mono">
                        <LinkIcon className="w-3 h-3" />
                        {p.link.label}
                      </span>
                    ) : (
                      <span className="text-stone-500 font-mono">Available on request</span>
                    )}
                    {p.updated && (
                      <span className="inline-flex items-center gap-1 text-stone-500 font-mono">
                        <Calendar className="w-3 h-3" />
                        {p.updated}
                      </span>
                    )}
                  </div>
                </Wrapper>
              );
            })}
            {(showAll ? repos : repos.slice(0, INITIAL_VISIBLE_REPOS)).map((repo, index) => {
              const langClass =
                repo.language && languageColor[repo.language]
                  ? languageColor[repo.language]
                  : 'text-stone-700 border-stone-300 bg-stone-200/60';
              return (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass rounded-2xl p-5 flex flex-col hover:border-taupe-500/40 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <Code2 className="w-4 h-4 text-taupe-700 flex-shrink-0" />
                      <h3 className="text-base font-semibold text-charcoal truncate group-hover:text-taupe-700 transition-colors">
                        {repo.name}
                      </h3>
                    </div>
                    <ExternalLink className="w-4 h-4 text-stone-500 group-hover:text-taupe-700 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed line-clamp-3 min-h-[3.75rem]">
                    {repo.description || 'No description provided.'}
                  </p>

                  {repo.topics && repo.topics.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {repo.topics.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md border border-stone-200 bg-white/80 text-[10px] text-stone-600 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto pt-4 flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-3 text-stone-600 font-mono">
                      {repo.language && (
                        <span className={`px-2 py-0.5 rounded-md border ${langClass}`}>{repo.language}</span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="inline-flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="inline-flex items-center gap-1">
                          <GitFork className="w-3 h-3" />
                          {repo.forks_count}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 text-stone-500 font-mono">
                      <Calendar className="w-3 h-3" />
                      {formatDate(repo.updated_at)}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        )}

        {!loading && !error && repos.length > INITIAL_VISIBLE_REPOS && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-stone-200 bg-white/70 text-sm text-stone-700 hover:border-taupe-500/40 hover:text-charcoal hover:bg-taupe-500/5 transition-colors duration-200 focus-ring"
            >
              <span className="font-mono text-xs">
                {showAll ? 'show fewer' : `show all ${repos.length} repos`}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
