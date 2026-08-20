import { useState, useId } from 'react'
import type { FAQ } from '../../data/faqs'

interface FAQAccordionProps {
  items: FAQ[]
  limit?: number
}

export function FAQAccordion({ items, limit }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)
  const baseId = useId()
  const displayItems = limit ? items.slice(0, limit) : items

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="divide-y divide-brand-grey/10 rounded-sm border border-brand-grey/10 bg-brand-white">
      {displayItems.map((item) => {
        const isOpen = openId === item.id
        const panelId = `${baseId}-${item.id}-panel`
        const buttonId = `${baseId}-${item.id}-button`

        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-brand-black transition-colors hover:text-brand-red"
              >
                <span>{item.question}</span>
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center text-brand-red transition-transform duration-200 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-6 pb-5"
            >
              <p className="text-brand-grey-light leading-relaxed">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
