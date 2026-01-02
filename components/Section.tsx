export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold md:text-5xl p-2 bg-gray-800 bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
