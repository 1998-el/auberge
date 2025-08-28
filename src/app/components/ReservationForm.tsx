'use client'
import { useState } from 'react'
import Button from './ui/button'
import { addDays, format } from 'date-fns'

export default function ReservationForm() {
  const [arrivalDate, setArrivalDate] = useState<Date | undefined>(new Date())
  const [departureDate, setDepartureDate] = useState<Date | undefined>(addDays(new Date(), 1))
  const [guests, setGuests] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showArrivalCalendar, setShowArrivalCalendar] = useState(false)
  const [showDepartureCalendar, setShowDepartureCalendar] = useState(false)

  const handleDateChange = (type: 'arrival' | 'departure', date: Date | undefined) => {
    if (type === 'arrival') {
      setArrivalDate(date)
      setShowArrivalCalendar(false)
      
      // Si la date de départ est antérieure à la nouvelle date d'arrivée
      if (date && departureDate && date > departureDate) {
        setDepartureDate(addDays(date, 1))
      }
    } else {
      setDepartureDate(date)
      setShowDepartureCalendar(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!arrivalDate || !departureDate) return
    
    setIsSubmitting(true)

    const formatDate = (date: Date) => format(date, "dd MMMM yyyy")

    const message = `Bonjour! Je souhaite réserver au motel :
📅 Séjour : ${formatDate(arrivalDate)} → ${formatDate(departureDate)}
👥 Voyageurs : ${guests}
Merci de me confirmer la disponibilité.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/237690000000?text=${encodedMessage}`
    window.open(whatsappLink, '_blank')

    setIsSubmitting(false)
  }

  // Calcul du nombre de nuits
  const numberOfNights = arrivalDate && departureDate 
    ? Math.ceil((departureDate.getTime() - arrivalDate.getTime()) / (1000 * 60 * 60 * 24))
    : 0

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-6  p-6 text-black"
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center">Réserver votre séjour</h2>
      
      {/* Sélecteurs de dates style GitHub */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Date d'arrivée */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Arrivée</label>
          <button
            type="button"
            onClick={() => {
              setShowArrivalCalendar(!showArrivalCalendar)
              setShowDepartureCalendar(false)
            }}
            className="w-full text-left px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm transition-colors hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {arrivalDate ? (
              format(arrivalDate, "dd MMM yyyy")
            ) : (
              <span className="text-gray-400">Sélectionner une date</span>
            )}
          </button>
          
          {showArrivalCalendar && (
            <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-md shadow-lg p-2">
              <Calendar
                selected={arrivalDate}
                onSelect={(date) => handleDateChange('arrival', date)}
                disabled={{ before: new Date() }}
                className="rounded-md"
              />
            </div>
          )}
        </div>

        {/* Date de départ */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Départ</label>
          <button
            type="button"
            onClick={() => {
              setShowDepartureCalendar(!showDepartureCalendar)
              setShowArrivalCalendar(false)
            }}
            className="w-full text-left px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm transition-colors hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={!arrivalDate}
          >
            {departureDate ? (
              format(departureDate, "dd MMM yyyy")
            ) : (
              <span className="text-gray-400">
                {arrivalDate ? "Sélectionner une date" : "Choisir arrivée d'abord"}
              </span>
            )}
          </button>
          
          {showDepartureCalendar && (
            <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-md shadow-lg p-2">
              <Calendar
                selected={departureDate}
                onSelect={(date) => handleDateChange('departure', date)}
                disabled={{ 
                  before: arrivalDate ? new Date(arrivalDate.getTime() + 24 * 60 * 60 * 1000) : new Date()
                }}
                className="rounded-md"
              />
            </div>
          )}
        </div>
      </div>

      {/* Affichage de la durée du séjour */}
      {arrivalDate && departureDate && (
        <div className="bg-blue-50 border border-blue-200 rounded-md p-3 text-sm text-blue-800">
          Durée du séjour: {numberOfNights} nuit{numberOfNights > 1 ? 's' : ''}
        </div>
      )}

      {/* Nombre de voyageurs */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Voyageurs</label>
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-32 bg-white">
          <button
            type="button"
            onClick={() => setGuests(Math.max(1, guests - 1))}
            className="px-3 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
            disabled={guests <= 1}
          >
            -
          </button>
          <div className="flex-1 text-center text-gray-900 font-medium py-2">
            {guests}
          </div>
          <button
            type="button"
            onClick={() => setGuests(guests + 1)}
            className="px-3 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
            disabled={guests >= 10}
          >
            +
          </button>
        </div>
      </div>

      {/* Bouton de soumission */}
      <Button
        type="submit"
        className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md transition-colors"
        disabled={isSubmitting || !arrivalDate || !departureDate}
      >
        {isSubmitting ? 'Envoi...' : 'Réserver via WhatsApp'}
      </Button>

      {/* Information d'annulation */}
        <p className="text-xs text-gray-500 text-center">
        Annulation gratuite jusqu&apos;à 24h avant l&apos;arrivée.
        </p>
    </form>
  )
}

// Composant Calendar simplifié (version minimaliste)
function Calendar({ 
  selected, 
  onSelect, 
  disabled,
  className 
}: {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  disabled?: { before?: Date };
  className?: string;
}) {
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i)

  const isDisabled = (day: number) => {
    const date = new Date(currentYear, currentMonth, day)
    return disabled?.before && date < disabled.before
  }

  const isSelected = (day: number) => {
    if (!selected) return false
    return selected.getDate() === day && 
           selected.getMonth() === currentMonth && 
           selected.getFullYear() === currentYear
  }

  const handleDayClick = (day: number) => {
    if (isDisabled(day)) return
    const date = new Date(currentYear, currentMonth, day)
    onSelect(date)
  }

  const monthName = new Date(currentYear, currentMonth, 1).toLocaleDateString('fr-FR', { month: 'long' })

  return (
    <div className={className}>
      <div className="text-center font-medium text-sm text-gray-900 mb-2 capitalize">
        {monthName} {currentYear}
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-xs text-gray-500">
        {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(day => (
          <div key={day} className="text-center py-1">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {emptyDays.map((_, index) => (
          <div key={`empty-${index}`} className="h-8"></div>
        ))}
        
        {days.map(day => {
          const disabled = isDisabled(day)
          const selected = isSelected(day)
          
          return (
            <button
              key={day}
              type="button"
              onClick={() => handleDayClick(day)}
              disabled={disabled}
              className={`h-8 w-8 flex items-center justify-center text-sm rounded transition-colors
                ${disabled ? 'text-gray-300 cursor-not-allowed' : 
                  selected ? 'bg-gray-900 text-white' : 
                  'text-gray-700 hover:bg-gray-100'}`}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}