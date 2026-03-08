# 💌 Secreto de Amor

App de esteganografía para esconder mensajes secretos en imágenes.

## 🚀 Cómo arrancar

```bash
npm install
npm run dev
```
Luego abre: `http://localhost:3000`

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── globals.css       ← Importa variables y animaciones
│   ├── layout.tsx        ← Layout principal (fuentes, metadata)
│   └── page.tsx          ← Página principal
├── components/
│   ├── CouplePhoto.tsx   ← Foto de la pareja + iniciales J♡L
│   ├── FloatingInitials.tsx ← J, L, J♡L flotando por la pantalla
│   ├── OcultarTab.tsx    ← Pestaña ocultar mensaje
│   ├── RevelarTab.tsx    ← Pestaña revelar mensaje
│   └── UploadZone.tsx    ← Componente subir imagen
├── hooks/
│   ├── useImageUpload.ts ← Hook para manejar subida de imágenes
│   └── useSteganography.ts ← Hooks ocultar/revelar mensaje
├── services/
│   └── steganography.ts  ← Lógica LSB pura (sin React)
└── styles/
    ├── animations.css    ← Todas las animaciones
    └── variables.css     ← Variables de color CSS
```

---

## 🖼️ Cambiar la foto de la pareja

1. Copia tu foto a `/public/images/` (ej: `mi-foto.jpg`)
2. Abre `src/components/CouplePhoto.tsx`
3. Cambia esta línea:
   ```tsx
   src="/images/couple.png"
   ```
   por:
   ```tsx
   src="/images/mi-foto.jpg"
   ```

---

## 🎨 Personalizar colores

Edita `src/styles/variables.css`:
```css
--pink: #f4a7b9;   ← Rosa principal
--rose: #e07898;   ← Rosa oscuro
--navy: #2c5f82;   ← Azul texto
--soft: #7a9bbf;   ← Azul suave
```

---

## ⚠️ Importante

Siempre compartir imágenes en **PNG**, no JPEG.  
El JPEG comprime los píxeles y destruye el mensaje oculto.
