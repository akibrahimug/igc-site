"use client";
import { useIgcData } from "@/app/ContextProvider";
import Template3 from "@/components/template-3";
import { getAssetSrc, getLinkHref } from "@/utils/storyblok";

function FashionCypher() {
  const { story } = useIgcData();

  if (!story.content) {
    return <></>;
  }

  const blok = story.content;
  const projects = (blok.projects || []).map((item) => ({
    href: getLinkHref(item.project_link),
    image: getAssetSrc(item.project_image),
    title: item.project_title,
  }));

  return (
    <Template3
      title={blok.title}
      description={blok.description}
      image={blok.image}
      projects={projects}
    />
  );
}

export default FashionCypher;
