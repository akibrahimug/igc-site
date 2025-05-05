import React from "react";
import Image from "next/image";
import { getNestedVals } from "@/utils";
function CustomPortfolioAtomTemplate({ blok }) {
  const desc1 = getNestedVals(blok, [[0], "description_one"], null);
  const desc2 = getNestedVals(blok, [[0], "description_two"], null);
  const desc3 = getNestedVals(blok, [[0], "description_three"], null);
  const desc4 = getNestedVals(blok, [[0], "description_four"], null);
  const image1 = getNestedVals(blok, [[0], "image_one", "filename"], null);
  const image2 = getNestedVals(blok, [[0], "image_two", "filename"], null);
  const image3 = getNestedVals(blok, [[0], "image_three", "filename"], null);
  const image4 = getNestedVals(blok, [[0], "image_four", "filename"], null);
  const image5and6 = getNestedVals(blok, [[0], "last_two_images"], null);

  return (
    <div className="p-2 md:p-4  max-w-[1500px] mx-auto bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="flex items-center justify-between rounded-lg p-4">
          <p className="text-xl lg:text-lg md:max-w-xl text-justify leading-relaxed">
            {desc1}
          </p>
        </div>
        <div className="relative h-96">
          <Image
            src={image1}
            alt="image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-8">
        <div className="md:col-span-3 row-span-2">
          <Image
            src={image2}
            alt="image 2"
            width={400}
            height={800}
            className="h-128 w-full object-cover"
          />
          <div className="md:col-span-3 text-brown-100 p-4">
            <p className="text-xl lg:text-lg md:max-w-xl text-justify leading-relaxed">
              {desc2}
            </p>
          </div>
        </div>
        <div className="md:col-span-3 flex items-center text-brown-100 p-4 -order-1 md:order-none">
          <p className="text-lg md:text-5xl font-bold md:max-w-md leading-relaxed">
            {desc3}
          </p>
        </div>
        <div className="md:col-span-3">
          <Image
            src={image3}
            alt="image 3"
            width={400}
            height={400}
            className="w-full h-[900px] object-cover"
          />
        </div>
        <div className="md:col-span-3">
          <Image
            src={image4}
            alt="image 4"
            width={400}
            height={800}
            className="h-96 w-full object-cover"
          />
        </div>
        <div className="md:col-span-3">
          <p className="text-xl lg:text-lg md:max-w-md text-justify leading-relaxed">
            {desc4}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 my-6">
        {image5and6.map((image, id) => (
          <div className="relative h-96 md:col-span-3" key={id}>
            <Image
              src={image.filename}
              alt="image 5"
              width={400}
              height={800}
              className="h-96 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomPortfolioAtomTemplate;
