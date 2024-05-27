// import React from 'react';

// export default function Roadmap() {
//     const roadmapData = [
//         { milestone: 'Project Initiation', timeline: 'Q1 2024', details: ['Define project scope', 'Identify stakeholders', 'Establish project team'] },
//         { milestone: 'Research and Planning', timeline: 'Q2 2024', details: ['Conduct market research', 'Develop project plan', 'Set budget and timeline'] },
//         { milestone: 'Development Phase', timeline: 'Q3-Q4 2024', details: ['Start development', 'Perform initial testing', 'Implement feedback'] },
//         { milestone: 'Testing and Refinement', timeline: 'Q1 2025', details: ['Conduct comprehensive testing', 'Refine product based on feedback', 'Prepare for launch'] },
//         { milestone: 'Launch', timeline: 'Q2 2025', details: ['Final preparations', 'Marketing and promotion', 'Official product launch'] },
//         { milestone: 'Post-Launch', timeline: 'Q3-Q4 2025', details: ['Monitor product performance', 'Gather user feedback', 'Plan for updates and improvements'] },
//     ];

//     return (
//         <div className="relative flex flex-col items-center px-5 md:px-10 py-10 md:py-16">
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-10">Project Roadmap</h1>
//             <div className="relative w-full max-w-4xl">
//                 {/* Central line */}
//                 <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-300"></div>

//                 {roadmapData.map((item, index) => (
//                     <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center mb-10`}>
//                         {/* Connecting line */}
//                         <div className="w-1/2 flex justify-center relative">
//                             <div className="w-0 h-full border-l-2 border-gray-300 absolute left-1/2 transform -translate-x-1/2"></div>
//                         </div>

//                         <div className="w-1/2">
//                             <div className={`flex flex-col items-${index % 2 === 0 ? 'end' : 'start'} pl-5 text-center md:text-${index % 2 === 0 ? 'right' : 'left'} pr-5`}>
//                                 <h2 className="text-2xl font-semibold">{item.milestone}</h2>
//                                 <p className="text-yellow-400">{item.timeline}</p>
//                             </div>
//                             <div className={`w-full bg-gray-100 p-5 rounded-md shadow-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
//                                 <ul className="list-disc list-inside">
//                                     {item.details.map((detail, i) => (
//                                         <li key={i} className="text-lg">{detail}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }











import React from 'react';

export default function Roadmap() {
    const roadmapData = [
        { milestone: 'Project Initiation', timeline: 'Q1 2024', details: ['Define project scope', 'Identify stakeholders', 'Establish project team'] },
        { milestone: 'Research and Planning', timeline: 'Q2 2024', details: ['Conduct market research', 'Develop project plan', 'Set budget and timeline'] },
        { milestone: 'Development Phase', timeline: 'Q3-Q4 2024', details: ['Start development', 'Perform initial testing', 'Implement feedback'] },
        { milestone: 'Testing and Refinement', timeline: 'Q1 2025', details: ['Conduct comprehensive testing', 'Refine product based on feedback', 'Prepare for launch'] },
        { milestone: 'Launch', timeline: 'Q2 2025', details: ['Final preparations', 'Marketing and promotion', 'Official product launch'] },
        { milestone: 'Post-Launch', timeline: 'Q3-Q4 2025', details: ['Monitor product performance', 'Gather user feedback', 'Plan for updates and improvements'] },
    ];

    return (
        <div className="relative flex flex-col items-center px-5 md:px-10 py-10 md:py-16">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-10">Project Roadmap</h1>
            <div className="relative w-full max-w-4xl">
                {/* Central line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-300 hidden sm:block sm:z-50"></div>

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
                                        <li key={i} className="text-lg">{detail}</li>
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
