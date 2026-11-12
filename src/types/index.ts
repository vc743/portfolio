import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent } from "react";

export type SocialLink = {
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

export type Company = {
  company: string;
  period: string;
  current: boolean;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image: string;
  isPersonalProject: boolean;
};

export type Skill = {
  name: string;
  icon: React.ReactElement;
};
