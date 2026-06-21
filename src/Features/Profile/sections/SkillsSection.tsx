import type { ProfileData } from '../types'

export function SkillsSection({ profile }: { profile: ProfileData }) {
  return (
    <section className="bg-gray-50 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Skills & Technologies</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((category) => (
            <div
              key={category.category}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-indigo-600">{category.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
