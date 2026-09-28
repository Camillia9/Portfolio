import { useTranslation } from 'react-i18next'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'

function App() {
  const { t, i18n } = useTranslation()

  return (
    <div className='min-h-screen bg-night'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
