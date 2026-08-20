import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSeo, pageTitle } from '../lib/seo'
import { CategoryFilter } from '../components/ui/CategoryFilter'
import { VehicleCard } from '../components/ui/VehicleCard'
import { Button } from '../components/ui/Button'
import { useContent } from '../context/ContentContext'
import { FLEET_CATEGORIES, filterVehicles, type FleetCategory } from '../data/vehicles'

export function FleetPage() {
  const { content, loading } = useContent()

  useSeo({
    title: pageTitle('Vehicle Fleet'),
    description:
      'Browse 407 Auto Rentals fleet of economy, hybrid, SUV, luxury, and pickup truck rentals in the Greater Toronto Area.',
  })

  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') as FleetCategory | null
  const [activeCategory, setActiveCategory] = useState<FleetCategory>(
    categoryParam && FLEET_CATEGORIES.includes(categoryParam) ? categoryParam : 'All',
  )

  useEffect(() => {
    if (categoryParam && FLEET_CATEGORIES.includes(categoryParam)) {
      setActiveCategory(categoryParam)
    }
  }, [categoryParam])

  const handleCategoryChange = (category: FleetCategory) => {
    setActiveCategory(category)
    if (category === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  const filteredVehicles = filterVehicles(activeCategory, content.vehicles)

  return (
    <>
      <section className="bg-brand-black py-16">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-brand-white sm:text-4xl lg:text-5xl">Our Vehicle Fleet</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-white/80">
            Explore our diverse fleet of rental vehicles. Contact us for current availability and
            pricing.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="mb-8">
            <CategoryFilter
              categories={FLEET_CATEGORIES}
              active={activeCategory}
              onChange={handleCategoryChange}
              label="Filter vehicles by category"
            />
          </div>

          {loading ? (
            <p className="py-16 text-center text-brand-grey-light">Loading fleet...</p>
          ) : filteredVehicles.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg text-brand-grey-light">No vehicles found in this category.</p>
              <Button className="mt-4" onClick={() => handleCategoryChange('All')} variant="outline">
                View All Vehicles
              </Button>
            </div>
          )}

          <div className="mt-12 rounded-sm border border-brand-orange/20 bg-brand-orange/5 p-6 text-center">
            <p className="text-sm text-brand-grey">
              <strong>Note:</strong> Availability and pricing may vary. Contact our team for current
              rates and to confirm your preferred vehicle.
            </p>
            <Button to="/booking" className="mt-4" size="lg">
              Request a Vehicle
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
