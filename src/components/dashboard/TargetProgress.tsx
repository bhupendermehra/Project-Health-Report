import React from 'react';
import { BarChart3 } from 'lucide-react';

export const TargetProgress: React.FC = () => {
  const progressData = [
    { vertex: 'Diya', target: 100, achieved: 85, percentage: 85 },
    { vertex: 'Deep Tech', target: 50, achieved: 42, percentage: 84 },
    { vertex: 'SAVE', target: 25, achieved: 18, percentage: 72 },
    { vertex: 'BEST', target: 25, achieved: 20, percentage: 80 }
  ];

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 75) return 'bg-blue-500';
    if (percentage >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getProgressBg = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-100';
    if (percentage >= 75) return 'bg-blue-100';
    if (percentage >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Target vs Achievement</h3>
        <BarChart3 className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="space-y-6">
        {progressData.map((data, index) => (
          <div key={index} className={`p-4 rounded-lg ${getProgressBg(data.percentage)}`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className="font-medium text-gray-900">{data.vertex}</span>
                <span className="text-sm text-gray-600">
                  {data.achieved}/{data.target}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-900">{data.percentage}%</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(data.percentage)}`}
                style={{ width: `${data.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};