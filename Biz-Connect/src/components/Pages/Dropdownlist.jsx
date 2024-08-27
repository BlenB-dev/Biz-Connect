import React, { useRef, useEffect } from 'react';

function Dropdownlist() {
  const dropdownButtonRef = useRef(null);
  const dropdownMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownButtonRef.current &&
        dropdownMenuRef.current &&
        !dropdownButtonRef.current.contains(event.target) &&
        !dropdownMenuRef.current.contains(event.target)
      ) {
        dropdownMenuRef.current.classList.add('hidden');
      }
    };

    const handleDropdownToggle = () => {
      dropdownMenuRef.current.classList.toggle('hidden');
    };

    const button = dropdownButtonRef.current;
    button.addEventListener('click', handleDropdownToggle);
    document.addEventListener('click', handleClickOutside);

    // Cleanup listeners on component unmount
    return () => {
      button.removeEventListener('click', handleDropdownToggle);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative ml-[30px] p-1 border border-gray-110 rounded-lg inline-block">
      <button
        id="dropdownCheckboxButton"
        ref={dropdownButtonRef}
        className="text-black w-[200px] bg-white-700 focus:outline-none font-medium rounded-lg text-[17px] px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600"
        type="button"
      >
        Sector
        <svg
          className="w-6 h-1.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
    
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownDefaultCheckbox"
        ref={dropdownMenuRef}
        className="absolute z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
        style={{ top: '100%', left: '0' }}
      >
        <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-1"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label htmlFor="checkbox-item-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Default checkbox
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-2"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label htmlFor="checkbox-item-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Sector
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-3"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label htmlFor="checkbox-item-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Default checkbox
              </label>
            </div>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Dropdownlist;
