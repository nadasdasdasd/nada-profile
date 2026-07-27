import { Heading } from '../atoms/Heading'
import { ExperienceCard } from '../molecules/ExperienceCard'
import type { ProfileData } from '../../Features/Profile/types'

interface ExperienceSectionProps {
  profile: ProfileData
}

export function ExperienceSection({ profile }: ExperienceSectionProps) {
  return (
    <section className="bg-gray-50 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <Heading level="h2">Experience</Heading>
        <div className="mt-8 space-y-6">
          {profile.experiences.map((exp) => (
            <ExperienceCard
              key={`${exp.company}-${exp.role}`}
              experience={exp}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
