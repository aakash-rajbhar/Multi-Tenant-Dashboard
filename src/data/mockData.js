export const tenants = {
  orgA: {
    id: "orgA",
    name: "Organization A",
  },
  orgB: {
    id: "orgB",
    name: "Organization B",
  },
}

export const leads = [
  { id: 1, tenantId: "orgA", name: "Ravi Kumar", phone: "9999999999", status: "New" },
  { id: 2, tenantId: "orgA", name: "Amit Shah", phone: "8888888888", status: "Contacted" },
  { id: 3, tenantId: "orgA", name: "Priya Patel", phone: "6666666666", status: "Qualified" },
  { id: 4, tenantId: "orgA", name: "Karan Mehta", phone: "7777771111", status: "Lost" },
  { id: 5, tenantId: "orgA", name: "Sneha Rani", phone: "5555551234", status: "New" },
  { id: 6, tenantId: "orgA", name: "Arjun Singh", phone: "4444445678", status: "Contacted" },

  { id: 7, tenantId: "orgB", name: "Neha Singh", phone: "7777777777", status: "New" },
  { id: 8, tenantId: "orgB", name: "Vikram Reddy", phone: "5555555555", status: "Contacted" },
  { id: 9, tenantId: "orgB", name: "Sonia Kapoor", phone: "4444444444", status: "Qualified" },
  { id: 10, tenantId: "orgB", name: "Rohan Desai", phone: "3333333333", status: "New" },
  { id: 11, tenantId: "orgB", name: "Tanya Mehta", phone: "2222221111", status: "Lost" },
  { id: 12, tenantId: "orgB", name: "Aditya Sharma", phone: "1111112222", status: "Contacted" },
]

export const calls = [
  { id: 1, tenantId: "orgA", leadName: "Ravi Kumar", time: "10:30 AM", duration: "2m", outcome: "Interested" },
  { id: 2, tenantId: "orgA", leadName: "Amit Shah", time: "11:15 AM", duration: "3m", outcome: "Callback" },
  { id: 3, tenantId: "orgA", leadName: "Priya Patel", time: "12:00 PM", duration: "5m", outcome: "No Answer" },
  { id: 4, tenantId: "orgA", leadName: "Karan Mehta", time: "2:00 PM", duration: "4m", outcome: "Lost" },
  { id: 5, tenantId: "orgA", leadName: "Sneha Rani", time: "3:30 PM", duration: "2m", outcome: "Interested" },
  { id: 6, tenantId: "orgA", leadName: "Arjun Singh", time: "4:15 PM", duration: "3m", outcome: "Callback" },

  { id: 7, tenantId: "orgB", leadName: "Neha Singh", time: "10:45 AM", duration: "1m", outcome: "No Answer" },
  { id: 8, tenantId: "orgB", leadName: "Vikram Reddy", time: "11:30 AM", duration: "4m", outcome: "Interested" },
  { id: 9, tenantId: "orgB", leadName: "Sonia Kapoor", time: "12:15 PM", duration: "2m", outcome: "Callback" },
  { id: 10, tenantId: "orgB", leadName: "Rohan Desai", time: "1:00 PM", duration: "3m", outcome: "Interested" },
  { id: 11, tenantId: "orgB", leadName: "Tanya Mehta", time: "2:45 PM", duration: "5m", outcome: "Lost" },
  { id: 12, tenantId: "orgB", leadName: "Aditya Sharma", time: "3:30 PM", duration: "2m", outcome: "Callback" },
]
