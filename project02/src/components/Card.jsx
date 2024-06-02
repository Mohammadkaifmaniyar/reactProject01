import React from 'react'

export default function Card({title ,description, imageUrl}) {
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={imageUrl}
        alt="image"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="mt-3 text-sm text-gray-200">
          {description}
        </p>
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
  )
}
