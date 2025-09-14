// Promise.race → resolves/rejects with the first settled promise. If a.txt resolves first, result is that buffer. If missing.txt rejects faster, the race rejects immediately.

// Promise.allSettled → waits for all promises and gives {status, value|reason} for each, so you see success for a.txt and failure for missing.txt.
