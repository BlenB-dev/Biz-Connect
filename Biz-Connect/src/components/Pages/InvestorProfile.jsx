import React from 'react';

const InvestorProfile = () => {
    const investor = {
        name: 'John Doe',
        bio: 'Angel investor focused on tech and healthcare.',
        preferences: {
            industries: ['Technology', 'Healthcare'],
            minInvestment: '$50,000',
            preferredStage: 'Seed to Series A',
        },
        contact: {
            email: 'john.doe@example.com',
            linkedin: 'https://www.linkedin.com/in/johndoe',
        },
    };

    return (
        <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold">{investor.name}</h2>
            <p className="mt-1 text-gray-600 text-sm">{investor.bio}</p>

            <div className="mt-4">
                <h3 className="text-md font-semibold">Preferences</h3>
                <ul className="list-disc ml-4 mt-1 text-sm">
                    <li>Industries: {investor.preferences.industries.join(', ')}</li>
                    <li>Min Investment: {investor.preferences.minInvestment}</li>
                    <li>Stage: {investor.preferences.preferredStage}</li>
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="text-md font-semibold">Contact</h3>
                <p className="text-sm">Email: <a href={`mailto:${investor.contact.email}`} className="text-blue-500">{investor.contact.email}</a></p>
                <p className="text-sm">LinkedIn: <a href={investor.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">Profile</a></p>
            </div>
        </div>
    );
};

export default InvestorProfile;