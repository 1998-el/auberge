'use client'
import { useState } from 'react'
import { Calendar } from './ui/calendar'
import Button from './ui/button'
import { DateRange } from 'react-day-picker'

export default function ReservationForm() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 2),
  })
  const [guests, setGuests] = useState(1)
  const [roomType, setRoomType] = useState('standard')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Ici vous ajouteriez la logique de soumission à votre API
    console.log({ date, guests, roomType })
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Réserver une chambre</h2>
            <p className="text-gray-600">Découvrez notre auberge charmante</p>
          </div>
          <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
            À partir de 89€/nuit
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Dates</label>
            <Calendar
              mode="range"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={{ before: new Date() }}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Type de chambre</label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'standard', name: 'Standard', price: '89€' },
                { id: 'deluxe', name: 'Deluxe', price: '129€' },
                { id: 'suite', name: 'Suite', price: '199€' },
                { id: 'family', name: 'Familiale', price: '159€' },
              ].map((room) => (
                <div
                  key={room.id}
                  onClick={() => setRoomType(room.id)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    roomType === room.id ? 'border-amber-500 bg-amber-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium">{room.name}</div>
                  <div className="text-sm text-gray-600">{room.price}/nuit</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
              Voyageurs
            </label>
            <div className="flex items-center border rounded-lg overflow-hidden w-32">
              <button
                type="button"
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200"
              >
                -
              </button>
              <div className="flex-1 text-center px-3 py-2">{guests}</div>
              <button
                type="button"
                onClick={() => setGuests(guests + 1)}
                className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
            disabled={isSubmitting || !date?.from || !date?.to}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Traitement...
              </span>
            ) : (
              'Réserver maintenant'
            )}
          </Button>
        </form>

        <div className="mt-6 flex items-center text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Annulation gratuite jusqu&apos;&agrave; 24h avant
        </div>
      </div>
    </div>
  )
}

function addDays(date: Date, days: number) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}