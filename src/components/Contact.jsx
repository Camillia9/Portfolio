import { useState } from "react";
import { useTranslation } from "react-i18next";
import { links } from "../data/links";

export default function Contact() {
	const { t } = useTranslation()
	const [copied, setCopied] = useState(false)

	const copyEmail = async () => {
		await navigator.clipboard.writeText(links.email)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<section className="mt-6 max-w-3xl space-y-6">
			<p className="text-white/80 leading-relaxed">{t('contact.intro')}</p>

			<div className="space-y-3 font-mono text-sm">
				{/*Email*/}
				<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
					<span className="text-white/40 w-20">email</span>
					<a href={`mailto:${links.email}`} className="text-white hover:text-lavender">
						{links.email}
					</a>
					<button
						onClick={copyEmail}
						className="text-xs text-lavender border border-lavender/50 rounded px-2 py-0.5 hover:bg-lavender/10"
					>
						{copied ? t('contact.copied') : t('contact.copy')}
					</button>
				</div>
				{/*Linkedin*/}
				<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
					<span className="text-white/40 w-20">linkedin</span>
					<a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-lavender">
						{links.linkedin.replace('https://www.', '')}
					</a>
				</div>
				{/*Github*/}
				<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
					<span className="text-white/40 w-20">github</span>
					<a href={links.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-lavender">
						{links.github.replace('https://', '')}
					</a>
				</div>
			</div>
			<a
				href={links.cv}
				download
				className="inline-block bg-action text-white px-5 py-2.5 rounded-lg hover:bg-card transition-colors"
			>
				{t('hero.ctaCv')}
			</a>
		</section>
	)
}

