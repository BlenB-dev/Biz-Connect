import React, { useState } from 'react';
import Sliderimage from '../Sliderimage';
import InvestorProfile from './InvestorProfile';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

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
        <div className="container mx-auto px-4 py-8 relative">
            <div className="ml-auto">
                <Sliderimage />
            </div>

            {/* Adjusted Position for InvestorProfile Component */}
            <div className="absolute top-2 right-2 w-1/4">
                <InvestorProfile />
            </div>

            {/* Adjusted Search and Filter Section */}
            <div className="mt-8 pr-28"> {/* Added padding-right to give more space for the profile card */}
                <input
                    type="text"
                    placeholder="Search Startups..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-3/4 px-4 py-2 border border-gray-300 rounded-md"
                />

                <select
                    value={filter}
                    onChange={handleFilterChange}
                    className="w-3/4 px-4 py-2 mt-4 border border-gray-300 rounded-md"
                >
                    <option value="">All Categories</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Agriculture">Agriculture</option>
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