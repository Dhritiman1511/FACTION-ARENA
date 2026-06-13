import Spinner from "../ui/Spinner";

export default function LoadingState({ text = "Loading..." }) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        py-16
        gap-4
      "
    >
      <Spinner />

      <p className="text-zinc-400">{text}</p>
    </div>
  );
}
