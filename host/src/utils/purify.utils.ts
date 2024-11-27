import DOMPurify from 'dompurify'

type Payload = { [key: string]: unknown } | FormData

const sanitizeObject = (obj: { [key: string]: unknown }): Record<string, unknown> => {
  const sanitizedObj: Record<string, unknown> = {}
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      sanitizedObj[key] = DOMPurify.sanitize(obj[key])
    } else if (Array.isArray(obj[key])) {
      sanitizedObj[key] = obj[key].map((item: unknown) =>
        typeof item === 'string'
          ? DOMPurify.sanitize(item)
          : sanitizeObject(item as { [key: string]: unknown })
      )
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      sanitizedObj[key] = sanitizeObject(obj[key] as { [key: string]: unknown })
    } else {
      sanitizedObj[key] = obj[key]
    }
  }
  return sanitizedObj
}

const sanitizePayload = (data: Payload): Payload => {
  if (data instanceof FormData) {
    const sanitizedFormData = new FormData()
    for (const [key, value] of data.entries()) {
      if (typeof value === 'string') {
        sanitizedFormData.append(key, DOMPurify.sanitize(value))
      } else {
        sanitizedFormData.append(key, value)
      }
    }
    return sanitizedFormData
  } else if (typeof data === 'object' && data !== null) {
    return sanitizeObject(data)
  }
  return data
}
export { sanitizeObject, sanitizePayload }
