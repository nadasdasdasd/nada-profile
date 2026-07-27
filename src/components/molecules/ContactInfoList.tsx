import { ContactInfoItem } from './ContactInfoItem'
import type { ProfileData } from '../../Features/Profile/types'

interface ContactInfoListProps {
  contact: ProfileData['contact']
}

export function ContactInfoList({ contact }: ContactInfoListProps) {
  return (
    <div className="space-y-4">
      <ContactInfoItem
        label="Email"
        href={`mailto:${contact.email}`}
        displayText={contact.email}
      />
      <ContactInfoItem
        label="LinkedIn"
        href={contact.linkedin}
        displayText="https://www.linkedin.com/in/nada-nisrina-septiana-098247342/"
        external
      />
      <ContactInfoItem
        label="GitHub"
        href={contact.github}
        displayText="github.com/nadacode"
        external
      />
      {contact.whatsapp && (
        <ContactInfoItem
          label="WhatsApp"
          href={`https://wa.me/${contact.whatsapp}`}
          displayText="Chat via WhatsApp"
          external
        />
      )}
    </div>
  )
}
