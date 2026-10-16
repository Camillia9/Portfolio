import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const NAME = 'Camillia.'
const TYPE_SPEED = 150
const AUTO_ENTER_DELAY = 2500
const EXIT_DURATION = 700 

export default function Intro({ onEnter }) {
	const { t } = useTranslation()
	// est-ce que l'utilisateur a active l'option "reduire les animations" de son navigateur
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
	
	const [loaded, setLoaded] = useState(false) // est-ce que l'image est charge
	const [count, setCount] = useState(reduceMotion ? NAME.length : 0) // combien de lettres sont affiches
	const [leaving, setLeaving] = useState(false) // est-ce que l'intro est en train de partir
	const done = count === NAME.length

	// 1. Ecrire les lettres une par une
	useEffect(() => {
		if (!loaded || done) return
		const timer = setTimeout(() => setCount((c) => c + 1), TYPE_SPEED)
		return () => clearTimeout(timer)
 	}, [loaded, count, done])

	// 2. Entrer automatiquement après un delai
	useEffect(() => {
		if (!done) return
		const timer = setTimeout(() => setLeaving(true), AUTO_ENTER_DELAY)
		return () => clearTimeout(timer)
	}, [done])

  // 3. Entrer avec la touche Entree ou Espace
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Enter' || e.key === ' ') setLeaving(true)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

	// 4. Laisser l'animation de sortie se jouer, puis prevenir App
	useEffect(() => {
		if (!leaving) return
		const timer = setTimeout(onEnter, reduceMotion ? 0 : EXIT_DURATION)
		return () => clearTimeout(timer)
	}, [leaving, onEnter, reduceMotion])

	return (
		<div
			onClick={() => setLeaving(true)}
			role="button"
			aria-label={t('intro.enter')}
			className={`fixed inset-0 z-50 bg-black flex items-center justify-center cursor-pointer transition-all duration-700 motion-reduce:transition-none ${
        leaving ? 'opacity-0 scale-150' : 'opacity-100 scale-100'
      }`}
		>
			<div className="relative w-full max-w-5xl aspect-1408/786">
				<img
					src="intro/crt.webp"
					alt=""
					onLoad={() => setLoaded(true)}
					onError={() => setLoaded(true)}
					className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
				/>

				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<p className="font-pixel text-pixel text-glow text-[clamp(2.5rem,9vw,6rem)] leading-none">
						{NAME.slice(0, count)}
						<span
							className={`inline-block w-[0.5em] h-[0.75em] ml-1 bg-pixel shadow-[0_0_12px_var(--color-pixel)] ${
                done ? 'animate-blink' : ''
              }`}
						/>
					</p>
					<p
            className={`font-pixel text-pixel/70 text-xl md:text-2xl mt-4 transition-opacity duration-500 ${
              done ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {t('intro.enter')}
          </p>
				</div>
			</div>
		</div>
	)

}