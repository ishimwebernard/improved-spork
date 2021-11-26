import React from 'react'

export default function Toggle({caption, id}) {
    return (
        <div>
            <label for={id} class="flex items-center cursor-pointer relative mb-4">
  <input type="checkbox" id={id} class="sr-only" />
  <div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
  <span class="ml-3 text-gray-900 text-sm font-medium">{caption}</span>
</label>
        </div>
    )
}
