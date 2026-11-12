import type { ReactNode } from "react";
import Reveal, { Rule } from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
};

const Section = ({ id, index, title, children }: SectionProps) => (
  <section id={id} className="scroll-mt-14 px-5 pb-24 md:px-10 md:pb-40">
    <Rule />
    <Reveal className="flex items-start justify-between gap-6 pb-12 pt-5 md:pb-20 md:pt-6">
      <h2 className="text-[clamp(2.75rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.05em]">
        {title}
      </h2>
      <span className="pt-2 font-mono text-xs text-muted md:text-sm">({index})</span>
    </Reveal>
    {children}
  </section>
);

export default Section;
