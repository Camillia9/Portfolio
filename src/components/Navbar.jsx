import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { i18n } = useTranslation()
  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')

  return (
	<nav className='  flex justify-between items-center px-6 py-3 border-b border-card font-mono text-sm'>
	  <span className='text-white font-medium'>Camillia's Server</span>
	  <button
		onClick={toggleLanguage}
		className='text-lavender text-sm'
	  >
		{i18n.language === 'fr' ? 'EN' : 'FR'}
	  </button>
	</nav>
  )
}