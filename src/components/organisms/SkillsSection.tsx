import { Heading } from '../atoms/Heading'
import { SkillCard } from '../molecules/SkillCard'
import type { ProfileData } from '../../Features/Profile/types'

interface SkillsSectionProps {
  profile: ProfileData
}

export function SkillsSection({ profile }: SkillsSectionProps) {
  return (
    <section className="bg-gray-50 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <Heading level="h2">Skills & Technologies</Heading>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((category) => (
            <SkillCard
              key={category.category}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
