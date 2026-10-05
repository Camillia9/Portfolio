import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { links } from "../data/links";

const items = [
	{href: links.github, label: 'GitHub', Icon: FaGithub, external: true},
	{href: links.linkedin, label: 'Linkedin', Icon: FaLinkedin, external: true},
	{href: `mailto:${links.email}`, label: 'Email', Icon: MdEmail},
]

export default function SocialLinks({ className = '' }){
	return (
		<div className={`flex gap-4 text-lavender ${className}`}>
			{items.map(({href, label, Icon, external}) => (
				<a
					key={label}
					href={href}
					aria-label={label}
					title={label}	
					{...(external && { target: '_blank', rel: 'noopener noreferrer'})}
					className="hover:text-white transition-colors"
				>
					<Icon />
				</a>
			))}

		</div>
	)
}