import React, { useState } from 'react';
import { Plus, Search, Filter, Calendar, Users, DollarSign } from 'lucide-react';

export const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const projects = [
    {
      id: 1,
      name: 'E-commerce Platform',
      status: 'active',
      health: 'healthy',
      progress: 85,
      budget: '$125,000',
      team: 8,
      deadline: '2024-03-15',
      description: 'Full-stack e-commerce solution with modern UI and payment integration'
    },
    {
      id: 2,
      name: 'Mobile App Redesign',
      status: 'active',
      health: 'at-risk',
      progress: 60,
      budget: '$80,000',
      team: 6,
      deadline: '2024-02-28',
      description: 'Complete redesign of mobile application with new UX/UI'
    },
    {
      id: 3,
      name: 'Data Analytics Tool',
      status: 'active',
      health: 'healthy',
      progress: 92,
      budget: '$200,000',
      team: 12,
      deadline: '2024-04-10',
      description: 'Business intelligence and analytics platform for enterprise clients'
    },
    {
      id: 4,
      name: 'Customer Portal',
      status: 'active',
      health: 'critical',
      progress: 35,
      budget: '$90,000',
      team: 5,
      deadline: '2024-02-20',
      description: 'Self-service customer support portal with ticketing system'
    },
    {
      id: 5,
      name: 'API Integration',
      status: 'planning',
      health: 'healthy',
      progress: 78,
      budget: '$60,000',
      team: 4,
      deadline: '2024-03-05',
      description: 'Third-party API integration for enhanced functionality'
    }
  ];

  const getHealthBadge = (health: string) => {
    const classes = {
      healthy: 'bg-green-100 text-green-800',
      'at-risk': 'bg-yellow-100 text-yellow-800',
      critical: 'bg-red-100 text-red-800'
    };
    return classes[health as keyof typeof classes] || classes.healthy;
  };

  const getStatusBadge = (status: string) => {
    const classes = {
      active: 'bg-blue-100 text-blue-800',
      planning: 'bg-purple-100 text-purple-800',
      completed: 'bg-green-100 text-green-800',
      paused: 'bg-gray-100 text-gray-800'
    };
    return classes[status as keyof typeof classes] || classes.active;
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>New Project</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="planning">Planning</option>
            <option value="completed">Completed</option>
            <option value="paused">Paused</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(project.status)}`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getHealthBadge(project.health)}`}>
                  {project.health.charAt(0).toUpperCase() + project.health.slice(1).replace('-', ' ')}
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{project.team} members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-4 h-4" />
                    <span>{project.budget}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{project.deadline}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Details
                </button>
                <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                  Edit Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};