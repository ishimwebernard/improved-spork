import React from 'react'

export default function Nav() {
    return (
        <div>
            

  <section class="relative mx-auto">
     
    <nav class="flex justify-between bg-transparen text-white w-screen">
      <div class="px-5 xl:px-12 py-6 flex w-full items-center">
        <a class="text-3xl font-bold font-heading" href="#">
         
          Logo Here.
        </a>
       
        <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><a class="hover:text-gray-200" href="#">Home</a></li>
          <li><a class="hover:text-gray-200" href="#">Catagory</a></li>
          <li><a class="hover:text-gray-200" href="#">Collections</a></li>
          <li><a class="hover:text-gray-200" href="#">Contact Us</a></li>
        </ul>
       
        <div class="hidden xl:flex items-center space-x-5 items-center">
          <a class="hover:text-gray-200" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
          </a>
         
          
          <a class="flex items-center hover:text-gray-200" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="#ddd451">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </a>
          
        </div>
      </div>
     
  
     <div className="flex ">
     <a class="navbar-burger self-center mr-6 xl:hidden" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
      </a>
      <a class="navbar-burger self-center mr-6 xl:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </a>
     </div>
    </nav>
    
  </section>
</div>
    
    )
}
