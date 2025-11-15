export const metadata = { title: "Module 1 - Hello Next.js", description: "Your first Next.js App Router page" };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: 16 }}>
        <header style={{ marginBottom: 24 }}>
          <h1>Module 1: Hello Next.js</h1>
          <nav><a href="/">Home</a></nav>
        </header>
        <main>{children}</main>
        <footer style={{ marginTop: 24, fontSize: 12, opacity: 0.6 }}>© Learn Next.js</footer>
      </body>
    </html>
  );
}