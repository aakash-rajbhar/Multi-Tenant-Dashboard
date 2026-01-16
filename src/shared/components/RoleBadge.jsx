import { useAuth } from "../../auth/AuthContext"

const RoleBadge = () => {
  const { user } = useAuth()

  const roleConfig = {
    admin: {
      bg: "bg-gradient-to-r from-amber-100 to-orange-100",
      text: "text-amber-900",
      icon: "👨‍💼"
    },
    agent: {
      bg: "bg-gradient-to-r from-emerald-100 to-teal-100",
      text: "text-emerald-900",
      icon: "👤"
    }
  }

  const config = roleConfig[user.role] || roleConfig.agent

  return (
    <div className={`${config.bg} ${config.text} px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2`}>
      <span>{config.icon}</span>
      <span>{user.role.toUpperCase()}</span>
    </div>
  )
}

export default RoleBadge
