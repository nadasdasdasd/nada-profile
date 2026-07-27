import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'
import { Badge } from '../atoms/Badge'
import { StatCard } from '../molecules/StatCard'
import type { ProfileData } from '../../Features/Profile/types'

interface AboutSectionProps {
  profile: ProfileData
}

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <Heading level="h2">About Me</Heading>

      <Text className="mt-4 leading-relaxed">{profile.about.background}</Text>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <StatCard
          value={profile.about.yearsOfExperience}
          label="Years Experience"
        />
        <div className="rounded-xl bg-indigo-50 p-4 text-center sm:col-span-2">
          <Text size="sm" color="gray-700" className="leading-relaxed">{profile.about.goals}</Text>
        </div>
      </div>

      <div className="mt-6">
        <Heading level="h3">Hobbies & Interests</Heading>
        <div className="mt-2 flex flex-wrap gap-2">
          {profile.about.hobbies.map((hobby) => (
            <Badge key={hobby} className="rounded-full px-4 py-1.5">{hobby}</Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
