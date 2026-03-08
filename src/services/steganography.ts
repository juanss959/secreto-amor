const DELIMITER = '\u0003'

export function textToBits(text: string): string {
  const encoded = unescape(encodeURIComponent(text))
  let bits = ''
  for (let i = 0; i < encoded.length; i++) {
    bits += encoded.charCodeAt(i).toString(2).padStart(8, '0')
  }
  return bits
}

export function bitsToText(bits: string): string {
  let text = ''
  for (let i = 0; i + 7 < bits.length; i += 8) {
    text += String.fromCharCode(parseInt(bits.slice(i, i + 8), 2))
  }
  try {
    return decodeURIComponent(escape(text))
  } catch {
    return text
  }
}

export function encodeMessage(imageData: ImageData, message: string): ImageData {
  const fullMsg = message + DELIMITER
  const bits = textToBits(fullMsg)
  const data = imageData.data

  if (bits.length > (data.length / 4) * 3) {
    throw new Error('Mensaje demasiado largo para esta imagen 💌')
  }

  let bitIdx = 0
  for (let i = 0; i < data.length && bitIdx < bits.length; i++) {
    if ((i + 1) % 4 === 0) continue // skip alpha channel
    data[i] = (data[i] & 0xfe) | parseInt(bits[bitIdx])
    bitIdx++
  }
  return imageData
}

export function decodeMessage(imageData: ImageData): string | null {
  const data = imageData.data
  let bits = ''

  for (let i = 0; i < data.length; i++) {
    if ((i + 1) % 4 === 0) continue
    bits += (data[i] & 1).toString()
  }

  const text = bitsToText(bits)
  const delimIdx = text.indexOf(DELIMITER)
  if (delimIdx === -1) return null
  return text.slice(0, delimIdx)
}
