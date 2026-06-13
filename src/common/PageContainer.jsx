export default function PageContainer({
  children,
}) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {children}
    </div>
  );
}