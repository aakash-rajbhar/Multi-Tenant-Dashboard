const Card = ({ title, icon, gradient, count, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow">
      {/* Header */}
      <div className={`bg-linear-to-r ${gradient} px-6 py-4`}>
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          {count !== undefined && (
            <span className="ml-auto bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {count}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {children}
      </div>
    </div>
  )
}

export default Card
