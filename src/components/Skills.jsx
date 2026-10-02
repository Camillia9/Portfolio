import { skills } from "../data/skills";

export default function Skills() {
	return (
		<ul className="flex flex-wrap gap-2 mt-6">
      {skills.map((skill) => (
        <li
          key={skill}
          className="border border-lavender/50 text-lavender text-sm px-3 py-1 rounded-lg"
        >
          {skill}
        </li>
      ))}
		</ul>
	)
}