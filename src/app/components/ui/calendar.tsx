'use client'

import * as React from "react"
import { useState } from "react"
import { Calendar } from "react-day-picker"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { cn } from "../../../lib/utils"

interface DateSelectorProps {
  onDatesChange: (arrival: Date | undefined, departure: Date | undefined) => void
}

export default function DateSelector({ onDatesChange }: DateSelectorProps) {
  const [arrivalDate, setArrivalDate] = useState<Date | undefined>()
  const [departureDate, setDepartureDate] = useState<Date | undefined>()
  const [showArrivalCalendar, setShowArrivalCalendar] = useState(false)
  const [showDepartureCalendar, setShowDepartureCalendar] = useState(false)

  const handleArrivalSelect = (date: Date | undefined) => {
    setArrivalDate(date)
    setShowArrivalCalendar(false)
    
    // Si une date de départ est déjà sélectionnée et qu'elle est avant la nouvelle date d'arrivée
    if (date && departureDate && date > departureDate) {
      setDepartureDate(undefined)
      onDatesChange(date, undefined)
    } else {
      onDatesChange(date, departureDate)
    }
  }

  const handleDepartureSelect = (date: Date | undefined) => {
    setDepartureDate(date)
    setShowDepartureCalendar(false)
    
    // Si une date d'arrivée est déjà sélectionnée et qu'elle est après la nouvelle date de départ
    if (date && arrivalDate && date < arrivalDate) {
      setArrivalDate(undefined)
      onDatesChange(undefined, date)
    } else {
      onDatesChange(arrivalDate, date)
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sélecteur de date d'arrivée */}
        <div className="relative">
          <label htmlFor="arrival-date" className="block text-sm font-medium text-gray-700 mb-1">
            Date d'arrivée
          </label>
          <button
            type="button"
            id="arrival-date"
            onClick={() => {
              setShowArrivalCalendar(!showArrivalCalendar)
              setShowDepartureCalendar(false)
            }}
            className={cn(
              "w-full text-left px-3 py-2 border rounded-md shadow-sm",
              "bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              "text-sm transition-colors"
            )}
          >
            {arrivalDate ? (
              format(arrivalDate, "dd MMMM yyyy", { locale: fr })
            ) : (
              <span className="text-gray-400">Sélectionner une date</span>
            )}
          </button>
          
          {showArrivalCalendar && (
            <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
              <Calendar
                mode="single"
                selected={arrivalDate}
                onSelect={handleArrivalSelect}
                disabled={{ before: new Date() }}
                locale={fr}
                classNames={{
                  months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                  month: "space-y-4",
                  caption: "flex justify-center pt-1 relative items-center",
                  caption_label: "text-sm font-medium text-gray-900",
                  nav: "space-x-1 flex items-center",
                  nav_button: cn(
                    "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                    "inline-flex items-center justify-center rounded-md text-sm transition-colors"
                  ),
                  table: "w-full border-collapse space-y-1",
                  head_row: "flex",
                  head_cell: "text-gray-500 rounded-md w-9 font-normal text-[0.8rem]",
                  row: "flex w-full mt-2",
                  cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-gray-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  day: cn(
                    "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                    "inline-flex items-center justify-center rounded-md text-sm transition-colors",
                    "hover:bg-gray-100"
                  ),
                  day_selected: "bg-gray-900 text-white hover:bg-gray-800 focus:bg-gray-900",
                  day_today: "bg-gray-100 text-gray-900",
                  day_outside: "text-gray-400 opacity-50",
                  day_disabled: "text-gray-300 opacity-40",
                  day_range_middle: "aria-selected:bg-gray-100 aria-selected:text-gray-900",
                  day_hidden: "invisible",
                }}
              />
            </div>
          )}
        </div>

        {/* Sélecteur de date de départ */}
        <div className="relative">
          <label htmlFor="departure-date" className="block text-sm font-medium text-gray-700 mb-1">
            Date de départ
          </label>
          <button
            type="button"
            id="departure-date"
            onClick={() => {
              setShowDepartureCalendar(!showDepartureCalendar)
              setShowArrivalCalendar(false)
            }}
            className={cn(
              "w-full text-left px-3 py-2 border rounded-md shadow-sm",
              "bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              "text-sm transition-colors",
              { "opacity-60": !arrivalDate }
            )}
            disabled={!arrivalDate}
          >
            {departureDate ? (
              format(departureDate, "dd MMMM yyyy", { locale: fr })
            ) : (
              <span className="text-gray-400">
                {arrivalDate ? "Sélectionner une date" : "Sélectionnez d'abord la date d'arrivée"}
              </span>
            )}
          </button>
          
          {showDepartureCalendar && (
            <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
              <Calendar
                mode="single"
                selected={departureDate}
                onSelect={handleDepartureSelect}
                disabled={{ 
                  before: arrivalDate ? new Date(arrivalDate.getTime() + 24 * 60 * 60 * 1000) : new Date()
                }}
                locale={fr}
                classNames={{
                  months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                  month: "space-y-4",
                  caption: "flex justify-center pt-1 relative items-center",
                  caption_label: "text-sm font-medium text-gray-900",
                  nav: "space-x-1 flex items-center",
                  nav_button: cn(
                    "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                    "inline-flex items-center justify-center rounded-md text-sm transition-colors"
                  ),
                  table: "w-full border-collapse space-y-1",
                  head_row: "flex",
                  head_cell: "text-gray-500 rounded-md w-9 font-normal text-[0.8rem]",
                  row: "flex w-full mt-2",
                  cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-gray-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  day: cn(
                    "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                    "inline-flex items-center justify-center rounded-md text-sm transition-colors",
                    "hover:bg-gray-100"
                  ),
                  day_selected: "bg-gray-900 text-white hover:bg-gray-800 focus:bg-gray-900",
                  day_today: "bg-gray-100 text-gray-900",
                  day_outside: "text-gray-400 opacity-50",
                  day_disabled: "text-gray-300 opacity-40",
                  day_range_middle: "aria-selected:bg-gray-100 aria-selected:text-gray-900",
                  day_hidden: "invisible",
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Affichage de la durée du séjour */}
      {arrivalDate && departureDate && (
        <div className="bg-blue-50 border border-blue-200 rounded-md p-3 text-sm text-blue-800">
          Durée du séjour: {Math.ceil((departureDate.getTime() - arrivalDate.getTime()) / (1000 * 60 * 60 * 24))} nuit(s)
        </div>
      )}
    </div>
  )
}