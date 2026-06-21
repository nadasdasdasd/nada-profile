import { useState, useEffect } from 'react'
import type { RepoData } from '../types'
import { repos as mockRepos } from '../data'

export function useRepoData(username: string) {
  const [repos, setRepos] = useState<RepoData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=3`,
        )
        if (!res.ok) throw new Error('GitHub API error')
        const data = await res.json()
        const mapped: RepoData[] = data.map((r: any) => ({
          name: r.name,
          description: r.description ?? '',
          stars: r.stargazers_count,
          forks: r.forks_count,
          language: r.language ?? 'Unknown',
          languageColor: langColors[r.language ?? ''] ?? '#858585',
          url: r.html_url,
        }))
        setRepos(mapped)
      } catch {
        setRepos(mockRepos)
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [username])

  return { repos, loading }
}

const langColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Python: '#3572a5',
  Java: '#b07219',
  Go: '#00add8',
  Rust: '#dea584',
}
