import type { ProfileData } from '../types'

export function HeroSection({ profile }: { profile: ProfileData }) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      {profile.photo && (
        <img
          src={profile.photo}
          alt={profile.name}
          className="mb-6 h-24 w-24 rounded-full object-cover shadow-lg sm:h-32 sm:w-32"
        />
      )}

      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-lg text-indigo-600 sm:text-xl">{profile.profession}</p>
      <p className="mt-2 max-w-lg text-base text-gray-600 sm:text-lg">{profile.tagline}</p>

      <nav className="mt-8 flex flex-wrap justify-center gap-3">
        {['Projects', 'About', 'Contact'].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            {label}
          </a>
        ))}
      </nav>
    </section>
  )
}
