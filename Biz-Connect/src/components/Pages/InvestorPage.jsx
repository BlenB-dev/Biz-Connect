import React, {useState} from 'react';
import Sliderimage from '../Sliderimage';
import InvestorProfile from './InvestorProfile';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// Import other components here

// Example list of startups
const exampleStartups = [
  { id: 1, name: 'Tech Innovators', industry: 'Technology', description: 'A tech startup focusing on AI solutions.' },
  { id: 2, name: 'HealthFirst', industry: 'Healthcare', description: 'Innovative healthcare solutions.' },
  { id: 3, name: 'AgroPlus', industry: 'Agriculture', description: 'Sustainable farming technologies.' },
  // Add more startups as needed
];

function InvestorPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  // Handle changes in the search input
  const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
  };

  // Handle changes in the filter dropdown
  const handleFilterChange = (event) => {
      setFilter(event.target.value);
  };

  // Filter and search the list of startups
  const filteredStartups = exampleStartups.filter((startup) => {
      const matchesSearchTerm = startup.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filter ? startup.industry.toLowerCase() === filter.toLowerCase() : true;
      return matchesSearchTerm && matchesFilter;
  });

  return (
      <div className="container mx-auto px-4 py-8">
          {/* Sliderimage Component */}
          <div className="ml-auto">
              <Sliderimage />
          </div>

          <InvestorProfile />

          {/* Search and Filter Section */}
          <div className="mt-8">
              <input
                  type="text"
                  placeholder="Search Startups..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />

              <select
                  value={filter}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-2 mt-4 border border-gray-300 rounded-md"
              >
                  <option value="">All Categories</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Agriculture">Agriculture</option>
                  {/* Add more options as needed */}
              </select>
          </div>

          {/* Display filtered startups */}
          <section id="featured-startups" className="section-featured mt-8">
              <h2>Featured Startups</h2>
              {filteredStartups.length > 0 ? (
                  filteredStartups.map((startup) => (
                      <div key={startup.id} className="startup-card mt-4 p-4 border rounded-md">
                          <h3>{startup.name}</h3>
                          <p>Industry: {startup.industry}</p>
                          <p>{startup.description}</p>
                      </div>
                  ))
              ) : (
                  <p>No startups found matching your criteria.</p>
              )}
          </section>
      </div>
  );
}

export default InvestorPage;