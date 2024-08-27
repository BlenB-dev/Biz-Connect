import React from 'react';
import Sliderimage from '../Sliderimage';
import InvestorProfile from './InvestorProfile';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// Import other components here

function InvestorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Sliderimage Component */}
      <div className="ml-auto">
        <Sliderimage />
      </div>
       <InvestorProfile/>
       

       <form class="flex w-[910px] ml-[-100px] mt-10 ">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search any Startups..." required />
    </div>
    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
    </button>
</form>
<div className="mt-[80px] ml-[-80px]">
  <Stack
    spacing={2}
    direction="row"
    style={{ fontFamily: 'Poppins, sans-serif' }}
  >
    <Button
      variant="text"
      style={{
        fontSize: 17,
        fontFamily: 'Roboto, sans-serif',
        textTransform: 'none' // Explicitly setting text transform to none
      }}
    >
      Recently Searched
    </Button>
    <Button
      variant="text"
      style={{
        fontSize: 17,
        fontFamily: 'Roboto, sans-serif',
        textTransform: 'none' // Explicitly setting text transform to none
      }}
    >
      Recommendation
    </Button>
  </Stack>
</div>

<hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700 mt-[10px] ml-[-80px] w-[890px]"></hr>
  <div
    class="inline-block h-[1000px] w-0.5 bg-neutral-100 dark:bg-white/10 ml-[990px] mt-[-110px]">
  </div>


   

  <div className="space-y-8 relative" style={{ marginLeft: -97, marginTop: -900 }}>
  <div className="bg-gray-100 p-4 rounded-lg shadow-md w-[900px]" style={{ height: 200 }}>
    <h2 className="text-xl font-semibold">Component 1</h2>
    <p>This is a placeholder for another component.</p>
  </div>

  <div className="bg-gray-100 p-4 rounded-lg shadow-md w-[900px]" style={{ height: 200 }}>
    <h2 className="text-xl font-semibold">Component 2</h2>
    <p>This is a placeholder for another component.</p>
  </div>

  <div className="bg-gray-100 p-4 rounded-lg shadow-md w-[900px]" style={{ height: 200 }}>
    <h2 className="text-xl font-semibold">Component 3</h2>
    <p>This is a placeholder for another component.</p>
  </div>
</div>

      {/* Add more components as needed */}
    </div>
    
  );
}

export default InvestorPage;
