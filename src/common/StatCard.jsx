import Card from "../ui/Card";

export default function StatCard({
  label,
  value,
  icon,
}) {
  return (
    <Card>
      <div className="flex justify-between">
        <div>
          <p className="text-zinc-400">
            {label}
          </p>

          <h3 className="text-3xl font-bold mt-2">
            {value}
          </h3>
        </div>

        {icon}
      </div>
    </Card>
  );
}