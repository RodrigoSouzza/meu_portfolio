import { useEffect, useRef } from 'react';

export default function CursorNeon() {

  const canvasRef = useRef(null)
  const rastro = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const ajustarTamanho = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', ajustarTamanho)
    ajustarTamanho()

    const adicionarRastro = (e) => {
      rastro.current.push({ x: e.clientX, y: e.clientY, idade: 1 })
    }
    window.addEventListener('mousemove', adicionarRastro)

    const desenhar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < rastro.current.length; i++) {
        const ponto = rastro.current[i]
        ponto.idade -= 0.02
        if (ponto.idade > 0) {
          ctx.beginPath()
          ctx.arc(ponto.x, ponto.y, 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(34, 211, 238, ${ponto.idade})`
          ctx.shadowBlur = 15
          ctx.shadowColor = `rgba(34, 211, 238, ${ponto.idade})`
          
          ctx.fill()
        }
      }
      rastro.current = rastro.current.filter((ponto) => ponto.idade > 0)
      animationFrameId = requestAnimationFrame(desenhar)
    }
    desenhar()
    return () => {
      window.removeEventListener('resize', ajustarTamanho)
      window.removeEventListener('mousemove', adicionarRastro)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-0"
    />
  )
}