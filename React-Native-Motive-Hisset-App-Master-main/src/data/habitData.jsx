// constants.js
export const frequencyOptions = [
  'Her Gün',
  'Hafta İçi',
  'Hafta Sonu',
  'Pazartesi',
  'Salı',
  'Çarşamba',
  'Perşembe',
  'Cuma',
  'Cumartesi',
  'Pazar'
]

export const unitOptions = ['Adet', 'Saat', 'Dakika', 'Gram', 'Kalori']

export const targetTypeOptions = ['Azaltma', 'Bırakma', 'Sınırlama']

export const days = [
  { id: 1, name: 'Pzt' },
  { id: 2, name: 'Sal' },
  { id: 3, name: 'Çar' },
  { id: 4, name: 'Per' },
  { id: 5, name: 'Cum' },
  { id: 6, name: 'Cmt' },
  { id: 0, name: 'Paz' }
]

export const generateTimeOptions = () => {
  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, '0')
  )

  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, '0')
  )

  return { hours, minutes }
}
