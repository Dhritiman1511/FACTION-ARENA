export default function Input({ label, error, ...props }) {
  return (
    <div className="space-y-2">
      {label && <label className="text-sm text-zinc-400">{label}</label>}

      <input
        className="
          w-full
          h-11
          px-4
          rounded-xl
          bg-zinc-900
          border
          border-zinc-800
          outline-none
          focus:border-blue-500
        "
        {...props}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
