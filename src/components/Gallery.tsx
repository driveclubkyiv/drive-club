"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface GalleryProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
  className?: string
}

export function Gallery({ images, columns = 3, className }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  return (
    <>
      <div className={`grid ${gridCols[columns]} gap-4 ${className}`}>
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </DialogTrigger>
          </Dialog>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
            <div className="relative w-full h-full flex items-center justify-center bg-black">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={prevImage}
                disabled={images.length <= 1}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={nextImage}
                disabled={images.length <= 1}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <div className="relative w-full h-full">
                <Image
                  src={images[selectedImage].src || "/placeholder.svg"}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              {images[selectedImage].caption && (
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white text-sm bg-black/50 rounded px-3 py-2">{images[selectedImage].caption}</p>
                </div>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <p className="text-white text-xs bg-black/50 rounded px-2 py-1">
                  {selectedImage + 1} / {images.length}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
