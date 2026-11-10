import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Link2, Sparkles } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import type { Profile } from './data'

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return <Link className="brand" to="/" aria-label="Tapify home"><span className="brand-mark"><Link2 size={19} strokeWidth={2.8} /></span>{!compact && <span>tapify<span className="brand-period">.</span></span>}</Link>
}

export function Button({ children, to, href, variant = 'primary', className = '', onClick, type = 'button' }: { children: ReactNode; to?: string; href?: string; variant?: 'primary' | 'secondary' | 'light' | 'quiet'; className?: string; onClick?: () => void; type?: 'button' | 'submit' }) {
  const classes = `button button-${variant} ${className}`.trim()
  if (to) return <Link className={classes} to={to}>{children}</Link>
  if (href) return <a className={classes} href={href} target="_blank" rel="noreferrer">{children}</a>
  return <button className={classes} onClick={onClick} type={type}>{children}</button>
}

export function SiteHeader() {
  const nav = [{ label: 'Features', to: '/features' }, { label: 'Templates', to: '/templates' }, { label: 'Explore', to: '/explore' }, { label: 'Pricing', to: '/pricing' }]
  return <header className="site-header"><div className="header-inner"><BrandMark /><nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{item.label}</NavLink>)}</nav><div className="header-actions"><Link className="text-link login-link" to="/about">About</Link><Button to="/create" className="header-cta">Make your page <ArrowRight size={15} /></Button><MobileMenu /></div></div></header>
}

function MobileMenu() {
  return <details className="mobile-menu"><summary aria-label="Open navigation menu"><span /><span /></summary><nav aria-label="Mobile navigation"><NavLink to="/features">Features</NavLink><NavLink to="/templates">Templates</NavLink><NavLink to="/explore">Explore</NavLink><NavLink to="/pricing">Pricing</NavLink><NavLink to="/blog">Journal</NavLink><NavLink to="/contact">Contact</NavLink><NavLink className="mobile-menu-cta" to="/create">Make your page <ArrowRight size={15} /></NavLink></nav></details>
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-cta"><div className="footer-cta-copy"><span className="eyebrow eyebrow-light"><Sparkles size={13} /> OPEN SOURCE, OPEN TO YOU</span><h2>Your corner of<br />the internet is waiting.</h2><p>Gather your links. Share what you make. Start with Tapify.</p></div><Button to="/create" variant="light">Make your page <ArrowUpRight size={16} /></Button><div className="footer-orbit orbit-one" /><div className="footer-orbit orbit-two" /></div><div className="footer-main"><div className="footer-brand-col"><BrandMark /><p>A little home for everything you are online.</p><a className="footer-social" href="https://github.com/ahmadnawaz13/tapify" target="_blank" rel="noreferrer">Open-source project <ArrowUpRight size={14} /></a></div><div className="footer-col"><h3>Explore</h3><Link to="/features">Features</Link><Link to="/templates">Templates</Link><Link to="/explore">Discover people</Link><Link to="/pricing">Pricing</Link></div><div className="footer-col"><h3>Tapify</h3><Link to="/about">About us</Link><Link to="/blog">Journal</Link><Link to="/contact">Contact</Link><Link to="/create">Page editor</Link></div><div className="footer-note"><span className="footer-note-icon"><ArrowDownRight size={18} /></span><p>Made for the internet you want to be part of.</p></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Tapify. Made in the open.</span><span>Built with care, one tap at a time <span className="mini-heart">♥</span></span></div></div></footer>
}

export function PageHeading({ kicker, title, subtitle, align = 'center' }: { kicker: string; title: ReactNode; subtitle: string; align?: 'center' | 'left' }) {
  return <div className={`page-heading page-heading-${align}`}><span className="eyebrow"><span className="eyebrow-dot" />{kicker}</span><h1>{title}</h1><p>{subtitle}</p></div>
}

export function SectionHeading({ kicker, title, text, link, to }: { kicker: string; title: ReactNode; text?: string; link?: string; to?: string }) {
  return <div className="section-heading"><div><span className="eyebrow"><span className="eyebrow-dot" />{kicker}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>{link && to && <Link className="text-link section-link" to={to}>{link}<ArrowRight size={15} /></Link>}</div>
}

export function ProfileCard({ profile, featured = false }: { profile: Profile; featured?: boolean }) {
  const Icon = profile.icon
  return <article className={`profile-card theme-${profile.theme} ${featured ? 'profile-featured' : ''}`}><div className="profile-card-cover"><span className="profile-sticker"><Icon size={18} /></span><span className="profile-cover-dot" /><span className="profile-avatar">{profile.initials}</span></div><div className="profile-card-body"><div className="profile-card-meta"><span>{profile.category}</span><span>{profile.location}</span></div><h3>{profile.name}</h3><p className="profile-handle">{profile.handle}</p><p className="profile-bio">{profile.bio}</p><div className="profile-card-links">{profile.links.slice(0, featured ? 3 : 2).map((item, i) => <a key={item.label} href={item.url} target="_blank" rel="noreferrer" onClick={e => e.preventDefault()}>{item.label}{i === 0 ? <ArrowUpRight size={13} /> : <ArrowRight size={13} />}</a>)}</div></div></article>
}

export function TemplatePreview({ theme, title, type, icon: Icon }: { theme: string; title: string; type: string; icon: LucideIcon }) {
  return <div className={`template-preview theme-${theme}`}><div className="template-preview-top"><span className="template-badge"><Icon size={13} /></span><span className="preview-dots"><i /><i /><i /></span></div><div className="template-avatar">{title.slice(0, 1)}</div><span className="template-preview-type">{type}</span><strong>{title}</strong><span className="preview-copy">A small page with a lot of personality.</span><div className="preview-link"><span /> A little about me <ArrowUpRight size={12} /></div><div className="preview-link"><span /> Latest project <ArrowUpRight size={12} /></div><div className="preview-link"><span /> Come say hi <ArrowUpRight size={12} /></div></div>
}

export function CheckLine({ children }: { children: ReactNode }) { return <div className="check-line"><span><Check size={13} /></span>{children}</div> }

