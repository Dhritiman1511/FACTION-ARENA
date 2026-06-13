import Button from "../ui/Button";

export default function ErrorState({
  title = "Something went wrong",
  message,
  onRetry,
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
      <h3 className="text-xl font-semibold">{title}</h3>

      {message && <p className="text-zinc-400 mt-2">{message}</p>}

      {onRetry && (
        <Button className="mt-6" onClick={onRetry}>
          Retry
        </Button>
      )}
    </div>
  );
}
