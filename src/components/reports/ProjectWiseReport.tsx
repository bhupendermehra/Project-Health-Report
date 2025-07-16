import React from 'react';
import { FolderOpen, Target, Calendar, TrendingUp } from 'lucide-react';

export const ProjectWiseReport: React.FC = () => {
  const projectData = [
    {
      name: 'Project ABC',
      description: 'Skill development initiative for technical training',
      totalTarget: 200,
      totalAchieved: 165,
      percentage: 82.5,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'active',
      vertices: [
        { name: 'Diya', target: 100, achieved: 85 },
        { name: 'Deep Tech', target: 50, achieved: 42 },
        { name: 'SAVE', target: 25, achieved: 18 },
        { name: 'BEST', target: 25, achieved: 20 }
      ],
      quarters: [
        { quarter: 'Q1', target: 45, achieved: 40 },
        { quarter: 'Q2', target: 55, achieved: 50 },
        { quarter: 'Q3', target: 50, achieved: 35 },
        { quarter: 'Q4', target: 50, achieved: 40 }
      ]
    },
    {
      name: 'Project XYZ',
      description: 'Advanced technology training program',
      totalTarget: 150,
      totalAchieved: 120,
      percentage: 80,
      startDate: '2024-02-01',
      endDate: '2024-11-30',
      status: 'active',
      vertices: [
        { name: 'Deep Tech', target: 75, achieved: 60 },
        { name: 'Diya', target: 50, achieved: 40 },
        { name: 'SAVE', target: 25, achieved: 20 }
      ],
      quarters: [
        { quarter: 'Q1', target: 30, achieved: 25 },
        { quarter: 'Q2', target: 40, achieved: 35 },
        { quarter: 'Q3', target: 40, achieved: 30 },
        { quarter: 'Q4', target: 40, achieved: 30 }
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    const classes = {
      active: 'bg-green-100 text-green-800',
      completed: 'bg-blue-100 text-blue-800',
      paused: 'bg-yellow-100 text-yellow-800'
    };
    return classes[status as keyof typeof classes] || classes.active;
  };

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 80) return 'text-blue-600';
    if (percentage >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 80) return 'bg-blue-500';
    if (percentage >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Project Wise Report</h3>
        <div className="text-sm text-gray-500">
          Total Projects: {projectData.length}
        </div>
      </div>

      <div className="space-y-8">
        {projectData.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <FolderOpen className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{project.name}</h4>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(project.status)}`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${getPerformanceColor(project.percentage)}`}>
                    {project.percentage}%
                  </div>
                  <div className="text-sm text-gray-600">Achievement</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Overall Progress</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {project.totalAchieved}/{project.totalTarget}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className={`h-2 rounded-full ${getProgressColor(project.percentage)}`}
                    style={{ width: `${project.percentage}%` }}
                  />
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Duration</span>
                </div>
                <div className="text-sm text-gray-900">
                  {project.startDate} to {project.endDate}
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Vertices</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {project.vertices.length}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-900 mb-3">Vertex Performance</h5>
                <div className="space-y-3">
                  {project.vertices.map((vertex, vIndex) => {
                    const vertexPercentage = Math.round((vertex.achieved / vertex.target) * 100);
                    return (
                      <div key={vIndex} className="bg-white p-3 rounded border">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{vertex.name}</span>
                          <span className={`text-sm font-medium ${getPerformanceColor(vertexPercentage)}`}>
                            {vertexPercentage}%
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>{vertex.achieved}/{vertex.target}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                          <div 
                            className={`h-1.5 rounded-full ${getProgressColor(vertexPercentage)}`}
                            style={{ width: `${vertexPercentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-900 mb-3">Quarterly Progress</h5>
                <div className="space-y-3">
                  {project.quarters.map((quarter, qIndex) => {
                    const quarterPercentage = Math.round((quarter.achieved / quarter.target) * 100);
                    return (
                      <div key={qIndex} className="bg-white p-3 rounded border">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{quarter.quarter}</span>
                          <span className={`text-sm font-medium ${getPerformanceColor(quarterPercentage)}`}>
                            {quarterPercentage}%
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>{quarter.achieved}/{quarter.target}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                          <div 
                            className={`h-1.5 rounded-full ${getProgressColor(quarterPercentage)}`}
                            style={{ width: `${quarterPercentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-blue-800 font-medium">Total Target</div>
          <div className="text-2xl font-bold text-blue-900 mt-1">
            {projectData.reduce((sum, p) => sum + p.totalTarget, 0)}
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-green-800 font-medium">Total Achieved</div>
          <div className="text-2xl font-bold text-green-900 mt-1">
            {projectData.reduce((sum, p) => sum + p.totalAchieved, 0)}
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-purple-800 font-medium">Active Projects</div>
          <div className="text-2xl font-bold text-purple-900 mt-1">
            {projectData.filter(p => p.status === 'active').length}
          </div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="text-orange-800 font-medium">Avg Achievement</div>
          <div className="text-2xl font-bold text-orange-900 mt-1">
            {Math.round(projectData.reduce((sum, p) => sum + p.percentage, 0) / projectData.length)}%
          </div>
        </div>
      </div>
    </div>
  );
};