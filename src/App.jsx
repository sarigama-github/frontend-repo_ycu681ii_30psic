import { useEffect, useState } from 'react'
import Hero3D from './components/Hero3D'
import SummaryCards from './components/SummaryCards'
import CategoryBreakdown from './components/CategoryBreakdown'
import TopNav from './components/TopNav'

function App() {
  const [summary, setSummary] = useState(null)
  const [seeding, setSeeding] = useState(false)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const loadSummary = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/summary`)
      if (res.ok) {
        const data = await res.json()
        setSummary(data)
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    loadSummary()
  }, [])

  const handleSeed = async () => {
    try {
      setSeeding(true)
      await fetch(`${baseUrl}/api/demo/seed`, { method: 'POST' })
      await loadSummary()
    } catch (e) {
      console.error(e)
    } finally {
      setSeeding(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <TopNav onSeed={handleSeed} seeding={seeding} />
      <Hero3D />
      <SummaryCards summary={summary} />
      <CategoryBreakdown categories={summary?.categories} />

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-blue-200/60 text-sm">
        Built with a minimalist, glass-morphic aesthetic for modern fintech vibes.
      </footer>
    </div>
  )
}

export default App
