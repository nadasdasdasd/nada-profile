import { Heading } from '../atoms/Heading'
import { Badge } from '../atoms/Badge'

interface SkillCardProps {
  category: string
  skills: string[]
}

export function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <Heading level="h3" className="text-indigo-600">{category}</Heading>
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </div>
  )
}
