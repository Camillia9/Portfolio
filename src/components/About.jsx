import { useTranslation } from 'react-i18next'
import { skills } from '../data/skills'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="mt-6 max-w-3xl">

      <div className="mt-6 space-y-4 text-white/80 leading-relaxed max-w-3xl">
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
        <p>{t('about.p3')}</p>
      </div>

      <h3 className="text-lavender text-lg font-medium mt-10">{t('about.skillsTitle')}</h3>
      <ul className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="border border-lavender/50 text-lavender text-sm px-3 py-1 rounded-lg"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}