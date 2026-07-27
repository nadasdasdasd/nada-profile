import { profileData } from '../../Features/Profile/model/data'
import { HeroSection } from '../organisms/HeroSection'
import { AboutSection } from '../organisms/AboutSection'
import { SkillsSection } from '../organisms/SkillsSection'
import { ExperienceSection } from '../organisms/ExperienceSection'
import { ContactSection } from '../organisms/ContactSection'
import { ProjectsSection } from '../organisms/ProjectsSection'
import { GitHubRepoWidget } from '../organisms/GitHubRepoWidget'

export function ProfilePage() {
  const profile = profileData

  return (
    <main className="font-sans text-gray-900 antialiased">
      <HeroSection profile={profile} />
      <AboutSection profile={profile} />
      <SkillsSection profile={profile} />
      <ProjectsSection />
      <ExperienceSection profile={profile} />
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <GitHubRepoWidget />
      </section>
      <ContactSection profile={profile} />

      <footer className="border-t bg-white px-4 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </main>
  )
}
