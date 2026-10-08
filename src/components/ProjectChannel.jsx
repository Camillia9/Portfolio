import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

export default function ProjectChannel({ id }) {
	const { t } = useTranslation()
	const project = projects[id]

	return (
    <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1fr)_12rem]">
			<div className="space-y-4 max-w-3xl">
				<p className="font-mono text-sm text-white/40">
					{t('projects.labels.modes')}:{' '}
          {project.stack.map((tech) => (
            <span key={tech} className="text-lavender mr-2">[{tech}]</span>
          ))}
				</p>

				{project.pinned.map((key) => (
					<article key={key} className="bg-card/40 border-l-2 border-lavender rounded-r-lg p-4">
						<h3 className="font-mono text-xs text-lavender">
							→ {t(`projects.pinnedTitles.${key}`)}
						</h3>
						<p className="text-white/80 leading-relaxed mt-2">
              {t(`projects.${id}.${key}`)}
            </p>
					</article>
				))}

				<a
					href={project.repo}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 bg-action text-white px-5 py-2.5 rounded-lg hover:bg-card transition-colors"
				>
					<FaGithub />
				</a>

				<aside className="order-first md:order-0 font-mono text-sm md:border-l md:border-card md:pl-4">
					<h3 className="text-white/40 text-xs uppercase mb-2">
						{t('projects.labels.members')} · {project.members.length}
					</h3>
					<ul className="flex flex-wrap gap-x-4 gap-y-1 md:block md:space-y-1">
          {project.members.map((member) => (
            <li key={member} className='text-lavender'>
              {member === project.lead ? '@' : ''}{member}
            </li>
          ))}
        </ul>
				</aside>
			</div>
		</div>

	)
}