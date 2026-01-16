import { calls } from "../../data/mockData"
import { useAuth } from "../../auth/AuthContext"
import { useMemo, useState } from "react"

const CALLS_PAGE_SIZE = 4

const CallsPage = () => {
  const { user } = useAuth()
  const [visibleCount, setVisibleCount] = useState(CALLS_PAGE_SIZE)

  const tenantCalls = useMemo(() => {
    return calls.filter(call => call.tenantId === user.tenantId)
  }, [user.tenantId])

  const visibleCalls = useMemo(() => {
    return tenantCalls.slice(0, visibleCount)
  }, [tenantCalls, visibleCount])


  const outcomeConfig = {
    "Interested": "bg-emerald-100 text-emerald-700",
    "No Answer": "bg-red-100 text-red-700",
    "Callback": "bg-yellow-100 text-yellow-700"
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="bg-linear-to-r from-emerald-600 to-teal-600 px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">📞</span>
          <h2 className="text-2xl font-bold text-white">Call Logs</h2>
          <span className="ml-auto bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {visibleCalls.length} / {tenantCalls.length}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {tenantCalls.length === 0 ? (
          <div className="text-center py-8">
            <span className="text-4xl mb-2 block">🔇</span>
            <p className="text-slate-500 font-medium">No calls found</p>
          </div>
        ) : (
          <div className="space-y-3">
            {visibleCalls.map(call => (
              <div
                key={call.id}
                className="group border border-slate-200 rounded-lg p-4 hover:border-emerald-300 hover:bg-emerald-50 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-slate-900 group-hover:text-emerald-700">{call.leadName}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${outcomeConfig[call.outcome] || "bg-gray-100 text-gray-700"}`}>
                    {call.outcome}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <span className="text-lg">⏰</span>
                    <span className="font-medium">{call.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-lg">⏱️</span>
                    <span className="font-medium">{call.duration}</span>
                  </div>
                </div>
              </div>
            ))}
            {tenantCalls.length > visibleCount && (
              <div className="pt-2">
                <button
                  onClick={() => setVisibleCount(prev => Math.min(prev + CALLS_PAGE_SIZE, tenantCalls.length))}
                  className="w-full text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 rounded-lg px-3 py-2 transition-colors"
                >
                  Load more ({tenantCalls.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CallsPage
