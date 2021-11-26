import React from 'react'

export default function CheckOnlyCaption({ caption }) {
    return (
        <div>
              <div class="flex items-start items-center mb-4">
      <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" />
      <label for="checkbox-2" class="text-sm ml-3 font-medium text-gray-900">{ caption}</label>
  </div>
        </div>
    )
}
