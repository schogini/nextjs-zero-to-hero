export default function Card({ title, children }) {
  return (
    <div className="rounded-2xl shadow p-4 bg-white mb-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}