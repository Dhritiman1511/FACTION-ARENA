export default function EmptyState({
  title = "No data found",
  message,
  action,
}) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        py-16
        text-center
      "
    >
      <h3 className="text-lg font-semibold">{title}</h3>

      {message && <p className="text-zinc-400 mt-2">{message}</p>}

      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
