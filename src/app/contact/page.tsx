import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact — RITM Fitness Club",
  description:
    "Get in touch with RITM Fitness Club in Rustavi. Book a visit or ask a question.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Start your
            <br />
            <span className="text-accent-strong">journey</span>
          </>
        }
        description="Ask a question, book a visit, or just say hi. We usually reply within a day."
        image="/heroes/contact.jpg"
      />
      <Contact showHeading={false} />
    </>
  );
}
