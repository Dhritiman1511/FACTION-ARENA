export default function Avatar({
  src,
  alt = "User",
  name,
  size = "md",
}) {
  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-lg",
  };

  const initials =
    name
      ?.split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "?";

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`
          rounded-full
          object-cover
          ${sizes[size]}
        `}
      />
    );
  }

  return (
    <div
      className={`
        rounded-full
        bg-zinc-800
        flex
        items-center
        justify-center
        font-semibold
        ${sizes[size]}
      `}
    >
      {initials}
    </div>
  );
}