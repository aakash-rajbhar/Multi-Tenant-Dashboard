import { leads as initialLeads } from "../../data/mockData"
import { useAuth } from "../../auth/AuthContext"
import { useState, useMemo, useCallback } from "react"
import EditLeadModal from "../../shared/components/EditLeadModal"

const statusConfig = {
  New: "bg-blue-100 text-blue-700",
  Contacted: "bg-purple-100 text-purple-700",
  Qualified: "bg-emerald-100 text-emerald-700",
  Lost: "bg-red-100 text-red-700"
}

const PAGE_SIZE = 4

const LeadsPage = () => {
  const { user } = useAuth()
  const [selectedStatus, setSelectedStatus] = useState(null)
  const [leads, setLeads] = useState(initialLeads)
  const [editingLead, setEditingLead] = useState(null)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const tenantLeads = useMemo(() => {
    const filtered = leads.filter(lead => lead.tenantId === user.tenantId)
    if (selectedStatus) {
      return filtered.filter(lead => lead.status === selectedStatus)
    }
    return filtered
  }, [user.tenantId, selectedStatus, leads])

  const visibleLeads = useMemo(() => {
    return tenantLeads.slice(0, visibleCount)
  }, [tenantLeads, visibleCount])

  const statuses = useMemo(() => {
    return [...new Set(leads.map(l => l.status))]
  }, [leads])


  const handleEditLead = useCallback((leadId, newStatus) => {
    setLeads(prevLeads =>
      prevLeads.map(lead =>
        lead.id === leadId ? { ...lead, status: newStatus } : lead
      )
    )
    setEditingLead(null)
  }, [])

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="bg-linear-to-r from-indigo-600 to-indigo-700 px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">👥</span>
          <h2 className="text-2xl font-bold text-white">Leads</h2>
          <span className="ml-auto bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {visibleLeads.length} / {tenantLeads.length}
          </span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="border-b border-slate-200 px-6 py-3 bg-slate-50 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedStatus(null)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
            selectedStatus === null
              ? "bg-indigo-600 text-white"
              : "bg-white border border-slate-200 text-slate-700 hover:border-indigo-300"
          }`}
        >
          All
        </button>
        {statuses.map(status => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              selectedStatus === status
                ? "bg-indigo-600 text-white"
                : "bg-white border border-slate-200 text-slate-700 hover:border-indigo-300"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        {tenantLeads.length === 0 ? (
          <div className="text-center py-8">
            <span className="text-4xl mb-2 block">📭</span>
            <p className="text-slate-500 font-medium">No leads found</p>
          </div>
        ) : (
          <div className="space-y-3">
            {visibleLeads.map(lead => (
              <div
                key={lead.id}
                className="group border border-slate-200 rounded-lg p-4 hover:border-indigo-300 hover:bg-indigo-50 transition-all "
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-bold text-slate-900 group-hover:text-indigo-700">{lead.name}</p>
                    <p className="text-sm text-slate-500 font-medium">{lead.phone}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusConfig[lead.status] || "bg-gray-100 text-gray-700"}`}>
                    {lead.status}
                  </span>
                </div>

                {user.role === "admin" && (
                  <button
                    onClick={() => setEditingLead(lead)}
                    className="text-xs mt-3 px-2 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors cursor-pointer"
                  >
                    ✏️ Edit Status
                  </button>
                )}
              </div>
            ))}
            {tenantLeads.length > visibleCount && (
              <div className="pt-2">
                <button
                  onClick={() => setVisibleCount(prev => Math.min(prev + PAGE_SIZE, tenantLeads.length))}
                  className="w-full text-sm font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 rounded-lg px-3 py-2 transition-colors"
                >
                  Load more ({tenantLeads.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editingLead && (
        <EditLeadModal
          lead={editingLead}
          statuses={statuses}
          onClose={() => setEditingLead(null)}
          onSave={handleEditLead}
        />
      )}
    </div>
  )
}

export default LeadsPage
