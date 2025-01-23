type ClassValue = string | number | boolean | undefined | null | { [key: string]: boolean }
type ClassArray = ClassValue[]

export function cn(...inputs: ClassArray): string {
  return inputs.filter(Boolean).join(' ')
} 