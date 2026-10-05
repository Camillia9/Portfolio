import { useTranslation } from 'react-i18next'
import { channels } from '../data/channels'
import ChannelButton from './ChannelButton'
import SocialLinks from './SocialLinks'
import { links } from '../data/links'

function ChannelGroup({ title, ids, activeChannel, onSelect }) {
  return (
    <div className="mt-6">
      <p className="text-white/40 text-xs uppercase mb-2">{title}</p>
      <ul className="space-y-1">
        {ids.map((id) => (
          <li key={id}>
            <ChannelButton 
              id={id}
              activeChannel={activeChannel}
              onSelect={onSelect}
              className="w-full"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Sidebar({ activeChannel, onSelect }) {
  const { t } = useTranslation()

  return (
    <aside className="hidden md:sticky md:top-0 md:flex md:h-[calc(100vh-45px)] md:flex-col w-60 shrink-0 border-r border-card p-4 font-mono text-sm">
      <div>
        <p className="text-white font-medium">@camillia</p>
        <p className="text-lavender text-xs mt-1">{t('hero.role')}</p>
        <p className="text-white/60 text-xs mt-2">● {t('hero.status')}</p>

        <ChannelGroup title={t('sidebar.general')} ids={channels.general} activeChannel={activeChannel} onSelect={onSelect} />
        <ChannelGroup title={t('sidebar.projects')} ids={channels.projects} activeChannel={activeChannel} onSelect={onSelect} />
      </div>

      <div className="mt-auto pt-6 space-y-4">
        <a
          href={links.cv}
          download
          className="block text-center bg-action text-white px-3 py-2 rounded-md hover:bg-card transition-colors"
        >
          {t('hero.ctaCv')}
        </a>
        <SocialLinks className="justify-center text-xl" />
      </div>
    </aside>
  )
}