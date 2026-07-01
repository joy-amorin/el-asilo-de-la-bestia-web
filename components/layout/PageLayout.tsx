import { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
};

export default function PageLayout({ title, children }: Props) {
  return (
    <main className="min-h-screen bg-abyss text-parchment px-8 py-16">
      <div className="max-w-5xl mx-auto">
        {title && (
          <h1 className="font-heading text-4xl uppercase mb-10">
            {title}
          </h1>
        )}

        {children}
      </div>
    </main>
  );
}