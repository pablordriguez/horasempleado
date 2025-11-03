Empleo-proxy - Minimal Next.js project to proxy lacerveceriadepozuelo.talentohq.com
================================================================================
WHAT THIS IS
- A minimal Next.js app configured to rewrite all requests to:
  https://lacerveceriadepozuelo.talentohq.com
- Intended to be deployed on Vercel and used with your custom domain
  (example: empleo.lacerveceriadepozuelo.es).
- This acts as a reverse-proxy/rewriter; content remains hosted at Talentohq.

CONTENTS
- package.json
- next.config.js
- pages/_app.js
- pages/index.js
- README.txt (this file)

HOW TO DEPLOY ON VERCEL (recommended)
1) Unzip this archive locally.
2) Commit to a git repo and push to GitHub, or upload zip directly in Vercel.
3) In Vercel, create a new project from this repository.
4) Add your custom domain (empleo.lacerveceriadepozuelo.es) in Project > Settings > Domains.
5) Configure DNS: add a CNAME 'empleo' pointing to `cname.vercel-dns.com` (or follow Vercel instructions).
6) Deploy. Vercel will serve the proxied site under your domain.

NOTES & LEGAL
- This project does not copy third-party content. It proxies requests to the target site.
- If Talentohq requires authentication for certain actions, proxying may not preserve cookies or sessions.
- If you prefer content modification or HTML injection, we can provide an Edge Function to rewrite HTML responses.

TROUBLESHOOTING
- If you see CORS or mixed-content issues, ensure the destination uses HTTPS (it does).
- If certain dynamic features break, we can switch to an Edge Function that streams and rewrites responses.

CONTACT
- If you want me to deploy this for you to Vercel and set the DNS, tell me and I will provide step instructions.
