'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBanner = () => {
  const [dates, setDates] = useState({
    arrival: '',
    departure: '',
    guests: 2,
  });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/reservation?arrival=${dates.arrival}&departure=${dates.departure}&guests=${dates.guests}`
    );
  };

  return (
    <section className="relative h-[500px] bg-gray-900">
      <div className="absolute inset-0 bg-[url('/hotel/hotel-room.jpg')] bg-cover bg-center opacity-50"></div>
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">
                Trouvez votre séjour parfait
              </h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Arrivée
                  </label>
                  <input
                    type="date"
                    value={dates.arrival}
                    onChange={(e) =>
                      setDates({ ...dates, arrival: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Départ
                  </label>
                  <input
                    type="date"
                    value={dates.departure}
                    onChange={(e) =>
                      setDates({ ...dates, departure: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Voyageurs
                  </label>
                  <select
                    value={dates.guests}
                    onChange={(e) =>
                      setDates({ ...dates, guests: parseInt(e.target.value) })
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num > 1 ? 'personnes' : 'personne'}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Vérifier disponibilité
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBanner;