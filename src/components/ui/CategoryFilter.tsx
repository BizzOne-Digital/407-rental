interface CategoryFilterProps<T extends string> {
  categories: readonly T[]
  active: T
  onChange: (category: T) => void
  label?: string
}

export function CategoryFilter<T extends string>({
  categories,
  active,
  onChange,
  label = 'Filter by category',
}: CategoryFilterProps<T>) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          aria-pressed={active === category}
          className={`rounded-sm border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
            active === category
              ? 'border-brand-orange bg-brand-orange text-brand-white'
              : 'border-brand-grey/20 bg-brand-white text-brand-grey hover:border-brand-orange hover:text-brand-orange'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
