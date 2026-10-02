export default function ChannelButton({ id, activeChannel, onSelect, className = '' }) {
  const isActive = activeChannel === id

  return (
    <button
      onClick={() => onSelect(id)}
      className={`text-left px-3 py-1.5 rounded-md transition-colors ${
        isActive ? 'bg-card text-white' : 'text-lavender hover:bg-card/40'
      } ${className}`}
    >
      # {id}
    </button>
  )
}