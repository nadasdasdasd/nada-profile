import { Heading } from '../atoms/Heading'
import { Skeleton } from '../atoms/Skeleton'
import { RepoCard } from '../molecules/RepoCard'
import { useRepoData } from '../../Widgets/GitHubRepo/hooks/useRepoData'

interface GitHubRepoWidgetProps {
  username?: string
  title?: string
}

export function GitHubRepoWidget({
  username = 'nadasdasdasd',
  title = 'GitHub Repositories',
}: GitHubRepoWidgetProps) {
  const { repos, loading } = useRepoData(username)

  if (loading) {
    return (
      <section className="rounded-xl border border-gray-200 bg-white p-6">
        <Heading level="h3">{title}</Heading>
        <div className="mt-4">
          <Skeleton count={3} height="h-24" />
        </div>
      </section>
    )
  }

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6">
      <Heading level="h3">{title}</Heading>
      <div className="mt-4 space-y-3">
        {repos.slice(0, 3).map((repo) => (
          <RepoCard key={repo.name} repo={repo} />
        ))}
      </div>
    </section>
  )
}
