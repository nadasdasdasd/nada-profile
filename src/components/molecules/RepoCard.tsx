import { Icon } from '../atoms/Icon'
import { StatBadge } from '../atoms/StatBadge'
import { Text } from '../atoms/Text'
import type { RepoData } from '../../Widgets/GitHubRepo/types'

interface RepoCardProps {
  repo: RepoData
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <Icon name="github" />
          <h3 className="font-semibold text-gray-900">{repo.name}</h3>
        </div>
      </div>

      {repo.description && (
        <Text size="sm" className="mt-2 line-clamp-2">{repo.description}</Text>
      )}

      <div className="mt-3 flex items-center gap-4">
        {repo.language && (
          <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ backgroundColor: repo.languageColor }}
            />
            {repo.language}
          </span>
        )}
        <StatBadge icon="★" value={repo.stars} label="Stars" />
        <StatBadge icon="⑂" value={repo.forks} label="Forks" />
      </div>
    </a>
  )
}
