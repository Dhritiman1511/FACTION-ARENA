import clsx from "clsx";

export default function Badge({
  children,
  variant = "default",
}) {
  return (
    <span
      className={clsx(
        "px-2 py-1 rounded-full text-xs font-medium",

        {
          "bg-zinc-800 text-zinc-200":
            variant === "default",

          "bg-green-500/20 text-green-400":
            variant === "success",

          "bg-yellow-500/20 text-yellow-400":
            variant === "warning",

          "bg-red-500/20 text-red-400":
            variant === "danger",

          "bg-blue-500/20 text-blue-400":
            variant === "info",
        }
      )}
    >
      {children}
    </span>
  );
}