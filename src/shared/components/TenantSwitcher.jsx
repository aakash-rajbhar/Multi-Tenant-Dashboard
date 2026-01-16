import { ChevronDown } from "lucide-react"
import { useAuth } from "../../auth/AuthContext"

const TenantSwitcher = () => {
  const { user, tenants, switchTenant } = useAuth()

  return (
    <div className="relative group">
      <select
        value={user.tenantId}
        onChange={(e) => switchTenant(e.target.value)}
        className="appearance-none px-4 py-2 pr-10 rounded-lg border border-slate-300 bg-white text-slate-900 font-medium hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent cursor-pointer transition-all"
      >
        {Object.values(tenants).map(t => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500">
        <ChevronDown className="w-4 h-4" />
      </span>
    </div>
  )
}

export default TenantSwitcher
