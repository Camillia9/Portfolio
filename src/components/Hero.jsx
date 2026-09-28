import { useTranslation } from "react-i18next";

export function Hero() {
	const { t } = useTranslation()

	return (
		<section className="max-w-5x1 mx-auto px-6 py-24">
			<p className="text-lavender">{t('hero.role')}</p>
			<h1 className="text-white text-5xl font-medium mt-2">Mansouf Camillia</h1>
			<p className="text-white/80 mt-4">{t('hero.status')}</p>
		</section>
	)
}