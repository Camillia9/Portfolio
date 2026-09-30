import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { links } from "../data/links"

export function Hero() {
	const { t } = useTranslation()

	return (
		<section className="max-w-5x1 mx-auto px-6 py-24">
			<p className="text-lavender">{t('hero.role')}</p>
			<h1 className="text-white text-5xl font-medium mt-2">Mansouf Camillia</h1>
			<p className="text-white/80 mt-4">{t('hero.status')}</p>


			<div className="flex flex-wrap gap-3 mt-8">
				<a
					//Pour descendre jusqu'a la section id=project
					href="#projects"
					className="bg-action text-white px-5 py-2.5 rounded-lg hover:bg-card transition-colors"
				>
					{t('hero.ctaProjects')}
				</a>
				<a
					href={links.cv}
					// dowload force a telecharger le pdf plutot que de juste l'ouvrrir
					download
					className="border border-lavander text-lavender px-5 py-2.5 rounded-lg hover:bg-lavender/10 transition-colors"
				>
					{t('hero.ctaCv')}
				</a>
			</div>

			<div className="flex gap-5 mt-8 text-2xl text-lavender">
				{/*Bouton GitHub*/}
				<a
					href="links.github"
					// _blank ouvre le lien dans un nouvel onglet, rel=... l'accompage toujours pour la securite
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
					title="GitHub"
					className="hover:text-white transition-colors"
				>
					<FaGithub />
				</a>
				{/*Bouton Linkedin*/}
				<a
					href="links.linkedin"
					// _blank ouvre le lien dans un nouvel onglet, rel=... l'accompage toujours pour la securite
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Linkedin"
					title="Linkedin"
					className="hover:text-white transition-colors"
				>
					<FaLinkedin />
				</a>
				{/*Bouton Mail*/}
				<a
					href="links.email"
					aria-label="Email"
					title="Email"
					className="hover:text-white transition-colors"
				>
					<MdEmail />
				</a>

			</div>
		</section>
	)
}