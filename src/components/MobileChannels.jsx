import { useTranslation } from "react-i18next";
import ChannelButton from "./ChannelButton"
import { channels } from "../data/channels";

export default function MobileChannels({ activeChannel, onSelect }) {
	const { t } = useTranslation()
	const allChannels = [...channels.general, ...channels.projects]

	return(
		<div className="md:hidden border-b border-card font-mono text-sm">
			<p className="text-white/60 text-xs px-4 pt-3">● {t('hero.status')}</p>
			<div className="flex gap-2 overflow-x-auto px-4 py-3">
				{allChannels.map((id) => (
					<ChannelButton 
						key={id}
						id={id}
						activeChannel={activeChannel}
						onSelect={onSelect}
						className="shrink-0"
					/>
				))}
			</div>
		</div>
	)
}