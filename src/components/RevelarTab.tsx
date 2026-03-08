'use client'

import UploadZone from './UploadZone'
import { useRevealMessage } from '@/hooks/useSteganography'
import { useImageUpload } from '@/hooks/useImageUpload'

export default function RevelarTab() {
  const { file, handleFile } = useImageUpload()
  const { reveal, message, error } = useRevealMessage()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', padding: '28px 28px 24px' }}>
      <div>
        <label style={labelStyle}>📷 Imagen con mensaje oculto</label>
        <UploadZone icon="🔍" text="Toca para elegir la foto<br/><strong>con el secreto</strong>" onFile={handleFile} />
      </div>
      {error && <p style={{ color: 'var(--rose)', fontSize: '0.8rem' }}>{error}</p>}
      <button onClick={() => file && reveal(file)} style={btnSecondary}>💖 Revelar texto de imagen</button>
      {message && (
        <div className="reveal-animate" style={revealBox}>
          <div className="hearts-pulse" style={{ fontSize: '1.4rem', letterSpacing: '4px', marginBottom: '14px' }}>💗 💝 💗 💝 💗</div>
          <div style={revealLabel}>✨ Tu mensaje secreto ✨</div>
          <div style={revealMessage}>{message}</div>
          <div style={{ fontSize: '1.2rem', marginTop: '12px' }}>🌸 💌 🌸</div>
        </div>
      )}
    </div>
  )
}

const labelStyle: React.CSSProperties = { fontSize: '0.78rem', fontWeight: 400, color: 'var(--soft)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px', display: 'block' }
const btnSecondary: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '15px', border: 'none', borderRadius: '14px', fontFamily: 'var(--font-playfair), serif', fontSize: '1rem', cursor: 'pointer', background: 'linear-gradient(135deg, #a8d4ee, #7ab8dc)', color: '#fff', boxShadow: '0 4px 18px rgba(120,180,220,0.28)' }
const revealBox: React.CSSProperties = { borderRadius: '18px', background: 'linear-gradient(135deg, rgba(244,167,185,0.18), rgba(200,230,245,0.25))', border: '1.5px solid rgba(244,167,185,0.4)', padding: '24px 20px', textAlign: 'center' }
const revealLabel: React.CSSProperties = { fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic', fontSize: '0.82rem', color: 'var(--rose)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '10px' }
const revealMessage: React.CSSProperties = { fontFamily: 'var(--font-playfair), serif', fontSize: '1.15rem', color: 'var(--navy)', lineHeight: '1.7', whiteSpace: 'pre-wrap' }
