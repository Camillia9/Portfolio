import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import About from './components/About'
import MobileChannels from './components/MobileChannels'

export default function App() {
  const [activeChannel, setActiveChannel] = useState('about')

  return (
    <div className="min-h-screen bg-night flex flex-col">
      <Navbar />
      <div className="flex flex-col md:flex-row flex-1">
        <Sidebar
          activeChannel={activeChannel}
          onSelect={setActiveChannel}
        />
        <MobileChannels
          activeChannel={activeChannel}
          onSelect={setActiveChannel}
        />
        <main className="flex-1 p-4 md:p-6">
          <h2 className='font-mono text-white text-lg'># {activeChannel}</h2>
          {activeChannel === 'about' ? (
            <About />
          ) : (
            <p className='text-white/60 mt-4'>Bientot...</p>
          )}
        </main>
      </div>
    </div>
  )
}