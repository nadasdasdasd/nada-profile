import { jsPDF } from 'jspdf'
import type { ProfileData } from '../types'

export function generateResume(profile: ProfileData) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  const pageW = 210
  const margin = 20
  const maxW = pageW - margin * 2
  let y = margin

  function textLine(text: string, size = 11, bold = false) {
    if (bold) doc.setFont('Helvetica', 'bold')
    else doc.setFont('Helvetica', 'normal')
    doc.setFontSize(size)
    const lines = doc.splitTextToSize(text, maxW)
    for (const line of lines) {
      if (y + size * 0.35 > 295) {
        doc.addPage()
        y = margin
      }
      doc.text(line, margin, y)
      y += size * 0.45
    }
  }

  function section(title: string) {
    y += 4
    textLine(title.toUpperCase(), 13, true)
    doc.setDrawColor(0)
    doc.line(margin, y + 0.5, pageW - margin, y + 0.5)
    y += 4
  }

  function spacer(h = 2) {
    y += h
  }

  // Header
  textLine(profile.name, 20, true)
  textLine(profile.profession, 12, false)
  textLine(profile.tagline, 10, false)
  spacer()
  textLine(
    `Email: ${profile.contact.email}  |  GitHub: ${profile.contact.github}  |  LinkedIn: ${profile.contact.linkedin}`,
    9,
  )
  if (profile.contact.whatsapp) {
    textLine(`WhatsApp: +${profile.contact.whatsapp}`, 9)
  }

  // About
  section('Professional Summary')
  textLine(profile.about.background, 10)
  spacer()
  textLine(profile.about.goals, 10)
  spacer()
  textLine(`Years of Experience: ${profile.about.yearsOfExperience}+`, 10)
  textLine(`Hobbies: ${profile.about.hobbies.join(', ')}`, 10)

  // Skills
  section('Skills')
  for (const cat of profile.skills) {
    textLine(`${cat.category}: ${cat.skills.join(', ')}`, 10)
  }

  // Experience
  section('Experience')
  for (const exp of profile.experiences) {
    textLine(`${exp.role} – ${exp.company} (${exp.period})`, 11, true)
    for (const a of exp.achievements) {
      textLine(`  • ${a}`, 10)
    }
    spacer()
  }

  // Projects
  // section('Projects')
  // for (const proj of profile.projects) {
  //   textLine(`${proj.name}  [${proj.techStack.join(', ')}]`, 11, true)
  //   textLine(proj.description, 10)
  //   if (proj.liveUrl) textLine(`Live: ${proj.liveUrl}`, 9)
  //   if (proj.repoUrl) textLine(`Repo: ${proj.repoUrl}`, 9)
  //   if (proj.impact) textLine(`Impact: ${proj.impact}`, 9)
  //   spacer()
  // }

  return doc.output('blob')
}
