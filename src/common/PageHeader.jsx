export default function PageHeader({ title, subtitle, action }) {
  return (
    <div className="mb-8 flex justify-between items-start">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>

        {subtitle && <p className="text-zinc-400 mt-2">{subtitle}</p>}
      </div>

      {action}
    </div>
  );
}
