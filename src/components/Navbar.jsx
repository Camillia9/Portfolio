import { useTranslation } from 'react-i18next'

export function Navbar() {
  const { i18n } = useTranslation()
  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')

  return (
	<nav className='flex justify-between items-center px-6 py-4 max-w-5xl mx-auto'>
	  <span className='text-white font-medium'>Camillia</span>
	  <button
		onClick={toggleLanguage}
		className='text-lavender text-sm'
	  >
		{i18n.language === 'fr' ? 'EN' : 'FR'}
	  </button>
	</nav>
  )
}