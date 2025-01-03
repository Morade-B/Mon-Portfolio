import { aboutYou } from "@/lib/data";

export default function Sidebar() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col space-y-2 p-4 h-fit static md:sticky top-24">
      {/* Title/Name */}
      <p className="font-semibold leading-none tracking-tight">
        {aboutYou.name}
      </p>
      {/* Description */}
      <div className="space-y-4">
  {aboutYou.description.split("\n\n").map((paragraph, index) => (
    <p key={index} className="text-sm text-muted-foreground tracking-tight">{paragraph}</p>
  ))}
</div>

    </div>
  );
  
}
