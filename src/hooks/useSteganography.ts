import { useState } from 'react'
import { encodeMessage, decodeMessage } from '@/services/steganography'

export function useHideMessage() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const hide = (file: File, message: string, filename: string) => {
    setError('')
    setLoading(true)
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement('canvas')
          canvas.width = img.width
          canvas.height = img.height
          const ctx = canvas.getContext('2d')!
          ctx.drawImage(img, 0, 0)
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
          try {
            encodeMessage(imageData, message)
            ctx.putImageData(imageData, 0, 0)
            const name = filename.trim() || 'secreto-de-amor'
            const link = document.createElement('a')
            link.download = name + '.png'
            link.href = canvas.toDataURL('image/png')
            link.click()
            setLoading(false)
            resolve()
          } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : 'Error al ocultar'
            setError(msg)
            setLoading(false)
            reject(msg)
          }
        }
        img.src = e.target?.result as string
      }
      reader.readAsDataURL(file)
    })
  }

  return { hide, error, loading, setError }
}

export function useRevealMessage() {
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const reveal = (file: File) => {
    setError('')
    setMessage(null)
    setLoading(true)
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')!
        ctx.drawImage(img, 0, 0)
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const result = decodeMessage(imageData)
        setLoading(false)
        if (result) {
          setMessage(result)
        } else {
          setError('🔍 No encontré ningún mensaje oculto en esta imagen.')
        }
      }
      img.src = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }

  return { reveal, message, error, loading }
}
