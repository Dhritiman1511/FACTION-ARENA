import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <button
      className={clsx(
        "rounded-xl font-medium transition-all",

        {
          "bg-blue-600 hover:bg-blue-700 text-white":
            variant === "primary",

          "bg-zinc-800 hover:bg-zinc-700 text-white":
            variant === "secondary",

          "border border-zinc-700":
            variant === "outline",

          "h-10 px-4":
            size === "md",

          "h-12 px-6":
            size === "lg",

          "h-8 px-3 text-sm":
            size === "sm",
        },

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}