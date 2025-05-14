import Link from 'next/link'
import Image from 'next/image'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-2xl mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold mb-8">Hey, I'm Ansh</h1>  
        
        <section className="mb-8">
          <h2 className="inline-block bg-secondary px-2 py-1 text-sm mb-2">Who am I?</h2>
          <p>
            A passionate student and a 3-star coder with a solid foundation in programming 
            languages such as C/C++, Java, Python, Golang, Rust, and Elixir. I have experience with various frameworks, including PyTorch. 
            <br />
            Recently, my startup idea was selected for the prestigious OnDeck Founders Fellowship program in San Francisco,
            as well as The Residency program backed by Sam Altman in Bengaluru. 
          </p>
        </section>

        <section className="mb-8">
          <Image 
            src="/Black-Hole-Warped-World.gif" 
            alt="featured_image" 
            width={500} 
            height={300} 
            style={{ width: '100%', height: 'auto' }} 
          />
          <p>Stay Curious, Stay Foolish!</p>
        </section>
        
        <section>
          <h2 className="inline-block bg-secondary px-2 py-1 text-sm mb-2">Contact Me</h2>
          <p>
            Feel free to reach out to me on 
            <Link href="https://github.com/thisisanshgupta" target="_blank" rel="noopener noreferrer">
              <span className="underline"> GitHub</span>
            </Link>,  
            <Link href="https://x.com/ansh_hey" target="_blank" rel="noopener noreferrer">
              <span className="underline"> X</span>
            </Link>, or via  
            <Link href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=anshg6063@gmail.com&tf=1" target="_blank" rel="noopener noreferrer">
              <span className="underline"> Email</span>
            </Link>.
          </p>
        </section>
      </main>
    </div>
  )
}
