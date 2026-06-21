import type { ProfileData } from './types'

export const profileData: ProfileData = {
  name: 'Nada Nisrina Septiana',
  profession: 'Frontend Developer',
  tagline: 'Membangun web modern yang cepat, aksesibel, dan user-friendly',
  about: {
    background:
      'Memulai perjalanan di dunia web development sejak kuliah, berawal dari rasa penasaran terhadap bagaimana website bekerja. Dari situ, saya terus belajar dan berkembang hingga akhirnya fokus di frontend engineering.',
    yearsOfExperience: 2,
    goals: 'Mencari kesempatan full-time sebagai Frontend Developer untuk terus belajar, berkontribusi di tim yang solid, dan membangun produk digital yang berdampak.',
    hobbies: ['Membaca artikel tech', 'UI/UX exploring', 'Fotografi', 'Nonton dokumenter'],
  },
  skills: [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js'],
    },
    {
      category: 'Tools & Testing',
      skills: ['Git', 'Webpack', 'Vite', 'Figma', 'Cypress', 'Jest'],
    },
    {
      category: 'Lainnya',
      skills: ['REST API', 'Responsive Design', 'Accessibility'],
    },
  ],
  // projects: [
  //   {
  //     name: 'E-Commerce App',
  //     description:
  //       'Aplikasi e-commerce dengan fitur product listing, cart, checkout, dan payment integration.',
  //     techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
  //     liveUrl: 'https://example-demo.vercel.app',
  //     repoUrl: 'https://github.com/nadacode/ecommerce-app',
  //     challenges: 'Mengoptimasi performa rendering dengan virtualisasi list dan lazy loading.',
  //     impact: 'Meningkatkan Lighthouse score dari 65 ke 92.',
  //   },
  //   {
  //     name: 'Task Management Dashboard',
  //     description:
  //       'Dashboard kolaboratif untuk manage task tim dengan fitur drag-and-drop dan real-time update.',
  //     techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
  //     liveUrl: 'https://task-dashboard.vercel.app',
  //     repoUrl: 'https://github.com/nadacode/task-dashboard',
  //     challenges: 'Implementasi optimistic UI untuk real-time updates tanpa loading state.',
  //     impact: 'Mengurangi waktu loading data hingga 40%.',
  //   },
  //   {
  //     name: 'Company Profile Website',
  //     description:
  //       'Website company profile modern dengan animasi halus dan SEO optimal.',
  //     techStack: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
  //     liveUrl: 'https://company-profile.vercel.app',
  //     repoUrl: 'https://github.com/nadacode/company-profile',
  //     challenges: 'Membuat animasi yang smooth tanpa mengorbankan performa.',
  //     impact: '100% Lighthouse score untuk Performance & Accessibility.',
  //   },
  // ],
  experiences: [
    {
      company: 'Tech Startup X',
      role: 'Junior Frontend Developer',
      period: 'Jan 2024 - Sekarang',
      achievements: [
        'Membangun 3 fitur utama dari scratch menggunakan React + TypeScript',
        'Mengurangi bundle size sebesar 35% melalui code splitting dan lazy loading',
        'Menerapkan unit testing dengan Cypress mencapai 85% coverage',
      ],
    },
    {
      company: 'Freelance Projects',
      role: 'Frontend Developer (Freelance)',
      period: '2023 - 2024',
      achievements: [
        'Mengerjakan 5+ project landing page dan company profile untuk klien',
        'Mengintegrasikan headless CMS untuk memudahkan client update konten',
        'Mengurangi waktu development dengan reusable component library',
      ],
    },
    {
      company: 'Digital Agency Y',
      role: 'Frontend Intern',
      period: '2023',
      achievements: [
        'Membantu migrasi codebase dari JavaScript ke TypeScript',
        'Mengembangkan UI component library internal menggunakan Storybook',
        'Kolaborasi dengan tim desain untuk implementasi responsive design',
      ],
    },
  ],
  contact: {
    email: 'nisrinaseptiana026@gmail.com',
    linkedin: 'https://www.linkedin.com/in/nada-nisrina-septiana-098247342/',
    github: 'https://github.com/nadasdasdasd',
    whatsapp: '6281234567890',
  },
  links: [
    { label: 'GitHub', url: 'https://github.com/nadasdasdasd' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nada-nisrina-septiana-098247342/' },
    { label: 'Download Resume', url: '#' },
  ],
}
