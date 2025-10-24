import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1605029271330-95970e826af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJiYSUyMGRhbmNlJTIwbmlnaHQlMjBmZXN0aXZhbHxlbnwxfHx8fDE3NjEyODA1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Garba Dance',
    },
    {
      url: 'https://images.unsplash.com/photo-1672306325342-8373e06baf99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYW5kaXlhJTIwc3RpY2tzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYxMjgwNTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Dandiya Night',
    },
    {
      url: 'https://images.unsplash.com/photo-1760344654214-97e2ceda7c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2RkZXNzJTIwZHVyZ2ElMjBzdGF0dWUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjEyODA0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Goddess Durga Idol',
    },
    {
      url: 'https://images.unsplash.com/photo-1698221182264-d2b5e821c3a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdXJnYSUyMHB1amElMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjEyODA1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Durga Pooja Aarti',
    },
    {
      url: 'https://images.unsplash.com/photo-1666694051761-cd972857da30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkaXlhJTIwbGFtcHMlMjBmZXN0aXZhbHxlbnwxfHx8fDE3NjEyODA1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Diya Lamps',
    },
    {
      url: 'https://images.unsplash.com/photo-1760546123230-504fdd965f95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpZ29sZCUyMGZsb3dlcnMlMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc2MTI4MDUwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Marigold Decoration',
    },
    {
      url: 'https://images.unsplash.com/photo-1659451336076-9857b8cbef10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHJhbmdvbGl8ZW58MXx8fHwxNzYxMjgwNTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Rangoli Art',
    },
    {
      url: 'https://images.unsplash.com/photo-1760295336980-fdb2acc0c879?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMGdvZGRlc3MlMjBkdXJnYSUyMGFydHxlbnwxfHx8fDE3NjEyODA1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Durga Artwork',
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-pink-50 to-yellow-50 dark:from-pink-950/20 dark:to-yellow-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full mb-4">
            <ImageIcon className="w-4 h-4" />
            <span>Photo Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-red-600 mb-4">
            Festival Memories & Moments
          </h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            Relive the vibrant celebrations, devotion, and joy from previous Navaratri festivals
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-5xl p-0 border-0 bg-transparent">
            <div className="relative">
              <Button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
                size="icon"
              >
                <X className="w-6 h-6" />
              </Button>

              {selectedImage !== null && (
                <>
                  <ImageWithFallback
                    src={galleryImages[selectedImage].url}
                    alt={galleryImages[selectedImage].title}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />

                  <Button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
                    size="icon"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>

                  <Button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
                    size="icon"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                    {galleryImages[selectedImage].title}
                  </div>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
