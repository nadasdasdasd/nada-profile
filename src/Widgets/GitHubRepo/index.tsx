import { RepoCard } from './components/RepoCard'
import { useRepoData } from './hooks/useRepoData'

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
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <div className="mt-4 space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 animate-pulse rounded-lg bg-gray-100" />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <div className="mt-4 space-y-3">
        {repos.slice(0, 3).map((repo) => (
          <RepoCard key={repo.name} repo={repo} />
        ))}
      </div>
    </section>
  )
}
