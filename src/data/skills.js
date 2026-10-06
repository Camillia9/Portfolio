export const skillGroups = [
  {
    id: 'languages',
    items: [
      { name: 'C', refs: ['common_core'] },
      { name: 'C++', refs: ['cpp_pool'] },
      { name: 'JavaScript', refs: ['ft_transcendence'] },
    ],
  },
  {
    id: 'frontend',
    items: [
      { name: 'React', refs: ['ft_transcendence'] },
      { name: 'Tailwind', refs: ['ft_transcendence'] },
      { name: 'Vite', refs: ['ft_transcendence'] },
    ],
  },
  {
    id: 'backend',
    items: [
      { name: 'Node.js · Express', refs: ['ft_transcendence'] },
      { name: 'Sockets · poll()', refs: ['ft_irc'] },
      { name: 'PostgreSQL · Prisma', refs: ['ft_transcendence'], basics: true },
    ],
  },
  {
    id: 'tools',
    items: [
      { name: 'Docker', refs: ['inception', 'ft_transcendence'] },
      { name: 'Shell', refs: ['shell_pool', 'minishell'] },
      { name: 'Git', refs: ['all_projects'] },
    ],
  },
]