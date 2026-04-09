import Hero from './components/Hero'
import Atributos from './components/Atributos'
import Aprimoramentos from './components/Aprimoramentos'
import SelecaoNivel from './components/SelecaoNivel'

export default function App(){
  return (
    <div className='min-h-screen p-4 md:p-8'>
      <Hero />
      <Atributos />
      <Aprimoramentos/>
      <SelecaoNivel />
    </div>
  )
}
