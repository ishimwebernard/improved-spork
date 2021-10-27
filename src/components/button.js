import React from 'react'

export default function Button({text, background}) {
    return (
        <div className={(background === "transparent") ? "font-open-regular rounded-full py-3 px-6 text-center w-full border border-gray-900" : (background === "gradient") ? "font-open-regular rounded-full py-3 px-6 text-center w-full green-bluegrad":"font-open-regular rounded-full py-3 px-6 text-center w-full bg-blue-800 text-gray-50"}>
            {text}
        </div>
    )
}
