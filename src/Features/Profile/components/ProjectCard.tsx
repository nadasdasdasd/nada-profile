import type { Project } from '../types'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
      <p className="mt-2 text-gray-600">{project.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.challenges && (
        <p className="mt-3 text-sm text-gray-500">
          <span className="font-medium">Challenge:</span> {project.challenges}
        </p>
      )}
      {project.impact && (
        <p className="mt-1 text-sm text-emerald-600">
          <span className="font-medium">Impact:</span> {project.impact}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Repository
          </a>
        )}
      </div>
    </div>
  )
}
