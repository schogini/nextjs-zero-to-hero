import Card from "../components/Card";
export default function Page() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Welcome to Tailwind</h2>
      <Card title="Why Tailwind?">
        <ul className="list-disc pl-6 space-y-1">
          <li>Design quickly with utility classes.</li>
          <li>Keep styles near markup (cohesion).</li>
          <li>Great DX with JIT compilation.</li>
        </ul>
      </Card>
    </section>
  );
}