import Link from 'next/link'
import { Header } from '../../components/Header'

export default function Blogs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-2xl mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-8">Blogs</h1>
        <ul className="list-disc list-inside space-y-2">
          <li><Link href="https://dev.to/thisisanshgupta/what-the-hell-is-this-biological-computing-4fm2" className="underline">What the hell is this Biological Computing? </Link></li>      
          <li><Link href="https://dev.to/thisisanshgupta/how-qubits-are-physically-implemented-5bd9" className="underline">How Qubits are physically implemented? </Link></li>
          <li><Link href="https://dev.to/thisisanshgupta/building-a-meta-search-engine-in-python-a-step-by-step-guide-1jb8" className="underline">Building a Meta Search Engine in Python: A Step-by-Step Guide </Link></li>
        </ul>
      </main>
    </div>
  )
}
