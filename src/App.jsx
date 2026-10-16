import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MobileChannels from './components/MobileChannels'
import ChannelHeader from './components/ChannelHeader'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ProjectChannel from './components/ProjectChannel'
import Intro from './components/Intro'
import { channels } from './data/channels'

const channelComponents = {
  about: About,
  skills: Skills,
  contact: Contact,
}

const allChannels = [...channels.general, ...channels.projects]

export default function App() {
  const [activeChannel, setActiveChannel] = useState('about')
  const mainRef = useRef(null)

  const [entered, setEntered] = useState(() => {
    try {
      return sessionStorage.getItem('introSeen') === 'true'
    } catch {
      return false
    }
  })
  
  const handleEnter = () => {
    try {
      sessionStorage.setItem('introSeen', 'true')
    } catch {
      // si Stockage indisponible: L'INTRO se rejouera. evite les crash
    }
    setEntered(true)
  }

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActiveChannel(id)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveChannel(entry.target.id)
        })
      },
      { root: mainRef.current, rootMargin: '-40% 0px -50% 0px' }
    )

    allChannels.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="h-screen bg-night flex flex-col">
      {!entered && <Intro onEnter={handleEnter} />}
      <Navbar />
      <div className="flex flex-col md:flex-row flex-1 min-h-0">
        <Sidebar activeChannel={activeChannel} onSelect={goTo} />
        <MobileChannels activeChannel={activeChannel} onSelect={goTo} />
        <main ref={mainRef} className="flex-1 overflow-y-auto snap-y snap-mandatory">
          {allChannels.map((id) => {
            const Channel = channels.projects.includes(id) ? ProjectChannel : channelComponents[id]
            return (
              <section
                key={id}
                id={id}
                className={`snap-start min-h-full p-4 md:p-6 transition-opacity duration-500 ${
                  activeChannel === id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <ChannelHeader id={id} />
                {Channel ? <Channel id={id} onSelect={goTo} /> : <p className="text-white/60 mt-4">Bientôt…</p>}
              </section>
            )
          })}
        </main>
      </div>
    </div>
  )
}