import { profileData } from './data'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { SkillsSection } from './sections/SkillsSection'

export function ProfilePage() {
  const profile = profileData

  return (
    <main className="font-sans text-gray-900 antialiased">
      <HeroSection profile={profile} />
      <AboutSection profile={profile} />
      <SkillsSection profile={profile} />
      {/* <ProjectsSection profile={profile} /> */}
      <ExperienceSection profile={profile} />
      <ContactSection profile={profile} />

      <footer className="border-t bg-white px-4 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </main>
  )
}
