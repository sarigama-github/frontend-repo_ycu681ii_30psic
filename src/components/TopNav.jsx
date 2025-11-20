import { useState } from 'react'
import { CreditCard, Database, Rocket } from 'lucide-react'

export default function TopNav({ onSeed, seeding }) {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center shadow-lg shadow-blue-500/30">
            <CreditCard className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold leading-tight">Fintrack</p>
            <p className="text-xs text-blue-200/70 -mt-0.5">Personal finance dashboard</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onSeed}
            disabled={seeding}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white px-3 py-2 text-sm transition-colors"
          >
            {seeding ? (
              <>
                <Database className="h-4 w-4 animate-pulse" /> Seeding demo...
              </>
            ) : (
              <>
                <Rocket className="h-4 w-4" /> Load demo data
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
