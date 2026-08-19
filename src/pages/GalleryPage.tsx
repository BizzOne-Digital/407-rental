import { useState } from 'react'
import { useSeo, pageTitle } from '../lib/seo'
import { CategoryFilter } from '../components/ui/CategoryFilter'
import { useContent } from '../context/ContentContext'
import { GALLERY_CATEGORIES, type GalleryCategory } from '../data/gallery'

export function GalleryPage() {
  useSeo({
    title: pageTitle('Gallery'),
    description:
      'Browse the 407 Auto Rentals gallery featuring luxury, SUV, economy, hybrid, and pickup truck vehicles across the GTA.',
  })

  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All')
  const { content } = useContent()
  const images = activeCategory === 'All'
    ? content.gallery
    : content.gallery.filter((img) => img.category === activeCategory)

  return (
    <>
      <section className="bg-brand-black py-16">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Gallery</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Explore our premium vehicle fleet and service. Demo images shown — client photos can be
            added when available.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="mb-8">
            <CategoryFilter
              categories={GALLERY_CATEGORIES}
              active={activeCategory}
              onChange={setActiveCategory}
              label="Filter gallery by category"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <figure
                key={image.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-black/80 to-transparent p-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                    {image.category}
                  </span>
                  <p className="text-sm font-semibold text-white">{image.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
