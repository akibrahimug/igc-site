import Image from "next/image";
import { getNestedVals } from "@/utils";

export default function PortfolioAtomTemplate({ story }) {
  const description_one = getNestedVals(
    story,
    ["content", "portfolio_atom_template", [0], "description_one"],
    null
  );
  const description_two = getNestedVals(
    story,
    ["content", "portfolio_atom_template", [0], "description_two"],
    null
  );
  const description_three = getNestedVals(
    story,
    ["content", "portfolio_atom_template", [0], "description_three"],
    null
  );
  const image1 = getNestedVals(
    story,
    ["content", "portfolio_atom_template", [0], "image_one", "filename"],
    null
  );
  const image2 = getNestedVals(
    story,
    ["content", "portfolio_atom_template", [0], "image_two", "filename"],
    null
  );
  const image3 = getNestedVals(
    story,
    ["content", "portfolio_atom_template", [0], "image_three", "filename"],
    null
  );
  const image4 = getNestedVals(
    story,
    ["content", "portfolio_atom_template", [0], "image_four", "filename"],
    null
  );
  const image5 = getNestedVals(
    story,
    ["content", "portfolio_atom_template", [0], "last_image", "filename"],
    null
  );
  const imageCards = getNestedVals(
    story,
    ["content", "image_cards", [0], "image_three_cards"],
    null
  );
  return (
    <div className="bg-black text-brown-100 mt-0">
      <div className="p-2 md:p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-24">
          {imageCards.map((project, index) => (
            <div key={index} className="relative overflow-hidden mt-10">
              <Image
                src={project["filename"]}
                alt={project["filename"]}
                width={600}
                height={1200}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
        <p className="text-xl lg:text-lg my-6 max-w-3xl text-justify leading-relaxed">
          {description_one}
        </p>
        <div className="relative h-128 mb-6">
          <Image
            src={image1}
            alt={image1}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="mx-auto grid md:grid-cols-6 gap-4 md:gap-24 md:mt-16">
          <div className="md:col-span-2">
            <Image
              src={image2}
              alt={image2}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:col-span-2"></div>
          <div className="md:col-span-2 relative">
            <Image
              src={image3}
              alt={image3}
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 pointer-events-none"></div>
          </div>
          <div className="col-span-3 flex items-center bg-black text-brown-100 p-4">
            <p className=" text-lg md:text-5xl font-bold justify-center leading-relaxed">
              {description_two}
            </p>
          </div>
          <div className="col-span-3 row-span-2">
            <Image
              src={image4}
              alt={image4}
              width={900}
              height={1200}
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="col-span-3 flex items-center justify-center bg-black text-brown-100 p-4">
              <p className="text-lg md:text-5xl font-bold text-left max-w-xl leading-relaxed">
                {description_three}
              </p>
            </div>
          </div>
          <div className="col-span-3">
            <Image
              src={image5}
              alt={image5}
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
