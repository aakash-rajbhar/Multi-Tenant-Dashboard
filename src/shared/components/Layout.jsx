import { lazy, Suspense } from "react"
import TenantSwitcher from "./TenantSwitcher"
import UserMenu from "./UserMenu"

const LeadsPage = lazy(() => import("../../modules/leads/LeadsPage"))
const CallsPage = lazy(() => import("../../modules/calls/CallsPage"))

const Layout = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Sales Dashboard</h1>
              <p className="text-xs text-slate-500">Multi-Tenant Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <TenantSwitcher />
            <div className="w-px h-6 bg-slate-200"></div>
            <UserMenu />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Suspense
          fallback={
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-64 rounded-2xl border border-slate-200 bg-white animate-pulse" />
              <div className="h-64 rounded-2xl border border-slate-200 bg-white animate-pulse" />
            </div>
          }
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <LeadsPage />
            <CallsPage />
          </div>
        </Suspense>
      </main>
    </div>
  )
}

export default Layout
