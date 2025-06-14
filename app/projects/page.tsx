import Link from 'next/link'
import { Header } from '../../components/Header'

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-2xl mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <ul className="list-disc list-inside space-y-2">
          <li><Link href="https://github.com/thisisanshgupta/paper-roll" className="underline">Paper-Roll</Link> - A clean, distraction-free way to explore, read, and save cutting-edge research from arXiv, all in one smooth scroll.  </li>
          <li><Link href="https://github.com/thisisanshgupta/my-cuties-cycle" className="underline">Mellow7</Link> - A cute period tracker app for your cutie. </li>
          <li><Link href="https://github.com/thisisanshgupta/Senna" className="underline">Senna</Link> - Senna is an advanced AI-powered search engine. </li>
          <li><Link href="https://github.com/thisisanshgupta/KAN_based_GPT" className="underline">KAN based GPT</Link> - This is a GPT model from nanoGPT but with a twist of KAN.</li>
          <li><Link href="https://github.com/thisisanshgupta/Monte-Carlo-Radiation-Transport-Simulation" className="underline">Monte Carlo Radiation Transport</Link> - implementation of a simplified Monte Carlo simulation of X-ray propagation in a CT scan. </li>
          <li><Link href="https://github.com/thisisanshgupta/ExcelBot" className="underline">Excel Bot</Link> - ExcelBot is an AI-powered tool designed to generate accurate Excel formulas based on your queries. </li>
          <li><Link href="https://github.com/thisisanshgupta/JangoTube" className="underline">JangoTube</Link> - I made this youtube clone while learning Django.</li>
          <li><Link href="https://github.com/thisisanshgupta/SimpleWebSearchEngine" className="underline">Web Search Engine</Link> - Implementation of a simple web search engine in python.</li>
          <li><Link href="https://github.com/thisisanshgupta/HyperCode" className="underline">HyperCode</Link> - Attention based 10m+ parameter model to translate natural language into python code.</li>
          <li><Link href="https://github.com/thisisanshgupta/pytorch_BERT" className="underline">BERT in Pytorch</Link> - My Pytorch implementation of BERT model.</li>
          <li><Link href="https://github.com/thisisanshgupta/miniature-GPT" className="underline">miniGPT in Pytorch</Link> - My Pytorch implementation of a miniature GPT model.</li>
          <li><Link href="https://github.com/thisisanshgupta/thisismyportfolio" className="underline">Ansh's Portfolio</Link> - My portfolio.</li>
          <li><Link href="https://github.com/thisisanshgupta/hydrogen_atom_sim" className="underline">Hydrogen Atom Ground State Simulation</Link> - This MATLAB script simulates the ground state of a hydrogen atom using quantum mechanics principles.</li>
          <li>and many more to come.</li>
        </ul>
      </main>
    </div>
  )
}
