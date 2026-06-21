import type { ProfileData } from '../types'

export function ExperienceSection({ profile }: { profile: ProfileData }) {
  return (
    <section className="bg-gray-50 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Experience</h2>

        <div className="mt-8 space-y-6">
          {profile.experiences.map((exp) => (
            <div key={`${exp.company}-${exp.role}`} className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-indigo-600">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-600">
                {exp.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
