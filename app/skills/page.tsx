import { Header } from '../../components/Header'

export default function Skills() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-2xl mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-8">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-2">Programming Languages</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Java</li>
              <li>C</li>
              <li>C++</li>
              <li>Python</li>
              <li>HTML/CSS/JavaScript</li>
              <li>Fortran (basic experience)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Machine Learning and DL</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Basic ML algorithms and concepts</li>
              <li>PyTorch</li>
              <li>TensorFlow</li>
              <li>Keras</li>
              <li>Numpy</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Quantum Computing</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>IBM Quantum Computing Course (2020)</li>
              <li>Qiskit Developer Challenge Winner (2021)</li>
              <li>Experience with Qiskit</li>
              <li>and other basic Quantum algorithms like Shor's Algorithm and Grover's Search</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Web and App Development</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Next.js</li>
              <li>ReactJS</li>
              <li>FastAPI</li>
              <li>Flask</li>
              <li>Flutter</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}