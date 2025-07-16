import React from 'react';
import { Calendar, Users, DollarSign, Target } from 'lucide-react';

export const ProjectStatusGrid: React.FC = () => {
  const projects = [
    {
      name: 'E-commerce Platform',
      status: 'On Track',
      statusColor: 'green',
      progress: 85,
      budget: '$125,000',
      budgetUsed: 78,
      team: 8,
      deadline: '2024-03-15',
      description: 'Full-stack e-commerce solution with modern UI'
    },
    {
      name: 'Mobile App Redesign',
      status: 'At Risk',
      statusColor: 'yellow',
      progress: 60,
      budget: '$80,000',
      budgetUsed: 85,
      team: 6,
      deadline: '2024-02-28',
      description: 'Complete redesign of mobile application'
    },
    {
      name: 'Data Analytics Tool',
      status: 'On Track',
      statusColor: 'green',
      progress: 92,
      budget: '$200,000',
      budgetUsed: 70,
      team: 12,
      deadline: '2024-04-10',
      description: 'Business intelligence and analytics platform'
    },
    {
      name: 'Customer Portal',
      status: 'Critical',
      statusColor: 'red',
      progress: 35,
      budget: '$90,000',
      budgetUsed: 95,
      team: 5,
      deadline: '2024-02-20',
      description: 'Self-service customer support portal'
    }
  ];

  const getStatusColor = (color: string) => {
    const colorMap = {
      green: 'bg-green-100 text-green-800',
      yellow: 'bg-yellow-100 text-yellow-800',
      red: 'bg-red-100 text-red-800'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  const getProgressColor = (color: string) => {
    const colorMap = {
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      red: 'bg-red-500'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Status Overview</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-gray-900">{project.name}</h4>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.statusColor)}`}>
                {project.status}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Progress</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(project.statusColor)}`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{project.team}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{project.budget}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{project.deadline}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};