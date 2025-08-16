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
    console.log({ date, guests, roomType })
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2 flex w-full border">
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">Dates</label>
        <Calendar
          mode="range"
          selected={date}
          onSelect={setDate}
          className="rounded-md border p-2 bg-white"
          disabled={{ before: new Date() }}
          numberOfMonths={1}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Type de chambre</label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { id: 'standard', name: 'Standard', price: '15k FCFA' },
            { id: 'deluxe', name: 'Deluxe', price: '25k FCFA' },
            { id: 'suite', name: 'Suite', price: '45k FCFA' },
            { id: 'family', name: 'Familiale', price: '35k FCFA' },
          ].map((room) => (
            <div
              key={room.id}
              onClick={() => setRoomType(room.id)}
              className={`p-3 border rounded-md cursor-pointer transition-all text-sm ${
                roomType === room.id ? 'border-amber-500 bg-amber-50' : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="font-semibold text-gray-800">{room.name}</div>
              <div className="text-xs text-gray-600">{room.price}/nuit</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
          Voyageurs
        </label>
        <div className="flex items-center border rounded-md overflow-hidden w-32 bg-white">
          <button
            type="button"
            onClick={() => setGuests(Math.max(1, guests - 1))}
            className="px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            -
          </button>
          <div className="flex-1 text-center px-3 py-2 text-gray-800 font-medium">{guests}</div>
          <button
            type="button"
            onClick={() => setGuests(guests + 1)}
            className="px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            +
          </button>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-transform transform hover:scale-105 shadow-lg"
        disabled={isSubmitting || !date?.from || !date?.to}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Vérification...
          </span>
        ) : (
          'Réserver maintenant'
        )}
      </Button>

      <div className="mt-4 flex items-center justify-center text-xs text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Annulation gratuite jusqu&apos;à 24h avant l&apos;arrivée.
      </div>
    </form>
  )
}

function addDays(date: Date, days: number) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}