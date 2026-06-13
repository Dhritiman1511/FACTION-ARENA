export default function Select({
  label,
  error,
  options = [],
  placeholder = "Select option",
  ...props
}) {
  return (
    <div className="space-y-2">
      {label && <label className="text-sm text-zinc-400">{label}</label>}

      <select
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
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
