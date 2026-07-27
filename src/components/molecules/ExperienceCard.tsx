import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'
import type { Experience } from '../../Features/Profile/types'

interface ExperienceCardProps {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Heading level="h3">{experience.role}</Heading>
          <Text color="indigo-600">{experience.company}</Text>
        </div>
        <Text size="sm" color="gray-500">{experience.period}</Text>
      </div>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-600">
        {experience.achievements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
