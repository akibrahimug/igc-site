"use client";
import Template3 from '@/components/template-3'
import Image from 'next/image'
import Link from 'next/link'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Banner from '@/components/Banner-fullscreen';

var image = "https://igcfashion.africa/images/folio/sample/AW19/aw1.jpg"

export default function Events() {
  const projects = [
    { title: "GZANGS: AFTERNATIVEREALITIES", href: "/events/floor", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    { title: "GUGUMUKA MU KAZO", href: "/events/gugumuka", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    { title: "KWETU KWANZA", href: "/events/mars", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    { title: "NDERE CENTRE", href: "/events/ndere-centre", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    { title: "SOCREATIVE SUMMIT JOHANNESBURG", href: "/events/so-creative", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    { title: "SENEGAL", href: "/events/senegal", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    { title: "IATF CAMEX 23", href: "/events/iatf-camex", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
    { title: "LONDON FASHION WEEK 2023", href: "/events/london-fashion-week", image: "https://igcfashion.africa/images/folio/sample/AW19/aw2.jpg" },
];

  // const image = "https://media.canva.com/v2/image-resize/format:JPG/height:533/quality:92/uri:s3%3A%2F%2Fmedia-private.canva.com%2FtPDUk%2FMAGTRGtPDUk%2F1%2Fp.jpg/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAEvhqh583vISUyPAIWjAtkEYFYdkIosW4CYQYtuJG3cE&exp=1731179777&osig=AAAAAAAAAAAAAAAAAAAAAB9dMoT-sTaHt9tIUJP8WQSsft1bsqA4wXZBZ1cAIOPo&signer=media-rpc&x-canva-quality=screen"
  const title = "EVENTS"
  return (
    <div className="bg-black text-white">      
    <Banner title={title} image={image} />

    <Carousel 
      className="w-full pt-4"
        plugins={[
            Autoplay({
            delay: 5000,
            }),
        ]}

        opts={{
            loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-32 md:h-[500px] w-full">
              <img
                src="https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0"
                alt="Banner 1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)]">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold">UPCOMING EVENTS</h2>
                  <p className="mt-2 text-lg">Checkout our upcoming events</p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-64 md:h-[500px] w-full overflow-hidden">
              <img
                src="https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0"
                alt="Banner 1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)]">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold">Discover the Future</h2>
                  <p className="mt-2 text-lg">Innovative solutions for your business</p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-64 md:h-[500px] w-full overflow-hidden">
              <img
                src="https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0"
                alt="Banner 1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)]">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold">Discover the Future</h2>
                  <p className="mt-2 text-lg">Innovative solutions for your business</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2ll bg-white/50 p-2 shadow-md transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          <ChevronLeftIcon className="h-6 w-6 text-primary" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2ll bg-white/50 p-2 shadow-md transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          <ChevronRightIcon className="h-6 w-6 text-primary" />
        </CarouselNext>
      </Carousel>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 p-4">
    {projects.map((project, index) => (
      <Link href={project.href} key={index}>
        <div key={index} className="relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            // layout="fill"
            width={600}
            height={1200}
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold text-center px-4">{project.title}</h2>
          </div>
        </div>
      </Link>
    ))}
  </div>
  </div>
  )
}


function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}