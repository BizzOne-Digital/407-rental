export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  isDemo: true
}

// Demo/placeholder team profiles — replace with actual team members when available
export const teamMembers: TeamMember[] = [
  {
    id: 'demo-team-01',
    name: 'Demo Team Member',
    role: 'Rental Specialist',
    bio: 'Dedicated to helping customers find the right vehicle for their needs. Experienced in insurance replacement and retail rentals.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    isDemo: true,
  },
  {
    id: 'demo-team-02',
    name: 'Demo Team Member',
    role: 'Customer Service Manager',
    bio: 'Committed to delivering exceptional customer service and ensuring a smooth rental experience for every client.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    isDemo: true,
  },
  {
    id: 'demo-team-03',
    name: 'Demo Team Member',
    role: 'Fleet Coordinator',
    bio: 'Manages vehicle availability and ensures our fleet is maintained to the highest standards for customer safety and comfort.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    isDemo: true,
  },
  {
    id: 'demo-team-04',
    name: 'Demo Team Member',
    role: 'Insurance Relations',
    bio: 'Specializes in insurance-related rentals and direct billing coordination with body shops and insurance professionals.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    isDemo: true,
  },
]
