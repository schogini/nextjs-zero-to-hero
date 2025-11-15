export const metadata = { title: "Module 2 - Tailwind & Layout", description: "Global styles + components" };
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="p-4 shadow bg-white">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <a href="/" className="font-bold">Module 2</a>
            <nav className="space-x-4 text-sm">
              <a href="/" className="hover:underline">Home</a>
              <a href="/about" className="hover:underline">About</a>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
        <footer className="max-w-4xl mx-auto p-4 text-xs text-gray-500">© Learn Next.js</footer>
      </body>
    </html>
  );
}