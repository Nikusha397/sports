import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";

const tiles = [
  { label: "Weights floor", className: "sm:col-span-2 sm:row-span-2 aspect-square sm:aspect-auto" },
  { label: "Cardio zone", className: "aspect-square" },
  { label: "Studio", className: "aspect-square" },
  { label: "Functional rig", className: "aspect-square" },
  { label: "Recovery area", className: "aspect-square" },
];

export function Gallery({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="gallery" className="scroll-mt-24 bg-surface py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        {showHeading && (
          <SectionHeading
            eyebrow="Inside the club"
            title="Take a look around"
            description="A clean, spacious, fully-equipped training environment designed to keep you motivated."
          />
        )}

        <Reveal>
          <div className="grid auto-rows-[1fr] grid-cols-2 gap-4 sm:grid-cols-4">
            {tiles.map((t) => (
              <ImagePlaceholder
                key={t.label}
                label={t.label}
                rounded="rounded-2xl"
                className={t.className}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
