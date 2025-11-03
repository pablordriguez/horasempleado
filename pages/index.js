export default function Home() {
  return (
    <main style={{fontFamily:'system-ui, -apple-system, Roboto, sans-serif', padding:40}}>
      <h1>Proxy ready</h1>
      <p>This Next.js app is configured to proxy all requests to <code>https://lacerveceriadepozuelo.talentohq.com</code>.</p>
      <p>Deploy this project on Vercel and point your domain to it. The proxy will serve the external site under your domain.</p>
    </main>
  );
}
