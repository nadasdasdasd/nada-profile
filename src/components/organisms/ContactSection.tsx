import { Heading } from '../atoms/Heading'
import { Button } from '../atoms/Button'
import { ContactInfoList } from '../molecules/ContactInfoList'
import { ContactForm } from './ContactForm'
import type { ProfileData } from '../../Features/Profile/types'
import { generateResume } from '../../Features/Profile/utils/generateResume'

interface ContactSectionProps {
  profile: ProfileData
}

export function ContactSection({ profile }: ContactSectionProps) {
  function handleDownloadResume() {
    const blob = generateResume(profile)
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${profile.name.replace(/\s+/g, '_')}_Resume.pdf`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <Heading level="h2">Contact</Heading>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <ContactInfoList contact={profile.contact} />

          <div className="mt-8">
            <Heading level="h3">Links</Heading>
            <div className="mt-3 flex flex-wrap gap-3">
              {profile.links.map((link) =>
                link.label === 'Download Resume' ? (
                  <Button
                    key={link.label}
                    onClick={handleDownloadResume}
                  >
                    {link.label}
                  </Button>
                ) : (
                  <Button
                    key={link.label}
                    href={link.url}
                  >
                    {link.label}
                  </Button>
                ),
              )}
            </div>
          </div>
        </div>

        <div>
          <Heading level="h3">Send a Message</Heading>
          <div className="mt-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
