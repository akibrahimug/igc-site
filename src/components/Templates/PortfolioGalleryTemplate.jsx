"use client";
import { motion } from "framer-motion";
import MediaCard from "@/components/ui/media-card";

const cardReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: (index % 3) * 0.1,
      ease: "easeOut",
    },
  }),
};

export default function PortfolioGalleryTemplate({ story, eyebrow }) {
  const projects = Array.isArray(story) ? story : [];

  return (
    <div className="bg-black text-brown-100">
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 p-4">
        {projects.map((project, index) => (
          <motion.div
            key={project._uid || index}
            custom={index}
            variants={cardReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <MediaCard
              href={project.project_link}
              image={project.project_image}
              title={project.project_title}
              eyebrow={eyebrow}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
