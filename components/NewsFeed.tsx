"use client";

import { useCallback, useEffect, useState } from "react";

interface NewsArticle {
  id: string;
  url: string;
  title: string;
  source: string;
  description: string;
}

export default function NewsFeed() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const loadNews = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/news", { cache: "no-store" });
      if (!response.ok) {
        throw new Error("Network error");
      }

      const data = await response.json();
      if (Array.isArray(data.data)) {
        setNews(data.data);
      } else if (Array.isArray(data)) {
        setNews(data);
      } else {
        setNews([]);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load news");
      setNews([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadNews();
    }, 0);
    return () => clearTimeout(timer);
  }, [loadNews]);

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const openArticle = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-xl shadow-black/20">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-sky-300/80">
            Market News
          </p>
          <h2 className="text-2xl font-semibold text-white">
            Latest headlines
          </h2>
        </div>

        <button
          type="button"
          onClick={loadNews}
          disabled={loading}
          className="inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-slate-700"
        >
          {loading ? "Refreshing..." : "Refresh News"}
        </button>
      </div>

      {loading ? (
        <div className="rounded-3xl bg-white/5 p-8 text-center text-sm text-slate-300">
          Loading news...
        </div>
      ) : error ? (
        <div className="rounded-3xl bg-rose-500/10 p-8 text-center text-sm text-rose-200">
          {error}
        </div>
      ) : news.length === 0 ? (
        <div className="rounded-3xl bg-white/5 p-8 text-center text-sm text-slate-300">
          No news available.
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {news.map((article) => {
            const key = article.id || article.url;
            const expanded = expandedIds.has(key);
            const snippet =
              article.description.length > 140
                ? `${article.description.slice(0, 140).trim()}...`
                : article.description;

            return (
              <article
                key={key}
                onClick={() => openArticle(article.url)}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-gray-900/95 p-5 text-left transition duration-200 hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-slate-900"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
                      {article.source}
                    </span>
                    <span className="text-xs uppercase tracking-[0.24em] text-slate-500 group-hover:text-slate-300">
                      Open in new tab
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold leading-snug text-white">
                    {article.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-300">
                    {expanded ? article.description : snippet}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        event.preventDefault();
                        toggleExpanded(key);
                      }}
                      className="text-sm font-semibold text-sky-300 transition hover:text-white"
                    >
                      {expanded ? "Show less" : "Show more"}
                    </button>
                    <span className="text-xs text-slate-500">
                      Click card to open full article
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
