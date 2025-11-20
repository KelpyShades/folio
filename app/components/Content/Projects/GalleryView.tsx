import { XIcon } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function GalleryView({ gallery, projectName }: { gallery: string[]; projectName?: string }) {
  const projectLabel = projectName ? ` for ${projectName}` : '';

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="dark:bg-borders bg-primary-light text-text-light dark:text-text shadow-custom flex h-[3.2rem] w-fit items-center justify-center gap-2 rounded-2xl px-10 py-2 font-mono text-[1.1rem] transition-all duration-700 hover:scale-105 sm:text-[1.4rem] lg:text-[1.2rem]"
          type="button"
          aria-label={`View project screenshots${projectLabel}`}
        >
          Screenshots
        </button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="bg-secondary/50 h-dvh min-w-dvw border-0 p-0"
        aria-label={`Screenshot gallery${projectLabel}`}
      >
        <DialogTitle className="sr-only">Screenshot gallery{projectLabel}</DialogTitle>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="flex h-dvh w-dvw items-center justify-center"
          aria-label="Project screenshots carousel"
        >
          <CarouselContent className="h-dvh w-dvw">
            {gallery.map((image, index) => (
              <CarouselItem key={index} className="flex items-center justify-center">
                <figure className="relative flex h-[90dvh] w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`${projectName || 'Project'} screenshot ${index + 1} of ${gallery.length}`}
                    fill
                    className="object-contain"
                  />
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <DialogClose asChild>
            <Button
              variant="default"
              size="icon-lg"
              className="border-borders absolute top-15 right-15 border-2 md:top-25 md:right-25"
              aria-label="Close gallery"
            >
              <XIcon className="size-6 lg:size-8" aria-hidden="true" />
            </Button>
          </DialogClose>
          <CarouselPrevious
            variant="default"
            size="lg"
            className="left-5 md:left-20"
            aria-label="Previous screenshot"
          />
          <CarouselNext
            variant="default"
            className="right-5 md:right-20"
            aria-label="Next screenshot"
          />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
