// src/pages/NotFoundPage.tsx

import { LuMapPinOff } from "react-icons/lu";
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-base-100 text-base-content">
      <img
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWFqbWFpZGpzdzdzem1oNWxjcmltMTg2ZjJjc29nYWdsMzVqbXFrZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2vlC9FMLSmqGs/giphy.gif"
        alt="Lost explorer gif"
        className="w-[40vw] h-auto mb-6 rounded-xl shadow-lg object-cover"
      />

      <LuMapPinOff className="w-12 h-12 text-accent mb-2" />
      
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">
        Uh-oh! You’re off the map 🌍
      </h1>

      <p className="text-base sm:text-lg max-w-md mb-6 text-gray-500">
        Looks like you've discovered an uncharted route. This page doesn’t exist — or maybe you've yet to find it!
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/discoverPlacesPage" className="btn btn-primary">
          🧭  Explore Places
        </Link>
        <Link to="/" className="btn btn-outline">
          <FaArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
