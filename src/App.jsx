import { useState } from 'react'
import Hero from './components/Hero'
import Atributos from './components/Atributos'
import Aprimoramentos from './components/Aprimoramentos'
import SelecaoNivel from './components/SelecaoNivel'
import DiarioMissoes from './components/DiarioMissoes'
import ChefeFinal from './components/ChefeFinal'
import NavBar from './components/NavBar'
import CursorNeon from './components/CursorNeon'
import TelaCarregamento from './components/TelaCarregamento'

export default function App(){

  const [isBooting, setIsBooting] = useState(true)
  return (
    <div className='min-h-screen font-mono relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-[#030005]/80 to-transparent'>
      {isBooting ? (
        <TelaCarregamento onComplete={() => setIsBooting(false)} />
      ) : (
        <>
        <CursorNeon />
        <div className='relative z-10'>
          <NavBar />
          <div className='max-w-8xl mx-auto p-4 md:p-8'>
            <Hero />
            <Atributos />
            <Aprimoramentos/>
            <SelecaoNivel />
            <DiarioMissoes />
            <ChefeFinal />
          </div>
        </div>
        </>
      )}
    </div>
  )
}
