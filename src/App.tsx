import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { AdminLayout } from './components/admin/AdminLayout'
import { ProtectedRoute } from './components/admin/ProtectedRoute'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { ContactPage } from './pages/ContactPage'
import { GalleryPage } from './pages/GalleryPage'
import { TestimonialsPage } from './pages/TestimonialsPage'
import { TeamPage } from './pages/TeamPage'
import { BookingPage } from './pages/BookingPage'
import { FleetPage } from './pages/FleetPage'
import { FAQPage } from './pages/FAQPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { AdminLoginPage } from './pages/admin/AdminLoginPage'
import { AdminDashboard } from './pages/admin/AdminDashboard'
import { AdminSitePage } from './pages/admin/AdminSitePage'
import { AdminHeroPage } from './pages/admin/AdminHeroPage'
import { AdminHomepagePage } from './pages/admin/AdminHomepagePage'
import { AdminFleetPage } from './pages/admin/AdminFleetPage'
import { AdminServicesPage } from './pages/admin/AdminServicesPage'
import { AdminTestimonialsPage } from './pages/admin/AdminTestimonialsPage'
import { AdminTeamPage } from './pages/admin/AdminTeamPage'
import { AdminGalleryPage } from './pages/admin/AdminGalleryPage'
import { AdminFaqPage } from './pages/admin/AdminFaqPage'
import { AdminAboutPage } from './pages/admin/AdminAboutPage'

export default function App() {
  return (
    <Routes>
      {/* Public website */}
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="fleet" element={<FleetPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Admin panel */}
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="site" element={<AdminSitePage />} />
        <Route path="hero" element={<AdminHeroPage />} />
        <Route path="homepage" element={<AdminHomepagePage />} />
        <Route path="fleet" element={<AdminFleetPage />} />
        <Route path="services" element={<AdminServicesPage />} />
        <Route path="testimonials" element={<AdminTestimonialsPage />} />
        <Route path="team" element={<AdminTeamPage />} />
        <Route path="gallery" element={<AdminGalleryPage />} />
        <Route path="faq" element={<AdminFaqPage />} />
        <Route path="about" element={<AdminAboutPage />} />
      </Route>
    </Routes>
  )
}
