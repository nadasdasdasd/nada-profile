import type { ProfileData } from '../types'

export function AboutSection({ profile }: { profile: ProfileData }) {
  return (
    <section id="about" className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">About Me</h2>

      <p className="mt-4 text-gray-600 leading-relaxed">{profile.about.background}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-indigo-50 p-4 text-center">
          <p className="text-3xl font-bold text-indigo-600">{profile.about.yearsOfExperience}+</p>
          <p className="mt-1 text-sm text-gray-600">Years Experience</p>
        </div>
        <div className="rounded-xl bg-indigo-50 p-4 text-center sm:col-span-2">
          <p className="text-sm text-gray-700 leading-relaxed">{profile.about.goals}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Hobbies & Interests</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {profile.about.hobbies.map((hobby) => (
            <span
              key={hobby}
              className="rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-700"
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
