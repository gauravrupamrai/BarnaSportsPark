import React, { useState } from 'react'

const Court = ({ court, slots, bookCourt }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedSlot) {
      bookCourt(court, selectedSlot);
    }
  }
  return (
    <div className="bg-white shadow-md rounded p-6 mb-4">
      <h2 className="text-2xl font-bold mb-4">Court: {court}</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 gap-4">
          {slots.map((slot, i) => (
            <label key={i} className="flex items-center">
              <input
                type="radio"
                name="slot"
                value={slot.time}
                disabled={!slot.available}
                onChange={() => setSelectedSlot(slot.time)}
                className="form-radio h-5 w-5 text-indigo-600"
              />
              <span className={`ml-2 ${!slot.available && 'line-through text-gray-400'}`}>
                {slot.time}
              </span>
            </label>
          ))}
        </div>
        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Book Court
        </button>
      </form>
    </div>
  )
}

export default Court
