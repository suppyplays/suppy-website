import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import chess from "@/assets/chess.jpg";

const imgs = [
  { src: g1, alt: "Workshop scene 1" },
  { src: g2, alt: "Workshop scene 2" },
  { src: g3, alt: "Workshop scene 3" },
  { src: g4, alt: "Workshop scene 4" },
  { src: chess, alt: "Chess board close-up" },
  { src: g5, alt: "Workshop scene 5" },
  { src: g6, alt: "Workshop scene 6" },
  { src: g2, alt: "Workshop scene 2" },
  { src: g4, alt: "Workshop scene 4" },
];

export function Gallery() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader eyebrow="Gallery" title="Glimpses from the workshop." />
      <div className="mt-14 columns-2 gap-4 md:columns-3 [column-fill:_balance]">
        {imgs.map(({ src, alt }, i) => (
          <Reveal key={i} delay={i * 0.03} className="mb-4 break-inside-avoid">
            <div className="group relative overflow-hidden rounded-2xl glass">
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
