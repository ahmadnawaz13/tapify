import type { LucideIcon } from 'lucide-react'
import { AudioLines, BriefcaseBusiness, Camera, Clapperboard, Code2, Compass, Flower2, GraduationCap, Music2, PenTool, Sparkles, Video } from 'lucide-react'

export type TapLink = { label: string; url: string }
export type Profile = {
  name: string
  handle: string
  role: string
  bio: string
  initials: string
  theme: string
  icon: LucideIcon
  links: TapLink[]
  category: string
  location: string
}

export const profiles: Profile[] = [
  { name: 'Maya Chen', handle: '@mayamakes', role: 'Illustrator & daydreamer', bio: 'Drawing little worlds and making the internet feel a bit more human.', initials: 'MC', theme: 'rose', icon: PenTool, links: [{ label: 'My latest illustrations', url: 'https://example.com' }, { label: 'Shop prints & stickers', url: 'https://example.com' }, { label: 'Say hello', url: 'https://example.com' }], category: 'Design', location: 'Toronto, CA' },
  { name: 'Omar Farooq', handle: '@omarcodes', role: 'Developer & open-source fan', bio: 'Building useful tools, writing about the process, and learning out loud.', initials: 'OF', theme: 'blue', icon: Code2, links: [{ label: 'Things I am building', url: 'https://example.com' }, { label: 'GitHub projects', url: 'https://github.com' }, { label: 'Read my notes', url: 'https://example.com' }], category: 'Technology', location: 'Lahore, PK' },
  { name: 'Jules Rivera', handle: '@julesoutside', role: 'Photographer & slow traveler', bio: 'A collection of small moments from the road and the people I meet.', initials: 'JR', theme: 'green', icon: Camera, links: [{ label: 'Recent photo stories', url: 'https://example.com' }, { label: 'Print shop', url: 'https://example.com' }, { label: 'Travel journal', url: 'https://example.com' }], category: 'Photography', location: 'Lisbon, PT' },
  { name: 'Nia Okafor', handle: '@niaplays', role: 'Producer & playlist maker', bio: 'Independent sounds, good conversations, and a lot of open tabs.', initials: 'NO', theme: 'violet', icon: Music2, links: [{ label: 'Listen to my new EP', url: 'https://example.com' }, { label: 'Weekly listening club', url: 'https://example.com' }, { label: 'Book a session', url: 'https://example.com' }], category: 'Music', location: 'London, UK' },
  { name: 'Leo Park', handle: '@leoplays', role: 'Video maker & maker of things', bio: 'Tiny documentaries about interesting people doing interesting things.', initials: 'LP', theme: 'orange', icon: Video, links: [{ label: 'Watch the new film', url: 'https://example.com' }, { label: 'Behind the scenes', url: 'https://example.com' }, { label: 'Work with me', url: 'https://example.com' }], category: 'Video', location: 'Seoul, KR' },
  { name: 'Amara Wells', handle: '@amarainbloom', role: 'Founder of Bloom Notes', bio: 'A softer way to plan your week, make room for ideas, and begin again.', initials: 'AW', theme: 'yellow', icon: Flower2, links: [{ label: 'Meet Bloom Notes', url: 'https://example.com' }, { label: 'Read the newsletter', url: 'https://example.com' }, { label: 'Our small team', url: 'https://example.com' }], category: 'Business', location: 'New York, US' },
]

export const templateCards = [
  { id: 'studio', title: 'The Studio', type: 'For makers', theme: 'rose', icon: PenTool, description: 'Show your portfolio, latest work, and where to find you.' },
  { id: 'signal', title: 'Signal Boost', type: 'For creators', theme: 'blue', icon: Clapperboard, description: 'Bring videos, channels, and collaborations together.' },
  { id: 'fieldnotes', title: 'Field Notes', type: 'For explorers', theme: 'green', icon: Compass, description: 'Share the places, stories, and projects you care about.' },
  { id: 'soundcheck', title: 'Soundcheck', type: 'For musicians', theme: 'violet', icon: AudioLines, description: 'Give your newest release the spotlight it deserves.' },
  { id: 'workmode', title: 'Work Mode', type: 'For professionals', theme: 'orange', icon: BriefcaseBusiness, description: 'A clear, friendly home for your work and experience.' },
  { id: 'classnotes', title: 'Class Notes', type: 'For educators', theme: 'yellow', icon: GraduationCap, description: 'Make your resources and sessions easy to find.' },
]

export const features = [
  { icon: Sparkles, title: 'A page that feels like you', text: 'Choose a layout, pick a palette, and make a small internet home that feels personal.' },
  { icon: Compass, title: 'All your links in one place', text: 'Bring your work, socials, writing, shop, and contact details into one tidy page.' },
  { icon: Code2, title: 'Open by design', text: 'Tapify is built in the open. Fork it, shape it, and contribute improvements for everyone.' },
]

export const categories = ['All', 'Design', 'Technology', 'Photography', 'Music', 'Video', 'Business']

export const faqs = [
  { q: 'What is Tapify?', a: 'Tapify is an open-source starter for creating a personal profile page with links to your work, channels, and projects.' },
  { q: 'Can I publish my own page from this demo?', a: 'This repository currently provides the website and a browser-based editor demo. Saved edits stay in your browser; hosting and accounts are not connected yet.' },
  { q: 'Do I need to know how to code?', a: 'You can explore the ready-made pages without coding. To run or customize the project itself, you will need Node.js and basic familiarity with a React app.' },
  { q: 'Is Tapify free to use?', a: 'The code in this repository is released under the MIT License. Any future hosted service or paid features would be a separate product decision.' },
]
