import type { LucideProps } from "lucide-react"
import type { ForwardRefExoticComponent } from "react"

export type NavLink = {
    name: string,
    href: string
}

export type Experience = {
    company: string,
    role: string,
    period: string,
    current: boolean,
    description: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}