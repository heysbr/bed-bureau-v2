"use client"
import { usePathname } from "next/navigation";


export default function PageTitle({className}: {className?: string}) {
  const pathname = usePathname()
  return (
    <div className={`text-2xl font-semibold ${className}`}>{pathname.split("/")                // break into segments
    .filter(Boolean)           // remove empty ones
    .map(segment =>
      segment
        .replace(/-/g, " ")    // turn dashes into spaces
        .replace(/\b\w/g, c => c.toUpperCase()) // capitalize words
    )}</div>
  )
}