import { useTranslation } from "react-i18next";

export default function ChannelHeader({ id }) {
	const { t } = useTranslation()

	return (
		<header className="font-mono border-b border-card pb-3">
			<h2 className="text-white text-lg"> 
				# {id} <span className="text-white/40 text-sm">. {t(`channel.topics.${id}`)}</span>
			</h2>
			<p className="text-white/40 text-xs italic mt-2">
				→ {t('channel.joined')} #{id}
			</p>
		</header>
	)
}