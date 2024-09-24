import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-yellow-800 p-4 rounded-xl'>Tailwind test</h1>
     <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
          <img className="w-24 h-24 rounded-full m" src="/sarah-dayan.jpg" alt="" width="384" height="512" />
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg">
                “Tailwind CSS is the only framework that I&apos;ve seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption>
              <div>
                Sarah Dayan
              </div>
              <div>
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
      </figure>
    </>
  )
}

export default App
