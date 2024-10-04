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
      <div className="text-center z-20">
        <div className="container mx-auto mt-60">
          <h1 className="text-4xl font-bold mb-8">FALL/WINTER 2022</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-1">
              <ImageWithCaption
                src={galleryItems[0].src}
                width={300}
                height={400}
                alt="Look 1"
                className="w-full h-auto"
                caption="LOOK 1"
              />
            </div>
            <div className="md:col-span-1 relative">
              <p className="text-sm mb-4 text-left md:absolute bottom-10 left-0">
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
                className="w-full h-auto"
                caption="LOOK 2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-10">
            <div className="md:col-span-2 space-y-4">
              <div className="flex justify-center gap-8">
                {galleryItems
                  .filter((item) => [2, 3].includes(item.id))
                  .map((item) => (
                    <ImageWithCaption
                      key={item.id}
                      src={item.src}
                      width={225}
                      height={300}
                      alt={item.alt}
                      className="w-[355px] h-[470px]"
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
              className="w-full h-[500px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <ImageWithCaption
                src={galleryItems[6].src}
                width={300}
                height={400}
                alt="Look 7"
                className="w-full h-auto"
                caption="LOOK 7"
              />
            </div>
            <div className="md:col-span-1 relative">
              <p className="text-sm mb-4 text-left md:absolute bottom-10 left-0">
                Carefully hand-distressed materials and details, combined with a
                modern, oversized silhouette, create a look that is both edgy
                and sophisticated. Distressed knit sweaters are paired with
                tailored trousers for a perfectly undone look.
              </p>
            </div>
            <div className="md:col-span-1">
              <ImageWithCaption
                src={galleryItems[5].src}
                width={450}
                height={600}
                alt="Look 6"
                className="w-full h-auto"
                caption="LOOK 6"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-10">
            <div className="md:col-span-2 space-y-4">
              <div className="flex justify-center gap-8">
                {galleryItems
                  .filter((item) => [6, 7].includes(item.id))
                  .map((item) => (
                    <ImageWithCaption
                      key={item.id}
                      src={item.src}
                      width={225}
                      height={300}
                      alt={item.alt}
                      className="w-[355px] h-[470px]"
                    />
                  ))}
              </div>
            </div>
          </div>

          {[...Array(additionalSets)].map((_, index) => (
            <React.Fragment key={index}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                <div className="md:col-span-2">
                  <ImageWithCaption
                    src={galleryItems[6].src}
                    width={300}
                    height={400}
                    alt={`Look ${8 + index * 2}`}
                    className="w-full h-auto"
                    caption={`LOOK ${8 + index * 2}`}
                  />
                </div>
                <div className="md:col-span-1 relative">
                  <p className="text-sm mb-4 text-left md:absolute bottom-10 left-0">
                    Carefully hand-distressed materials and details, combined
                    with a modern, oversized silhouette, create a look that is
                    both edgy and sophisticated. Distressed knit sweaters are
                    paired with tailored trousers for a perfectly undone look.
                  </p>
                </div>
                <div className="md:col-span-1">
                  <ImageWithCaption
                    src={galleryItems[5].src}
                    width={450}
                    height={600}
                    alt={`Look ${9 + index * 2}`}
                    className="w-full h-auto"
                    caption={`LOOK ${9 + index * 2}`}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-10">
                <div className="md:col-span-2 space-y-4">
                  <div className="flex justify-center gap-8">
                    {galleryItems
                      .filter((item) =>
                        [8 + index * 2, 9 + index * 2].includes(
                          item.id % galleryItems.length
                        )
                      )
                      .map((item) => (
                        <ImageWithCaption
                          key={item.id}
                          src={item.src}
                          width={225}
                          height={300}
                          alt={item.alt}
                          className="w-[355px] h-[470px]"
                        />
                      ))}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}

          <div className="text-center mb-8">
            <button
              onClick={handleLoadMore}
              className="border-2 border-brown-200 text-brown-200 px-4 py-2 hover:bg-brown-200 hover:text-black-950 hover:scale-105 transition-all duration-300"
            >
              LOAD MORE
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center">
                <ImageWithCaption
                  src={galleryItems[item].src}
                  width={225}
                  height={300}
                  alt={`Product ${item}`}
                  className="w-full h-auto mb-2 hover:scale-105 transition-all duration-300 cursor-pointer"
                />
                <h3 className="font-semibold">THE STYLE {item}</h3>
                <p className="text-sm">$1,000</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;