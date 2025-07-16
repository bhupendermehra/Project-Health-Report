import React from 'react';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';

export const HealthIndicators: React.FC = () => {
  const healthData = [
    { name: 'E-commerce Platform', health: 'healthy', progress: 85, deadline: '2024-03-15' },
    { name: 'Mobile App Redesign', health: 'at-risk', progress: 60, deadline: '2024-02-28' },
    { name: 'Data Analytics Tool', health: 'healthy', progress: 92, deadline: '2024-04-10' },
    { name: 'Customer Portal', health: 'critical', progress: 35, deadline: '2024-02-20' },
    { name: 'API Integration', health: 'healthy', progress: 78, deadline: '2024-03-05' }
  ];

  const getHealthIcon = (health: string) => {
    switch (health) {
      case 'healthy':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'at-risk':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'critical':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

  const getHealthBadge = (health: string) => {
    const classes = {
      healthy: 'bg-green-100 text-green-800',
      'at-risk': 'bg-yellow-100 text-yellow-800',
      critical: 'bg-red-100 text-red-800'
    };
    return classes[health as keyof typeof classes] || classes.healthy;
  };

  const getProgressColor = (health: string) => {
    switch (health) {
      case 'healthy':
        return 'bg-green-500';
      case 'at-risk':
        return 'bg-yellow-500';
      case 'critical':
        return 'bg-red-500';
      default:
        return 'bg-green-500';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Health Overview</h3>
      
      <div className="space-y-4">
        {healthData.map((project, index) => (
          <div key={index} className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                {getHealthIcon(project.health)}
                <span className="font-medium text-gray-900">{project.name}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getHealthBadge(project.health)}`}>
                  {project.health.charAt(0).toUpperCase() + project.health.slice(1).replace('-', ' ')}
                </span>
                <span className="text-sm text-gray-500">Due: {project.deadline}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1 mr-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(project.health)}`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};