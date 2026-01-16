import { ChevronDown } from "lucide-react"
import { useState } from "react"

const EditLeadModal = ({ lead, statuses, onClose, onSave }) => {
  const [newStatus, setNewStatus] = useState(lead.status)

  const handleSave = () => {
    onSave(lead.id, newStatus)
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-8 z-50 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Edit Lead Status</h2>

        {/* Lead Info */}
        <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <p className="text-sm text-slate-500 mb-1">Lead Name</p>
          <p className="text-lg font-semibold text-slate-900">{lead.name}</p>
          <p className="text-sm text-slate-600 mt-2">{lead.phone}</p>
        </div>

        {/* Status Selection */}
        <div className="mb-6 relative group">
          <label className="block text-sm font-semibold text-slate-900 mb-3">
            New Status
          </label>
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            className="w-full px-3 py-2 appearance-none rounded-lg border border-slate-300 bg-white text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2 top-11.5 text-slate-500">
        <ChevronDown className="w-4 h-4 group-focus-within:rotate-180 transition-transform" />
      </span>
        </div>

        {/* Current Status */}
        <div className="mb-6 p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
          <p className="text-sm text-indigo-700">
            <strong>Current Status:</strong> {lead.status}
            {newStatus !== lead.status && (
              <span className="ml-2 text-indigo-600">
                → <strong>{newStatus}</strong>
              </span>
            )}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={newStatus === lead.status}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold text-white transition-colors ${
              newStatus === lead.status
                ? "bg-slate-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  )
}

export default EditLeadModal
