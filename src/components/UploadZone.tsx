'use client'

import { useRef, useState } from 'react'

interface UploadZoneProps {
  icon: string
  text: string
  onFile: (file: File) => void
}

export default function UploadZone({ icon, text, onFile }: UploadZoneProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => setPreview(e.target?.result as string)
    reader.readAsDataURL(file)
    onFile(file)
  }

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault()
        setDragging(false)
        const file = e.dataTransfer.files[0]
        if (file) handleFile(file)
      }}
      style={{
        border: `2px dashed ${dragging ? '#f4a7b9' : 'rgba(168,212,238,0.7)'}`,
        borderRadius: '16px',
        padding: '28px 16px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s',
        background: dragging ? 'rgba(244,167,185,0.08)' : 'rgba(200,230,245,0.13)',
        position: 'relative',
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleFile(file)
        }}
      />
      {preview ? (
        <img
          src={preview}
          alt="preview"
          style={{ width: '100%', borderRadius: '12px', maxHeight: '220px', objectFit: 'cover' }}
        />
      ) : (
        <>
          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{icon}</div>
          <div style={{ fontSize: '0.88rem', color: 'var(--soft)' }}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </>
      )}
    </div>
  )
}
