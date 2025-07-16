import React from 'react';
import { Calendar } from 'lucide-react';

export const QuarterlyTrends: React.FC = () => {
  const quarterlyData = [
    { quarter: 'Q1 2024', target: 180, achieved: 165, percentage: 92 },
    { quarter: 'Q2 2024', target: 200, achieved: 165, percentage: 83 },
    { quarter: 'Q3 2024', target: 220, achieved: 0, percentage: 0 },
    { quarter: 'Q4 2024', target: 250, achieved: 0, percentage: 0 }
  ];

  const maxValue = Math.max(...quarterlyData.map(d => d.target));

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Quarterly Trends</h3>
        <Calendar className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {quarterlyData.map((data, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">{data.quarter}</span>
              <span className="text-sm text-gray-600">
                {data.achieved}/{data.target} ({data.percentage}%)
              </span>
            </div>
            
            <div className="relative">
              <div className="w-full bg-gray-200 rounded-full h-6">
                <div 
                  className="bg-gray-300 h-6 rounded-full"
                  style={{ width: `${(data.target / maxValue) * 100}%` }}
                />
                <div 
                  className="bg-blue-500 h-6 rounded-full absolute top-0"
                  style={{ width: `${(data.achieved / maxValue) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-center space-x-6 mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Achieved</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <span className="text-sm text-gray-600">Target</span>
        </div>
      </div>
    </div>
  );
};