import Link from 'next/link'
import Image from 'next/image'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-2xl mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold mb-8">Hey, I'm Ansh</h1>
        <section>
          <h2 className="inline-block bg-secondary px-2 py-1 text-sm mb-2">recents</h2>
          <p>
            Recently my startup idea got selected for OnDeck Founders Fellowship program in SF.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="inline-block bg-secondary px-2 py-1 text-sm mb-2">about</h2>
          <p>Hey I'm Ansh and I am a student and a <span>
          3 ⭐ Coder </span> 
          with a strong foundation in programming languages like C/C++,Java and Python and various frameworks like Pytorch.</p>
        </section>
        <section className="mb-8">
          <Image 
            src="/quote.jpeg" 
            alt="featured_image" 
            width={500} 
            height={300} 
            layout="responsive"
          />
        </section>
        
        <section>
          <h2 className="inline-block bg-secondary px-2 py-1 text-sm mb-2">contact me</h2>
          <p>
            Feel free to reach out to me on <Link href="https://github.com/thisisanshgupta" className="underline">GitHub</Link>, 
            <Link href="https://x.com/ansh_hey" className="underline"> X</Link>, or via  
            <Link href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=anshg6063@gmail.com&tf=1" className="underline"> Email</Link>.
          </p>
        </section>
      </main>
    </div>
  )
}
