import { useState } from "react"
import { useAuth } from "../../auth/AuthContext"
import { ChevronDown } from "lucide-react"

const UserMenu = () => {
  const { user, switchRole } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const roles = ["admin", "agent"]

  const roleConfig = {
    admin: {
      bg: "bg-gradient-to-r from-amber-100 to-orange-100",
      text: "text-amber-900",
      icon: "👨‍💼",
      label: "Admin"
    },
    agent: {
      bg: "bg-gradient-to-r from-emerald-100 to-teal-100",
      text: "text-emerald-900",
      icon: "👤",
      label: "Agent"
    }
  }

  const config = roleConfig[user.role] || roleConfig.agent

  return (
    <div className="relative">
      {/* Button showing current role */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${config.bg} ${config.text} px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 hover:shadow-md transition-all cursor-pointer`}
      >
        <span className="text-lg">{config.icon}</span>
        <span>{config.label}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden z-50">
          {/* Current User */}
          <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Logged in as</p>
            <p className="text-sm font-semibold text-slate-900">{user.name}</p>
          </div>

          {/* Role Switcher */}
          <div className="px-4 py-3 border-b border-slate-200">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">Switch Role</p>
            <div className="space-y-2">
              {roles.map(role => (
                <button
                  key={role}
                  onClick={() => {
                    switchRole(role)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left px-3 py-2 rounded text-sm font-medium transition-colors ${
                    user.role === role
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {roleConfig[role].icon} {roleConfig[role].label}
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="px-4 py-2 text-xs text-slate-500 text-center">
            <p>Switch role to test access control</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu

