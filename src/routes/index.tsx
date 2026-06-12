import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KlinikkFlow — Meta Ads Dashboard" },
      { name: "description", content: "Ukentlig oversikt over Meta Ads-kontoer i KlinikkFlow-porteføljen." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/meta.html"
      title="KlinikkFlow Dashboard"
      style={{ border: "none", width: "100vw", height: "100vh", display: "block" }}
    />
  );
}
