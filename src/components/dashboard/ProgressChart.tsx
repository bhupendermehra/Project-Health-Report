import React from 'react';
import { BarChart3 } from 'lucide-react';

export const ProgressChart: React.FC = () => {
  const chartData = [
    { month: 'Jan', completed: 8, planned: 10 },
    { month: 'Feb', completed: 12, planned: 15 },
    { month: 'Mar', completed: 6, planned: 8 },
    { month: 'Apr', completed: 9, planned: 12 },
    { month: 'May', completed: 15, planned: 18 },
    { month: 'Jun', completed: 11, planned: 14 }
  ];

  const maxValue = Math.max(...chartData.map(d => Math.max(d.completed, d.planned)));

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Project Progress</h3>
        <BarChart3 className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {chartData.map((data, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-8 text-sm text-gray-600 font-medium">{data.month}</div>
            <div className="flex-1 flex items-center space-x-2">
              <div className="flex-1 bg-gray-100 rounded-full h-8 relative">
                <div 
                  className="bg-blue-500 h-8 rounded-full transition-all duration-300"
                  style={{ width: `${(data.completed / maxValue) * 100}%` }}
                />
                <div 
                  className="absolute top-0 bg-blue-200 h-8 rounded-full transition-all duration-300"
                  style={{ width: `${(data.planned / maxValue) * 100}%` }}
                />
              </div>
              <div className="text-sm text-gray-600 min-w-0">
                {data.completed}/{data.planned}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-center space-x-6 mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Completed</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
          <span className="text-sm text-gray-600">Planned</span>
        </div>
      </div>
    </div>
  );
};