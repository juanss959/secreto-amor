'use client'

import { useState } from 'react'
import CouplePhoto from '@/components/CouplePhoto'
import OcultarTab from '@/components/OcultarTab'
import RevelarTab from '@/components/RevelarTab'

export default function Home() {
  const [tab, setTab] = useState<'ocultar' | 'revelar'>('ocultar')

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #daeef9 0%, #c4def5 30%, #d6eaf8 60%, #bbe0f5 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflowX: 'hidden',
    }}>
     

      {/* Title */}
      <h1 style={{
        fontFamily: 'var(--font-playfair), serif',
        fontStyle: 'italic',
        fontSize: 'clamp(1.6rem, 5vw, 2.6rem)',
        color: 'var(--navy)',
        textAlign: 'center',
        marginBottom: '4px',
        position: 'relative',
        zIndex: 1,
        textShadow: '0 2px 12px rgba(44,95,130,0.13)',
      }}>
        💌 Secreto de Amor
      </h1>

      <p style={{
        color: 'var(--soft)',
        fontSize: '0.85rem',
        textAlign: 'center',
        marginBottom: '18px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        position: 'relative',
        zIndex: 1,
      }}>
        Esconde mensajes en tus fotos
      </p>

      {/* Couple Photo + Initials */}
      <CouplePhoto />

      {/* Card */}
      <div style={{
        background: 'var(--card)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderRadius: '28px',
        border: '1.5px solid rgba(255,255,255,0.7)',
        boxShadow: '0 8px 40px rgba(44,95,130,0.13), 0 2px 8px rgba(200,230,245,0.5)',
        width: '100%',
        maxWidth: '480px',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Tabs */}
        <div style={{ display: 'flex', borderBottom: '1.5px solid rgba(168,212,238,0.4)' }}>
          {(['ocultar', 'revelar'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                flex: 1,
                padding: '18px 10px 14px',
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-playfair), serif',
                fontSize: '1rem',
                color: tab === t ? 'var(--navy)' : 'var(--soft)',
                fontWeight: tab === t ? 700 : 400,
                cursor: 'pointer',
                position: 'relative',
                letterSpacing: '0.04em',
                transition: 'all 0.25s',
              }}
            >
              {t === 'ocultar' ? '🔒 Ocultar' : '💖 Revelar'}
              {tab === t && (
                <span style={{
                  position: 'absolute',
                  bottom: '-1.5px',
                  left: '20%',
                  right: '20%',
                  height: '2.5px',
                  borderRadius: '2px',
                  background: 'linear-gradient(90deg, #f4a7b9, #e07898)',
                  display: 'block',
                }} />
              )}
            </button>
          ))}
        </div>

        {tab === 'ocultar' ? <OcultarTab /> : <RevelarTab />}
      </div>
    </main>
  )
}
