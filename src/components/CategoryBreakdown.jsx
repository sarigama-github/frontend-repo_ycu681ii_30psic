export default function CategoryBreakdown({ categories }) {
  const list = categories || []
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-12">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
        <div className="flex items-end justify-between mb-4">
          <h3 className="text-white font-semibold text-lg">Category breakdown</h3>
          <p className="text-blue-200/70 text-sm">This month</p>
        </div>
        <div className="space-y-3">
          {list.length === 0 && (
            <p className="text-blue-200/70 text-sm">No data yet. Load demo data to see the chart.</p>
          )}
          {list.map((c, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-28 text-sm text-blue-100/80">{c.name}</div>
              <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${Math.min(100, (c.amount / (list[0]?.amount || 1)) * 100)}%` }}></div>
              </div>
              <div className="w-24 text-right text-sm text-white">${c.amount.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
