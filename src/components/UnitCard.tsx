import { ReactNode } from 'react';

interface UnitCardProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function UnitCard({ id, title, children }: UnitCardProps) {
  return (
    <section id={id} className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 mb-8 shadow-sm border border-slate-200 dark:border-slate-700 scroll-mt-24">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b-2 border-blue-500 inline-block">
        {title}
      </h2>
      <div className="space-y-8">
        {children}
      </div>
    </section>
  );
}

export function QuestionBlock({ id, title, children }: { id?: string, title: string, children: ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24">
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">{title}</h3>
      <div className="text-slate-600 dark:text-slate-300 space-y-4">
        {children}
      </div>
    </div>
  );
}
