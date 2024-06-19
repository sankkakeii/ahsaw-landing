import React from 'react';

export default function Roadmap() {
    const roadmapData = [
        {
            milestone: 'Rescue 50 Dogs',
            timeline: 'Q1 2024',
            details: [
                'Expand project team and expand reach',
                'Partner with local animal welfare organizations',
                'Revamp rescue operations',
                'Rescue and provide medical care for dogs rescued'
            ]
        },
        {
            milestone: 'Research and Planning',
            timeline: 'Q2 2024',
            details: [
                'Conduct market research',
                'Develop project plan',
                'Set budget and timeline',
                'Identify potential donors and sponsors',
                'Plan outreach and awareness campaigns'
            ]
        },
        {
            milestone: 'Acquire Land',
            timeline: 'Q3 2024',
            details: [
                'Identify suitable locations',
                'Conduct environmental and feasibility studies',
                'Negotiate and finalize purchase',
                'Complete legal requirements',
                'Secure land title and permits'
            ]
        },
        {
            milestone: 'Development Phase',
            timeline: 'Q4 2024 - Q1 2025',
            details: [
                'Design initial project architecture',
                'Start development of support infrastructure',
                'Perform initial testing of systems and processes',
                'Implement feedback from stakeholders and initial testing',
                'Recruit and train additional team members'
            ]
        },
        {
            milestone: 'Build Animal Shelter',
            timeline: 'Q2-Q3 2025',
            details: [
                'Design shelter layout',
                'Obtain necessary construction permits',
                'Hire contractors and construction team',
                'Begin construction of the shelter',
                'Install utilities and security systems',
                'Ensure compliance with animal welfare standards'
            ]
        },
        {
            milestone: 'Testing and Refinement',
            timeline: 'Q4 2025',
            details: [
                'Conduct comprehensive testing of shelter facilities',
                'Train staff in shelter operations',
                'Refine processes based on feedback from testing phase',
                'Prepare for launch of shelter operations',
                'Develop protocols for animal intake, care, and adoption'
            ]
        },
        {
            milestone: 'Launch',
            timeline: 'Q1 2026',
            details: [
                'Final preparations for shelter opening',
                'Launch marketing and promotion campaigns',
                'Official shelter opening event',
                'Begin full-scale rescue and care operations',
                'Initiate community outreach and education programs'
            ]
        },
        {
            milestone: 'Post-Launch',
            timeline: 'Q2-Q4 2026',
            details: [
                'Monitor shelter operations and animal welfare',
                'Gather user feedback and make necessary adjustments',
                'Plan for updates and improvements to facilities and processes',
                'Evaluate project impact and report to stakeholders',
                'Expand partnerships and fundraising efforts'
            ]
        },
    ];


    return (
        <div className="relative flex flex-col items-center px-5 md:px-10 py-10 md:py-16">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-10">Milestones</h1>
            <div className="relative w-full max-w-4xl">
                {/* Central line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-300 hidden sm:block"></div>

                {roadmapData.map((item, index) => (
                    <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center mb-10`}>
                        {/* Connecting line */}
                        <div className="w-full md:w-1/2 flex justify-center relative">
                            <div className="w-0 h-full border-l-2 border-gray-300 absolute left-1/2 transform -translate-x-1/2 md:transform-none"></div>
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className={`flex flex-col items-center md:items-${index % 2 === 0 ? 'end' : 'start'} text-center md:text-${index % 2 === 0 ? 'right' : 'left'} md:pr-5`}>
                                <h2 className="text-2xl font-semibold">{item.milestone}</h2>
                                <p className="text-yellow-400">{item.timeline}</p>
                            </div>
                            <div className={`w-full bg-gray-100 p-5 rounded-md shadow-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} mt-4 md:mt-0`}>
                                <ul className="list-disc list-inside">
                                    {item.details.map((detail, i) => (
                                        <li key={i} className="text-lg text-left">{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
