'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'

export function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <header className="border-b border-gray-200 dark:border-gray-700 py-4">
      <nav className="max-w-2xl mx-auto px-4 flex justify-between items-center">
        <ul className="flex space-x-4">
          <li><Link href="/" className={`hover:underline ${pathname === '/' ? 'font-bold' : ''}`}>home</Link></li>
          <li><Link href="/skills" className={`hover:underline ${pathname === '/skills' ? 'font-bold' : ''}`}>my skills</Link></li>
          <li><Link href="/projects" className={`hover:underline ${pathname === '/projects' ? 'font-bold' : ''}`}>my projects</Link></li>
          <li><Link href="/blogs" className={`hover:underline ${pathname === '/blogs' ? 'font-bold' : ''}`}>my blogs</Link></li>
        </ul>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </nav>
    </header>
  )
}
