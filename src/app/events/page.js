"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Link from "next/link"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"


const images = [
    {src: 'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0', alt: 'Event 1'},
    {src: 'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0', alt: 'Event 2'},  
    {src: 'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0', alt: 'Event 3'},
    {src: 'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0', alt: 'Event 4'},
    {src: 'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0', alt: 'Event 5'},  
    {src: 'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0', alt: 'Event 6'},
    {src: 'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0', alt: 'Event 7'},
    {src: 'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0', alt: 'Event 8'},  
    {src: 'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0', alt: 'Event 9'},
]

export default function Events() {
  return (
    <div>
      <Carousel 
      className="w-full"
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
            <div className="relative h-64 md:h-[500px] w-full">
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
      <section className="w-full py-4 md:py-8">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-4 md:mb-8">EVENT ARCHIVE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white text-xl font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      
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