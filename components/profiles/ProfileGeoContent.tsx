import type { ProfileGeoBlock } from "@/data/profile-geo";

export function ProfileGeoContent({ blocks }: { blocks: ProfileGeoBlock[] }) {
  if (blocks.length === 0) return null;

  return (
    <div className="my-8 space-y-6">
      {blocks.map((block) => (
        <div
          key={block.title}
          className={
            block.type === "highlight"
              ? "border-l-2 border-ochre pl-5"
              : "rounded-[14px] border border-rule bg-oat/70 p-6"
          }
        >
          <h2 className="break-words font-display text-xl text-ink">{block.title}</h2>
          <p className="prose-safe mt-2.5 leading-relaxed text-body">{block.content}</p>
        </div>
      ))}
    </div>
  );
}
