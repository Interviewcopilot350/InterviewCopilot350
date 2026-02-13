self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("copilot").then(cache =>
      cache.addAll([
        "/InterviewCopilot350/",
        "index.html",
        "style.css",
        "script.js"
      ])
    )
  );
});
