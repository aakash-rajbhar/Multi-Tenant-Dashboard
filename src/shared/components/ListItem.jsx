const ListItem = ({ title, subtitle, badge, badgeConfig, children, hoverColor = "indigo" }) => {
  const hoverStyles = {
    indigo: "hover:border-indigo-300 hover:bg-indigo-50 group-hover:text-indigo-700",
    emerald: "hover:border-emerald-300 hover:bg-emerald-50 group-hover:text-emerald-700"
  }

  return (
    <div className={`group border border-slate-200 rounded-lg p-4 transition-all cursor-pointer ${hoverStyles[hoverColor]}`}>
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="font-bold text-slate-900">{title}</p>
          {subtitle && <p className="text-sm text-slate-500 font-medium">{subtitle}</p>}
        </div>
        {badge && (
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeConfig}`}>
            {badge}
          </span>
        )}
      </div>
      {children}
    </div>
  )
}

export default ListItem
