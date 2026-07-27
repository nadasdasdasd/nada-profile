import { Avatar } from '../atoms/Avatar'
import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'
import { NavLinkBar } from '../molecules/NavLinkBar'
import type { ProfileData } from '../../Features/Profile/types'

interface HeroSectionProps {
  profile: ProfileData
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Avatar src={profile.photo} alt={profile.name} />
      <Heading level="h1">{profile.name}</Heading>
      <Text size="lg" color="indigo-600" className="mt-3">{profile.profession}</Text>
      <Text className="mt-2 max-w-lg">{profile.tagline}</Text>
      <NavLinkBar
        links={[
          { label: 'Projects', href: '#projects' },
          { label: 'About', href: '#about' },
          { label: 'Contact', href: '#contact' },
        ]}
      />
    </section>
  )
}
