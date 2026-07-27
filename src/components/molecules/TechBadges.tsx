import { Badge } from '../atoms/Badge'

interface TechBadgesProps {
  techs: string[]
  variant?: 'default' | 'indigo'
}

export function TechBadges({ techs, variant = 'indigo' }: TechBadgesProps) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {techs.map((tech) => (
        <Badge key={tech} variant={variant}>
          {tech}
        </Badge>
      ))}
    </div>
  )
}
