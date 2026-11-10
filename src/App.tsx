import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { SiteFooter, SiteHeader } from './components'
import { AboutPage, ArticlePage, BlogPage, ContactPage, CreatePage, ExplorePage, FeaturesPage, HomePage, PricingPage, TemplatesPage } from './pages'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }) }, [pathname])
  return null
}

export default function App() {
  return <><ScrollToTop /><SiteHeader /><main><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/features" element={<FeaturesPage />} />
    <Route path="/templates" element={<TemplatesPage />} />
    <Route path="/explore" element={<ExplorePage />} />
    <Route path="/create" element={<CreatePage />} />
    <Route path="/pricing" element={<PricingPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/blog/make-a-link-page-that-feels-like-you" element={<ArticlePage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="*" element={<HomePage />} />
  </Routes></main><SiteFooter /></>
}
