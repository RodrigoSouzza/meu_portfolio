import Hero from './components/Hero'
import Atributos from './components/Atributos'
import Aprimoramentos from './components/Aprimoramentos'
import SelecaoNivel from './components/SelecaoNivel'
import DiarioMissoes from './components/DiarioMissoes'
import ChefeFinal from './components/ChefeFinal'

export default function App(){
  return (
    <div className='min-h-screen p-4 md:p-8'>
      <Hero />
      <Atributos />
      <Aprimoramentos/>
      <SelecaoNivel />
      <DiarioMissoes />
      <ChefeFinal />
    </div>
  )
}
