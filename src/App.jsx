import Hero from './components/Hero'
import Atributos from './components/Atributos'
import Aprimoramentos from './components/Aprimoramentos'
import SelecaoNivel from './components/SelecaoNivel'
import DiarioMissoes from './components/DiarioMissoes'
import ChefeFinal from './components/ChefeFinal'
import NavBar from './components/NavBar'
import CursorNeon from './components/CursorNeon'

export default function App(){
  return (
    <div className='min-h-screen bg-[radial-gradient(elipse_at_top,_var(--tw-gradient-stops))] from-[#1a0f2e] via-[#0a0a0a] to-[#050505] front-mono relative'>
      <CursorNeon />
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
  )
}
