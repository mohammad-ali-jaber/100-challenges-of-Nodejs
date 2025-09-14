// CSRF: An attacker tricks a logged-in user’s browser to send unwanted requests, because cookies go automatically.

// Risk: Can change data or actions in the victim’s account.

// Mitigation in Express: Use CSRF tokens (like with csurf) or set cookies with SameSite to block cross-site requests.
// app.use(require("csurf")({ cookie: true }));