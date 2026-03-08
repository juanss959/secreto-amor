'use client'

import { useState } from 'react'
import UploadZone from './UploadZone'
import { useHideMessage } from '@/hooks/useSteganography'
import { useImageUpload } from '@/hooks/useImageUpload'

export default function OcultarTab() {
  const { file, handleFile } = useImageUpload()
  const { hide, error, setError } = useHideMessage()
  const [message, setMessage] = useState('')
  const [filename, setFilename] = useState('')

  const handleDescargar = async () => {
    setError('')
    if (!file) { setError('Por favor elige una imagen 🌸'); return }
    if (!message.trim()) { setError('Por favor escribe un mensaje 💌'); return }
    await hide(file, message.trim(), filename)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', padding: '28px 28px 24px' }}>
      <div>
        <label style={labelStyle}>📷 Imagen</label>
        <UploadZone icon="🌸" text="Toca para elegir una foto<br/><strong>o arrastra aquí</strong>" onFile={handleFile} />
      </div>
      <div>
        <label style={labelStyle}>💬 Mensaje secreto</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Escribe aquí tu mensaje de amor..." style={textareaStyle} />
      </div>
      <div>
        <label style={labelStyle}>💾 Nombre del archivo</label>
        <input type="text" value={filename} onChange={(e) => setFilename(e.target.value)} placeholder="mi-secreto-para-ti" style={inputStyle} />
      </div>
      {error && <p style={{ color: 'var(--rose)', fontSize: '0.8rem', marginTop: '-8px' }}>{error}</p>}
      <button onClick={handleDescargar} style={btnPrimary}>💾 Descargar imagen con texto oculto</button>
    </div>
  )
}

const labelStyle: React.CSSProperties = { fontSize: '0.78rem', fontWeight: 400, color: 'var(--soft)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px', display: 'block' }
const textareaStyle: React.CSSProperties = { width: '100%', border: '1.5px solid rgba(168,212,238,0.5)', borderRadius: '14px', padding: '14px 16px', fontFamily: 'var(--font-lato), sans-serif', fontSize: '0.92rem', color: 'var(--text)', background: 'rgba(255,255,255,0.6)', resize: 'vertical', minHeight: '90px', outline: 'none' }
const inputStyle: React.CSSProperties = { width: '100%', border: '1.5px solid rgba(168,212,238,0.5)', borderRadius: '12px', padding: '12px 16px', fontFamily: 'var(--font-lato), sans-serif', fontSize: '0.92rem', color: 'var(--text)', background: 'rgba(255,255,255,0.6)', outline: 'none' }
const btnPrimary: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '15px', border: 'none', borderRadius: '14px', fontFamily: 'var(--font-playfair), serif', fontSize: '1rem', cursor: 'pointer', background: 'linear-gradient(135deg, #f4a7b9, #e07898)', color: '#fff', boxShadow: '0 4px 18px rgba(224,120,152,0.28)' }
