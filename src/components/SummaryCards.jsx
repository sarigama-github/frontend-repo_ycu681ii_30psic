import { ArrowDownRight, ArrowUpRight, CircleDollarSign } from 'lucide-react'

function Stat({ label, value, icon: Icon, trend, color }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-10`}></div>
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm text-blue-100/70">{label}</p>
          <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
          {trend && (
            <p className="mt-1 text-xs text-blue-200/70">{trend}</p>
          )}
        </div>
        <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  )
}

export default function SummaryCards({ summary }) {
  const income = summary?.income ?? 0
  const expense = summary?.expense ?? 0
  const net = summary?.net ?? 0

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-24 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Stat label="Income (MTD)" value={`$${income.toLocaleString()}`} icon={ArrowUpRight} color="from-emerald-400 to-teal-500" trend="Up from last month" />
        <Stat label="Expenses (MTD)" value={`$${expense.toLocaleString()}`} icon={ArrowDownRight} color="from-rose-400 to-pink-500" trend="Down from last month" />
        <Stat label="Net (MTD)" value={`$${net.toLocaleString()}`} icon={CircleDollarSign} color="from-blue-500 to-cyan-400" trend={net >= 0 ? 'In the green' : 'In the red'} />
      </div>
    </section>
  )
}
