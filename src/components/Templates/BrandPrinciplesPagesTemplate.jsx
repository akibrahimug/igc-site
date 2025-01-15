import Image from "next/image";
import PagesHero from "@/components/Bloks/PagesHero";
import { getNestedVals } from "@/utils";
export default function BrandPrinciplesPagesTemplate({ blok }) {
  const data = blok.enviroment[0];
  const hero = getNestedVals(data, ["Hero"], null);
  const desc1 = getNestedVals(data, ["first_description"], null);
  const desc2 = getNestedVals(data, ["second_description"], null);
  const desc3 = getNestedVals(data, ["third_description"], null);
  const desc4 = getNestedVals(data, ["fourth_description"], null);
  const image1 = getNestedVals(
    data,
    ["top_image_section", [0], "filename"],
    null
  );
  const image2 = getNestedVals(
    data,
    ["top_image_section", [1], "filename"],
    null
  );
  const image5and6 = getNestedVals(data, ["last_section_images"], null);
  const image3 = getNestedVals(
    data,
    ["second_image_section", [0], "filename"],
    null
  );
  const image4 = getNestedVals(
    data,
    ["second_image_section", [1], "filename"],
    null
  );

  return (
    <div className="bg-black text-white mt-0">
      <PagesHero story={hero} />
      <div className="p-2 md:p-4  max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="flex items-center justify-between rounded-lg p-4">
            <p className="md:max-w-xl text-justify">{desc1}</p>
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
            <div className="md:col-span-3 text-white p-4">
              <p className="md:max-w-xl text-justify">{desc2}</p>
            </div>
          </div>
          <div className="md:col-span-3 flex items-center text-white p-4 -order-1 md:order-none">
            <p className="text-lg md:text-5xl font-bold md:max-w-md">{desc3}</p>
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
            <p className="md:max-w-md text-justify">{desc4}</p>
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
    </div>
  );
}
