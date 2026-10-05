import { useTranslation } from 'react-i18next'
import { skillGroups } from '../data/skills'
import { channels } from '../data/channels'

export default function Skills({ onSelect }) {
  const { t } = useTranslation()
  const softSkills = t('skills.soft', { returnObjects: true })

  return (
    <div className="mt-6 space-y-8 max-w-3xl">
      {skillGroups.map((group) => (
        <section key={group.id}>
          <h3 className="text-lavender font-mono text-sm uppercase mb-3">
            {t(`skills.groups.${group.id}`)}
          </h3>
          <ul className="space-y-2">
            {group.items.map((item) => (
              <li key={item.name} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-white font-medium w-44 shrink-0">{item.name}</span>
                <span className="text-white/60 text-sm">
                  {item.refs.map((ref, i) => (
                    <span key={ref}>
                      {i > 0 && ' · '}
                      {channels.projects.includes(ref) ? (
                        <button
                          onClick={() => onSelect(ref)}
                          className="font-mono text-lavender hover:text-white hover:underline"
                        >
                          #{ref}
                        </button>
                      ) : (
                        t(`skills.refs.${ref}`)
                      )}
                    </span>
                  ))}
                  {item.basics && (
                    <span className="text-white/40 italic"> ({t('skills.basics')})</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section>
        <h3 className="text-lavender font-mono text-sm uppercase mb-3">
          {t('skills.groups.soft')}
        </h3>
        <ul className="flex flex-wrap gap-2">
          {softSkills.map((skill) => (
            <li key={skill} className="border border-lavender/50 text-lavender text-sm px-3 py-1 rounded-lg">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}