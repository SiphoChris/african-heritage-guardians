import Link from 'next/link'
import { BookA } from 'lucide-react'

function Sidebar() {
  return (
    <aside className="w-52 bg-amber-300 shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
      </div>
      <nav className="mt-6">
        <div className="flex gap-x-2">
          <div className="flex gap-x-3 w-full px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
            <BookA />
            <Link href="/dictionaries" className='text-lg font-medium'>
              Dictionaries
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar