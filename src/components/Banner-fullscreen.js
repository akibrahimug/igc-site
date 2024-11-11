import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";


function Banner({title, image}) {
  return (
    <Carousel className="w-full">
    <CarouselContent>
        <CarouselItem>
            <div className="relative h-screen w-full">
                <img
                    src={image}
                    alt="Banner 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)]">
                    <div className="text-center text-white">
                        <h1 className="text-5xl text-center md:text-6xl font-bold mb-6">{title.toUpperCase()}</h1>
                    </div>
                        {/* <p className="mt-2 text-lg">Checkout our upcoming events</p>
                    <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        Get Started
                    </Link> */}
                </div>
            </div>
        </CarouselItem>
    </CarouselContent>
</Carousel>
  )
}

export default Banner