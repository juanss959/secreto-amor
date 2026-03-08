import Image from 'next/image'

export default function CouplePhoto() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '22px',
      position: 'relative',
      zIndex: 1,
    }}>
      {/* Photo frame */}
      <div style={{
        width: '140px',
        height: '140px',
        borderRadius: '16px',
        border: '3px solid rgba(255,255,255,0.85)',
        boxShadow: '0 4px 20px rgba(224,120,152,0.3), 0 0 0 5px rgba(244,167,185,0.2)',
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(135deg, #f4a7b9, #a8d4ee)',
      }}>
        <Image
          src="/images/couple.png"
          alt="Juan y Luna"
          fill
          style={{ objectFit: 'cover' }}
          // 👆 Cambia el src por la ruta de tu foto real
          // Por ejemplo: src="/images/mi-foto.jpg"
        />
      </div>

      {/* Initials */}
      <div style={{
        fontFamily: 'var(--font-playfair), serif',
        fontStyle: 'italic',
        fontSize: '1rem',
        color: 'var(--navy)',
        letterSpacing: '0.15em',
        textShadow: '0 1px 8px rgba(44,95,130,0.15)',
      }}>
        J <span style={{ color: 'var(--rose)', fontSize: '1.1rem' }}>♡</span> L
      </div>
    </div>
  )
}
