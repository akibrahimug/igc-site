import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
const ImageWithCaption = ({ src, width, height, alt, className, caption }) => (
  <div>
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
    {caption && <p className="text-sm mt-2 text-left">{caption}</p>}
  </div>
);
function Gallery() {
  const sectionRef = useRef(null);
  const [additionalSets, setAdditionalSets] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleLoadMore = () => {
    setAdditionalSets((prevSets) => prevSets + 1);
  };

  const galleryItems = [
    { id: 1, src: "https://picsum.photos/600/800", alt: "Look 1" },
    { id: 2, src: "https://picsum.photos/600/800", alt: "Look 2" },
    { id: 3, src: "https://picsum.photos/600/800", alt: "Look 3" },
    { id: 4, src: "https://picsum.photos/600/800", alt: "Look 4" },
    { id: 5, src: "https://picsum.photos/600/800", alt: "Look 5" },
    { id: 6, src: "https://picsum.photos/600/800", alt: "Look 6" },
    { id: 7, src: "https://picsum.photos/600/800", alt: "Look 7" },
    { id: 8, src: "https://picsum.photos/600/800", alt: "Look 8" },
    { id: 9, src: "https://picsum.photos/600/800", alt: "Look 9" },
  ];

  return (
    <section
      ref={sectionRef}
      className="section bg-black-950 opacity-0 flex justify-center -mt-20 relative text-brown-200"
    >
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-transparent to-black-950 z-10"></div>
      <div className="text-center z-20 mx-2">
        <div className="container mx-auto mt-60">
          <h1 className="text-4xl font-bold mb-8">FALL/WINTER 2022</h1>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_100px_400px_3fr] gap-10 mb-10 relative md:ml-2 lg:ml-8 ">
            <div>
              <ImageWithCaption
                src={galleryItems[0].src}
                width={400}
                height={533}
                alt="Look 1"
                className="object-cover w-full h-auto md:min-w-[250px] md:min-h-[300px] lg:min-w-[350px] lg:min-h-[470px]"
              />
            </div>
            <div>
              <p className="text-sm lg:text-lg md:mb-4 text-left md:absolute bottom-0 xl:bottom-[9rem] left-0 mx-8  md:mx-0 md:max-w-[350px] lg:max-w-[400px]">
                Carefully hand-distressed materials and details, combined with a
                modern, oversized silhouette, create a look that is both edgy
                and sophisticated. Distressed knit sweaters are paired with
                tailored trousers for a perfectly undone look.
              </p>
            </div>
            <div className="md:col-span-2">
              <ImageWithCaption
                src={galleryItems[1].src}
                width={450}
                height={600}
                alt="Look 2"
                className="object-cover w-full h-auto 2xl:w-[800px] 2xl:h-[800px]"
              />
            </div>
          </div>

          <div className="md:grid md:grid-cols-1 md:grid-rows-2 mb-10">
            <div className="md:col-span-2 space-y-4 md:row-span-2">
              <div className="flex justify-center gap-8">
                {galleryItems
                  .filter((item) => [2, 3].includes(item.id))
                  .map((item) => (
                    <ImageWithCaption
                      key={item.id}
                      src={item.src}
                      width={500}
                      height={800}
                      alt={item.alt}
                      className="object-cover w-[500px] h-auto"
                    />
                  ))}
              </div>
            </div>
          </div>

          <div className="mb-10">
            <ImageWithCaption
              src={galleryItems[4].src}
              width={1200}
              height={400}
              alt="Look 5"
              className="object-cover w-full h-[500px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_1fr] xl:grid-cols-[3fr_100px_30px_1fr] gap-10 mb-10 relative">
            <div className="md:col-span-2">
              <ImageWithCaption
                src={galleryItems[1].src}
                width={450}
                height={600}
                alt="Look 2"
                className="object-cover w-full h-auto 2xl:w-[900px] 2xl:h-[800px]"
              />
            </div>
            <div>
              <p className="text-sm lg:text-lg md:mb-4 text-right md:absolute bottom-0 xl:bottom-[9rem] right-0 mx-8  md:mx-0 md:max-w-[350px] lg:max-w-[400px]">
                {" "}
                Carefully hand-distressed materials and details, combined with a
                modern, oversized silhouette, create a look that is both edgy
                and sophisticated. Distressed knit sweaters are paired with
                tailored trousers for a perfectly undone look.
              </p>
            </div>
            <div className="">
              <ImageWithCaption
                src={galleryItems[0].src}
                width={400}
                height={533}
                alt="Look 1"
                className="object-cover w-full h-auto md:min-w-[250px] md:min-h-[300px] lg:min-w-[350px] lg:min-h-[470px]"
              />
            </div>
          </div>
          <div className="md:grid md:grid-cols-1 md:grid-rows-2 mb-10">
            <div className="md:col-span-2 space-y-4 md:row-span-2">
              <div className="flex justify-center gap-8">
                {galleryItems
                  .filter((item) => [6, 7].includes(item.id))
                  .map((item) => (
                    <ImageWithCaption
                      key={item.id}
                      src={item.src}
                      width={500}
                      height={800}
                      alt={item.alt}
                      className="object-cover w-[500px] h-auto"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
