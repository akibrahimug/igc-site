"use client";
import { motion } from "framer-motion";
import MediaCard from "@/components/ui/media-card";
import SectionHeading from "@/components/ui/section-heading";

const HomeLastSection = ({ blok }) => {
  const cards = Array.isArray(blok?.card_images) ? blok.card_images : [];

  return (
    <section className="bg-black-950 text-brown-100">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeading title={blok?.Heading} className="mb-12" />
        </motion.div>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 ipad:grid-cols-3 gap-x-6 gap-y-12"
        >
          {cards.map((card, index) => (
            <motion.li
              key={card.id || index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <MediaCard
                variant="stacked"
                image={card}
                title={card.source}
                caption={card.name}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeLastSection;
