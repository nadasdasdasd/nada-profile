import { ContactForm } from '../components/ContactForm'
import type { ProfileData } from '../types'
import { generateResume } from '../utils/generateResume'

export function ContactSection({ profile }: { profile: ProfileData }) {
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
      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Contact</h2>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <a
                href={`mailto:${profile.contact.email}`}
                className="text-indigo-600 hover:underline"
              >
                {profile.contact.email}
              </a>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">LinkedIn</p>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                https://www.linkedin.com/in/nada-nisrina-septiana-098247342/
              </a>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">GitHub</p>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                github.com/nadacode
              </a>
            </div>
            {profile.contact.whatsapp && (
              <div>
                <p className="text-sm font-medium text-gray-500">WhatsApp</p>
                <a
                  href={`https://wa.me/${profile.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-indigo-600 hover:underline"
                >
                  Chat via WhatsApp
                </a>
              </div>
            )}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800">Links</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {profile.links.map((link) =>
                link.label === 'Download Resume' ? (
                  <button
                    key={link.label}
                    onClick={handleDownloadResume}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">Send a Message</h3>
          <div className="mt-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
