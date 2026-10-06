import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import About from './components/About'
import MobileChannels from './components/MobileChannels'
import ChannelHeader from './components/ChannelHeader'
import Skills from './components/Skills'
import Contact from './components/Contact'

const channelComponents = {
  about: About,
  skills: Skills,
  contact: Contact,
}

export default function App() {
  const [activeChannel, setActiveChannel] = useState('about') // Quels channels est ouvert ? Init a About
  const ActiveChannel = channelComponents[activeChannel]

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
          <ChannelHeader id={activeChannel} />
          {ActiveChannel ? <ActiveChannel onSelect={setActiveChannel} /> : <p className='text-white/60 mt-4'>Bientot...</p>}
        </main>
      </div>
    </div>
  )
}